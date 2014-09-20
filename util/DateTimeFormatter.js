/**
 * Created by John on 20/09/2014.
 */
var moment = require('moment');

exports.format = function(unformattedDateTime) {
    return new Date(moment(unformattedDateTime));
};