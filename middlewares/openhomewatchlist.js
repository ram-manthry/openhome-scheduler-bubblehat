var request = require('request');

// Middleware to retrieve the user home timeline
// Show only open homes in your watchlist.
exports.watchlist = function(req, res, next) {
	req.trademe = req.trademe || {};

	var oauth = {
		consumer_key: req.app.set('oauth consumer key'),
		consumer_secret: req.app.set('oauth consumer secret'),
		token: req.session.oauth.access_token,
		token_secret: req.session.oauth.access_token_secret
	},
url = 'https://api.' + req.app.set('api domain') + '/v1/MyTradeMe/Watchlist/OpenHomes.json';

	request.get({
		url: url,
		oauth: oauth,
		json: true
	}, function(e, r, result) {
		req.trademe.watchlist = result;
		console.log(result.List[0]);

        var watchListItems = result.List;

        var i = 0;
        for(i = 0; i < watchListItems.length; i++) {
            var openHome = watchListItems[i].OpenHomes;
            var startTime = watchListItems[i].OpenHomes.Start;
            var endTime = watchListItems[i].OpenHomes.End;

            var suburb = watchListItems[i].Suburb;

            var OpenHomeBuilder = require('../controller/openHomeBuilder.js').OpenHomeBuilder;
            var openHomeBuilder = new OpenHomeBuilder();
            openHomeBuilder.getOpenHome(openHome, suburb);
        }

		next();
	});
};