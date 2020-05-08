const fs = require("fs"); //file-system module included
const http = require("http");
const url = require("url");

/*----------------------------------------*/
// SERVER

// Top level code. Only works once when at the start of the code. Used as synchronous version. (no problem here)
// const data = fs.readFileSync(
//   `${__dirname}/dev-data/data.json`,
//   "utf-8",
//   (err, data) => {
//     const productData = JSON.parse(data); //convert data from json file to java script opject
//   }
// );
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data); //convert data from json file to java script opject

const server = http.createServer((req, res) => {
  //console.log(req);
  console.log(req.url); //ana url'den sonra gelen parametre kısmını parse eder

  const pathName = req.url;

  // ROUTING...
  if (pathName === "/") {
    res.end("Hello from TA2LSM server!\n\n> _");
  } else if (pathName === "/overview") {
    res.end("Overview Section...");
  } else if (pathName === "/product") {
    res.end("Product Section...");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" }); //tell the browser for application type json. Code 200 means ok.
    res.end(data);

    // //fs.readFile("./dev-data/data.json");    //. means current directory
    // fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
    //   const productData = JSON.parse(data); //convert data from json file to java script opject
    //   //console.log(productData);
    //   res.writeHead(200, { "Content-type": "application/json" }); //tell the browser for application type json. Code 200 means ok.
    //   res.end(data);
    //});
    //res.end("API");
  } else {
    //res.writeHead(404);
    //res.end("Invalid parameter. Page not found !!!");

    // these codes below must be written before res.end !!!
    res.writeHead(404, {
      "Content-type": "text/html",
      "My-own-header": "Hello World!",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

//Local host, 8000 port
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port: 8000");
});
