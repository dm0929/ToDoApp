var express = require('express'),
    app = express();
app.use(express.static(__dirname));
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  console.log(__dirname);
  next();
});
app.get('/todo', function(req, res){
    res.sendFile('app/index.html', { root: __dirname });
});
app.get('/*', function(req, res) {
    res.redirect('/todo')
});
app.listen(9099);