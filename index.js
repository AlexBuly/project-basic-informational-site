// const http = require('http');
// const path = require('path');
// const fs = require('fs');
const express = require("express");
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8080;

// With express
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Without express 
// const server = http.createServer((req, res) => {
//     let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
//     let extname = path.extname(filePath);
//     let contentType = 'text/html';

//     // Set contentType
//     switch (extname) {
//         case '.js':
//             contentType = 'text/javascript';
//             break;
//         case '.css':
//             contentType = 'text/css';
//             break;
//         case '.json':
//             contentType = 'application/json';
//             break;
//         case '.png':
//             contentType = 'image/png';
//             break;
//         case '.jpg':
//             contentType = 'image/jpg';
//             break;
//     }

//     if (contentType == 'text/html' && extname == "") filePath += '.html';

//     // Read file
//     fs.readFile(filePath, (err, content) => {
//         // if page not found
//         if (err) {
//             if (err.code == 'ENOENT') {
//                 fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
//                     res.writeHead(404, {'Content-Type': 'text/html'});
//                     res.end(content, 'utf8');
//                 });
//             } else {
//                 res.writeHead(500);
//                 res.end(`Server Error ${err.code}`);
//             }
//         } else {
//             // if page found
//             res.writeHead(200, {'Content-Type': contentType });
//             res.end(content, 'utf8'); 
//         }
//     });
// });

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));