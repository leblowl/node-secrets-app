const express = require('express')

let app;
let server;

const loadRoutes = function(app) {
    app.get('/', (req, res) => res.send('Hello World!'));
}

module.exports.start = function(port=3000) {
    app = express();
    loadRoutes(app);
    server = app.listen(port, () => console.log(`Listening on port ${port}...`))
}

module.exports.stop = function() {
    server.close();
}
