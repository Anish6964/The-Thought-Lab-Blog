import express from "express";
import connectDB from './Server/db.js';
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"
const __dirname = dirname(fileURLToPath(import.meta.url));
import { Post } from './Server/Models/post.js';
import methodOverride from 'method-override';

const app = express();
const port = 3000;
connectDB(); //connect to database

app.use(methodOverride('_method')); 

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {                        ///HOME PAGE
    res.render("index.ejs");
 });


app.get("/write-blog-post", (req, res) => {             /// WRITE  ARTICLE PAGE
   res.render("writepost.ejs");
 });

app.get("/about", (req, res) => {                       /// ABOUT PAGE
  res.render("about.ejs"); 
 });


app.get("/all-blogs" , async (req,res) => {  
  try {
    const data = await Post.find();
    res.render("blogposts.ejs", {blog : data});
  } catch (error) {
    console.log(error);
  }
                                                                                      
});


app.post("/submit-blog", async (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    body: req.body.description, // Assuming you have a 'body' field in your schema
    // Add other fields as necessary
  });

  try {
    await newPost.save();
    res.redirect("/all-blogs");
  } catch (error) {
    console.log(error);
    res.status(500).send('Error occurred');
  }
});



  app.get("/post/:id", async (req, res) => {
    try {
      const postId = req.params.id;
      const data = await Post.findById(postId); // Just pass the postId
      res.render("individualblog.ejs", { data });
    } catch (error) {
      console.log(error);
      // Optionally, send a response indicating an error occurred
      res.status(500).send('Error occurred');
    }
  });



  app.delete("/delete-post/:id", async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id);
      res.redirect("/all-blogs");
      
    } catch (error) {
      console.log(error);
      res.status(500).send('Error occurred');
    }
  });

  app.get("/edit-post/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.render("editpost.ejs", { data: post });
    } catch (error) {
      console.log(error);
      res.status(500).send("Error occurred");
    }
  });
  
  
  app.post("/update-post/:id", async (req, res) => {
  try {
    
    await Post.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      body: req.body.body,
      updatedAt: Date.now()  // If you have an updatedAt field
    });
    res.redirect("/all-blogs"); // Redirect to the list of all blog posts

  } catch (error) {
    console.log(error);
    res.status(500).send("Error occurred");
  }
});




app.listen(port, () => {                                      /// PORT LISTENER
    console.log(`Listening on port ${port}`);
  });
  

 // EiUVM9a1Hacsek1y 
 