exports.getOpenHomes = function (watchListItems) {
    console.log('getOpenHomes() !');
    console.log("###length: " + watchListItems.length);

    var openHomeList = [];

    var i;
    for(i = 0; i < watchListItems.length; i++) {

        console.log("this is an openHome: " + watchListItems[i]);
        var openHome = watchListItems[i].OpenHomes;

        var attributes = watchListItems[i].Attributes;

        var title = watchListItems[i].Title;
        var location;

        var j;
        for (j=0; j< attributes.length;j ++) {
            if (attributes[j].Name == "location") {
                location = attributes[j].Value;
                break;
            }
        }

        var OpenHome = require('../models/openHome.js');
        var openHomeModelInstance = new OpenHome(title, location, openHome.Start, openHome.End);

        openHomeList.push(openHomeModelInstance);
    }

    return openHomeList;
};