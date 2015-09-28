var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname+'/public'));
app.use(cors());
app.use(bodyParser.json());

app.get('/interest_rate', function(req, res) {
    return res.json({interest_rate:
        Math.floor((Math.random()*2000)/10)/1000});
});

app.listen(8080, function() {
    console.log('Listening on port 8080')   
})