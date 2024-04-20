/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module

  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files

  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt

    - For any other route not defined in the server return 404

    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

const filesArr = [];
fs.readdir('./files', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  console.log('Files in directory:', files);
  filesArr.push(files); 
  console.log('Files in ARRAY:', filesArr);
});

app.get('/', (req, res) => {

  // not working
  // const arr2 = [];

  // files.map((file) => {
  //   arr2.push({ file });
  // });

  // res.send(arr2);

  const arr2 = filesArr.map(file => ({ file }));

  res.status(200).json(arr2);
});


app.listen(port, ()=>{
  console.log(`server running on ${port}`)
})


module.exports = app;
