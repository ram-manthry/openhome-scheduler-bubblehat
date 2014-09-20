var OpenHome = function (title, location, startTime, endTime) {
	var o = {};
    o.title = title;
	o.location = location;
	o.startTime = startTime;
	o.endTime = endTime;
	return o;
};

module.exports = OpenHome;

