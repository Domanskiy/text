var textRequire = require.config({
    urlArgs : "bust="+new Date().getTime()
});

textRequire(["functions"], function(functions) {
    functions.init();
})
