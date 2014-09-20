/**
 * Created by John on 20/09/2014.
 */
var moment = require('moment');

exports.format = function(unformattedDateTime) {
    var wholeDateTime = new Date(moment(unformattedDateTime));
    var date = wholeDateTime.getDate();
    var day = wholeDateTime.getDay();
    var month = wholeDateTime.getMonth();
    var time = wholeDateTime.getTime();
    //return day + " " + date + " " + month + " " + time;
    return wholeDateTime;
};