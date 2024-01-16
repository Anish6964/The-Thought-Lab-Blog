import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;



app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let blogs = [{
  title: 'GPG Data Ingestion Solution',

  description : `Description: Developed a solution to seamlessly ingest data from GPG encrypted Zip files and facilitate data storage and retrieval.

  Role: Developer
  
  Language: Python
  
  Tools Used: AWS S3,EC2,Lambda`,
},
{ 
title: 'IoT Based Home Security Status Monitoring System Using Blynk',

description: `Description: This system works by monitoring the activity of the main door or windows as soon as the system detects that the door is opened or being tampered with, the user instantly gets a notification on his/her phone through the Blynk App notifying that the door has been opened so that we can act very swiftly to the situation.

Role: Team Leader

Language: C Language

Tools Used: Arduino IDE, Blynk IoT, Node MCU Board`

},
{
title: `Triple Band Dual Ring Antenna for Wearable Applications`,

description: `Description: In this project our main aim is to design a Triple-band open-ring high-gain high-efficiency antenna for 2.45/3.0/3.45 GHz wearable applications. The proposed antenna operates at 2.45 GHz for Industrial Specific, and Medical (ISM) applications, 3.0 GHz for military applications, and 3.45 GHz for Worldwide Interoperability for Microwave Access (WiMAX) applications.

Role: Team Leader

Tools Used: Ansys HFSS`

}];


app.get("/", (req, res) => {                        ///HOME PAGE
    res.render("index.ejs");
 });


app.get("/write-blog-post", (req, res) => {             /// WRITE  ARTICLE PAGE
   res.render("writepost.ejs");
 });

app.get("/about", (req, res) => {                       /// ABOUT PAGE
  res.render("about.ejs"); 
 });


app.get("/all-blogs" , (req,res) => {                        /// VIEW ALL BLOGS PAGE
  res.render("blogposts.ejs", {blog : blogs});
});


app.post("/submit-blog" , (req,res) => {                          ///after writing submit post

  const newPost = {
    title : req.body.title,
    description : req.body.description,

  }

  blogs.push(newPost);

  res.redirect("/all-blogs");


})


app.delete("/delete-post" , (req,res) => {
  
})








app.listen(port, () => {                                      /// PORT LISTENER
    console.log(`Listening on port ${port}`);
  });
  