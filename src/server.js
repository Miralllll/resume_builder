// CORS is a node.js package for providing a Connect/Express 
// middleware that can be used to enable CORS with various options.
var cors = require("cors");
var path = require("path");
const fileupload = require("express-fileupload");
const express = require("express");
const app = express();
const latex = require("node-latex");
const { join, resolve } = require("path");
const PORT = process.env.PORT || 8060;

app.use(cors());
app.use(fileupload());
app.use(express.static(path.join(path.dirname(__dirname), "\\build")));

app.get("/", (res) => {
  console.log(path.dirname(__dirname) + "\\build\\index.html");
  res.sendFile(path.join(path.dirname(__dirname) + "\\build\\index.html"));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

app.post("/upload", function (request, response) {
  const options = {
    inputs: [resolve(join(__dirname, "/"))],
    cmd: "xelatex",
    passes: 2,
  };
  response.setHeader("Content-Type", "application/pdf");
  console.log(request.body.pdfpdf);
  let binaryVersion = atob(request.body.pdfpdf.toString("base64"));
  console.log(binaryVersion);
  let text = binaryVersion.toString();
  console.log(text);
  const pdf = latex(text, options);
  console.log("pdf" + pdf);
  pdf.pipe(response);
  pdf.on("error", (err) => {
    console.log("error" + err.message);
    response.removeHeader("Content-Type");
    response.status(400).send(JSON.stringify({ error: err.message }));
  });
  pdf.on("finish", () => {});
});
