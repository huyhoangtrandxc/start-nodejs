const express = require('express');
const app = express();
const fs = require("fs");
const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');
const multer = require('multer');

const host = 3000;

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({
  extended: false
});

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(multer({
  dest: '/tmp/'
}).any());

app.get('/', (req, res) => {
  res.send('Hello World');
  console.log("Cookies: ", req.cookies);
});

// var server = app.listen(8081, function() {
//   var host = server.address().address
//   var port = server.address().port

//   console.log("Example app listening at http://%s:%s", host, port);
// })


// This responds with "Hello World" on the homepage
// app.get('/', (req, res) => {
//   console.log("Got a GET request for the homepage");
//   res.send('Hello GET');
// })

// // This responds a POST request for the homepage
// app.post('/', (req, res) => {
//   console.log("Got a POST request for the homepage");
//   res.send('Hello POST');
// })

// // This responds a DELETE request for the /del_user page.
// app.delete('/del_user', (req, res) => {
//   console.log("Got a DELETE request for /del_user");
//   res.send('Hello DELETE');
// })

// // This responds a GET request for the /list_user page.
// app.get('/list_user', (req, res) => {
//   console.log("Got a GET request for /list_user");
//   res.send('Page Listing');
// })

// // This responds a GET request for abcd, abxcd, ab123cd, and so on
// app.get('/ab*cd', (req, res) => {
//   console.log("Got a GET request for /ab*cd");
//   res.send('Page Pattern Match');
// })

app.get('/index.htm', (req, res) => {
  res.sendFile("/index.htm");
});

app.get('/process_get', (req, res) => {
  // Prepare output in JSON format
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

app.post('/process_post', urlencodedParser, (req, res) => {
  // Prepare output in JSON format
  response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

app.post('/file_upload', (req, res) => {
  console.log(req.files.file.name);
  console.log(req.files.file.path);
  console.log(req.files.file.type);
  const file = "/" + req.files.file.name;

  fs.readFile(req.files.file.path, (err, data) => {
    fs.writeFile(file, data, (err) => {
      if (err) {
        console.log(err);
      } else {
        response = {
          message: 'File uploaded successfully',
          filename: req.files.file.name
        };
      }

      console.log(response);
      res.end(JSON.stringify(response));
    });
  });
})

app.listen(host, () => {
  console.log(`Example app listening at http://localhost:${host}`);
});