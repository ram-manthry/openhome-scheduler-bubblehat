var OpenHomeBuilder = function () {};

OpenHomeBuilder.prototype.getOpenHome = function (jsonOpenHome, suburb) {
    console.log('baz!');

    // app.js
    var OpenHome = require('../models/openHome.js').OpenHome;
    var openHome = new OpenHome(suburb, jsonOpenHome.Start, jsonOpenHome.End);
    openHome.log();

    return openHome;
};

exports.OpenHomeBuilder = OpenHomeBuilder;