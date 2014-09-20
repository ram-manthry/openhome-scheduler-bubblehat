var OpenHome = function (suburb, startTime, endTime) {
	var o = {};
	o.suburb = suburb;
	o.startTime = startTime;
	o.endTime = endTime;
	return o;
};

module.exports = OpenHome;