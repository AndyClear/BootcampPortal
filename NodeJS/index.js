/**
 * Created by AHINDE on 23/02/2017.
 */
var express = require('express');
var file1 = require('./schedule.json');
var file2 = require('./attendee.json');
var file3 = require('./events.json');
var app = express();

function getEventSchedule(id) {
    console.log(file1[id]);
    return file1[id];
}

function getEventAttendeeID(id) {
    return file2[id];
}

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.listen(3000);


app.get('/events', function (req, res){
    const events = (file3);
    res.json(events);
    res.end();
});

app.get('/schedule', function (req, res){
    const schedule = (file1);
    res.json(schedule);
    res.end();
});

app.get ('/schedule/:id', function (req,res) {
    const id = req.params.id;
    const data = file1[id];
    getEventSchedule(id);
    res.setHeader('content-type', 'application/json');
    res.write(JSON.stringify(data));
    res.end();
});

app.get('/eventAttendee', function (req, res){
    const attendee = (file2);
    console.log(attendee);
    res.json(attendee);
    res.end();
});

app.get ('/eventAttendee/:id', function (req,res) {
    const id = req.params.id;
    const data = file2[id];
    getEventAttendeeID(id);
    res.setHeader('content-type', 'application/json');
    res.write(JSON.stringify(data));
    res.end();
});
