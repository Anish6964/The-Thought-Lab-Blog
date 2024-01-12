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

// app.get("/view-all", (req, res) => {
  
// });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  