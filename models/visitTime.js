
var moment = require('moment');
var VisitTime = function (startTime, endTime) {
	var k = {};
	k.startTime = new Date(moment(startTime).format('MMM DD YYYY'));
	k.endTime = new Date(moment(endTime).format('MMM DD YYYY'));


	return k;
};

module.exports = VisitTime;