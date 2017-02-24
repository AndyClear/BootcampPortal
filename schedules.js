var schedules = require('./bootcamp/schedules.json')
	var fs = require('fs');

module.exports = function (req, res) {
	var page = "schedules";//req.params.page_name;
	if ('/bootcamp/schedules/'+req.params.eventID != req.path) return next(req, res);
	console.log(req.path + " is the request path");
	console.log(page + " is the page");
	console.log(req.params.eventID + " is the event id");
	

var jsonObj = JSON.parse(fs.readFileSync("./bootcamp/" + page + ".json", 'utf8'));

//console.log(jsonObj);
	//var jsonObj = require("./bootcamp/" + page);
			//res.writeHead(200, {"Content-Type": "text/html"});
			//res.end(JSON.stringify(jsonObj, null, 2));
	   
	var id = req.params.eventId;
var data;
	console.log(jsonObj.schedule.length);
	console.log(jsonObj.schedule[0]);
	for(var i = 0; i < jsonObj.schedule.length; ++i) {
   if (req.params.eventID == jsonObj.schedule[i].id) {
      console.log ("id present " + jsonObj.schedule[i]	);
	  data = jsonObj.schedule[i];
	  break;
   }
}


	
	console.log("data is " + data);
	res.writeHead(200, {"Content-Type": "text/html"});
			res.end(JSON.stringify(data, null, 2));
	   
	
}



function next(req, res) {
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end("Invalid URL");	
}