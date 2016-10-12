// var mongoose = require('mongoose');
// var mongoose_comments = mongoose.model('mongoose_comments');
// var mongoose_dashboards = mongoose.model('mongoose_dashboards');
var dashboards = require('../controllers/dashboards.js');
module.exports = function(app) {
    app.get('/', function(req, res) {
        dashboards.index(req,res);
    });
    app.post('/message', function(req, res) {
        dashboards.message(req,res);
    });
    app.post('/comment/:id', function(req, res) {
        dashboards.post(req,res);
    });
};
