var events = require('./bootcamp/events.json')

module.exports = function (req, res) {
	var page = req.params.page_name;
	//if ('/bootcamp/events' != req.path) return next();
	console.log(req.path + " is the request path");
	var jsonObj = require("./bootcamp/" + page);
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(JSON.stringify(jsonObj, null, 2));
	   
	//var id = req.params.eventId;
	
	//var data = asdf[id]???
	//res.write()
	//res.end()
}



function next(req, res) {
	
}