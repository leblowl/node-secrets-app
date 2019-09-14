global.app = require('./app.js');

/**
 * Reload a module.
 * Usage:
 *   app = reload('./app.js');
 *
 * TODO: Any simpler way to do this? For example:
 *   reload(app)
 */
global.reload = function(module){
    delete require.cache[require.resolve(module)]
    return require(module)
}
