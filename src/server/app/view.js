// TODO: Download react.js and make it a relative JS import and use
// different directory paths for dev & production via Express routing
// and configuration.
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
           <div id="app_mount"></div>
           <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
           <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
           <script src="js/app.js" type="module"></script>
         </body>
       </html>`
  ));
}

module.exports = {
  mainPage
};
