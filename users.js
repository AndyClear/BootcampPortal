var users = require('./bootcamp/users.json')
	var fs = require('fs');

module.exports = function (req, res) {
	var page = "users";//req.params.page_name;

	console.log(req.path + " is the request path");
	console.log(page + " is the page");
	console.log(req.params.eventID + " is the event id");
	//if ('/bootcamp/users/'+req.params.eventID != req.path) return next(req, res);	

var jsonObj = JSON.parse(fs.readFileSync("./bootcamp/" + page + ".json", 'utf8'));

//console.log(jsonObj);
	//var jsonObj = require("./bootcamp/" + page);
			//res.writeHead(200, {"Content-Type": "text/html"});
			//res.end(JSON.stringify(jsonObj, null, 2));
	   
	var id = req.params.eventId;
var data;
	console.log(jsonObj.user.length);
	console.log(jsonObj.user[0]);
	for(var i = 0; i < jsonObj.user.length; ++i) {
   if (req.params.eventID == jsonObj.user[i].eventID) {
      console.log ("id present " + jsonObj.user[i]	);
	  data = jsonObj.user[i];
	  break;
   }
}


	
	console.log("data is " + data);
	res.writeHead(200, {"Content-Type": "text/html"});
			res.end(JSON.stringify(data, null, 2));
	   
	
}



//function next(req, res) {
	//		res.writeHead(200, {"Content-Type": "text/html"});
		//	res.end("Invalid URL");	
//}