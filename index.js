import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;



app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index.ejs");
    
  });


//   app.post("/create-post", (req, res) => {
//     res.render("about.ejs");
// });

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
  
 });


app.get("/all-blogs" , (req,res) => {
  const blogs = [{
    title: 'GPG Data Ingestion Solution',
    creation : '',
    description : `gfdddddddddddd`,
  },
  {
    title: 'test article',
    creation : '',
    description : 'test descasdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd',
  },
  {
    title: 'test article',
    creation : '',
    description : 'test descasdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd',
  }]
  res.render("blogposts.ejs", {blog : blogs})
})

app.post("/write-blog" , (req , res) => {
  res.render("createpost.ejs");
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  