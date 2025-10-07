# project-basic-informational-site
In this project, I created a basic website using Node.js and Express.js. 

First, I imported the http, path, and fs modules from Node.js. The http module is used to created an HTTP server object. Next, the path module is used to combine the directory and file path into one path using path.join(). A switch statement is then to handle multiple different file extensions types. Lastly, the reading of the file is handled using fs.readFile() which also handles errors.

The second part of the project is handling with Express.js. Using express.static(), switching files types is automatically handled. Error are handled using res.sendFile() which is a method used to send static files directly to the client as an HTTP response. 

The page in this app are index.html, about.html, contact-me.html, and 404.html. 404.html handles 404 errors. 