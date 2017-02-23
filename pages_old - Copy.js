var fs = require('fs');
var http = require('http');

exports.version='0.1.0';

exports.generate = function (req, res) {
	var page = req.params.page_name;
	
	fs.open(page, 'r', (err, fptr) => {
		if (err) {
			console.log("cannot open: " + page);
			return;
		}

	    var buf = new Buffer(100);
	    fs.read(fptr, buf, 0, 100, null, (err, length) => {
            if (err) {
	       	    console.log("Error reading file. Error code: " + err.code + "\nMessage:" + err.message);
	       	    return;
	        }
       	
			//console.log(buf.toString('utf8', 0, length));
			
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(buf);
	        fs.close(fptr, () => {  }); 
   	   }); 


            
    });
	
}