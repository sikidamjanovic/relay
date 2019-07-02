
var express = require('express');
var app = express();
var database = firebase.database();
var chapter = database.ref('chapter');
var ref = database.ref('chapter');
ref.on('value', gotData, errData);

app.get('/', function (req, res) {
  console.log("HTTP Get Request");
  res.send("HTTP GET Request");
});

app.put('/', function (req, res) {
  console.log("HTTP Put Request");
  res.send("HTTP PUT Request");
});

app.post('/', function (req, res) {
  console.log("HTTP POST Request");
  res.send("HTTP POST Request");  
});

app.delete('/', function (req, res) {
  console.log("HTTP DELETE Request");
  res.send("HTTP DELETE Request");
});

//Testing api 'push'

if (true) //some button is pressed
{
    var chapterPost = {
        text: 'random string from you siki',
        likeCount: 1
    }
    chapter.push(chapterPost, finished);
    function finished(error) {
        if (error) {
          console.log('ooops');
        } else {
          console.log('data saved!');
        }
      }
}
//update likes
if (true) //some button is pressed
{
    var chapterPost = {
        text: 'Existing text variable from main js',
        likeCount: likes++
    }
    chapter.push(chapterPost, finished);
    function finished(error) {
        if (error) {
          console.log('ooops');
        } else {
          console.log('data saved!');
        }
      }
}

//testing api 'pull'
function gotData(data) {
    var fruits = data.val();
    // Grab the keys to iterate over the object
    var keys = Object.keys(chapter);
  
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // Look at each fruit object!
      var fruit = fruits[key];
    }
  }


var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});