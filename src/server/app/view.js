function mainPage(res) {
  res.set("Content-Type", "text/html");
  res.send(new Buffer(
      `<!doctype html>
       <html lang="en">
         <head>
           <meta charset="utf-8">
           <title>Node Secrets App</title>
           <meta name="description" content="NodeJS Open Secrets Demo App">
           <meta name="author" content="Lucas Leblow">
           <link rel="stylesheet" href="css/app.css">
         </head>
         <body>
           <div id="app-mount"></div>
           <script src="js/app.js" type="module"></script>
         </body>
       </html>`
  ));
}

module.exports = {
  mainPage
};
