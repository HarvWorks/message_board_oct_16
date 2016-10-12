var mongoose = require('mongoose');
var mongoose_comments = mongoose.model('mongoose_comments');
var mongoose_dashboards = mongoose.model('mongoose_dashboards');
module.exports = {
    index: function(req, res) {
        mongoose_dashboards.find({}, function(err, messages) {
            var tmessages = messages;
            mongoose_comments.find({}, function(err, comments) {
                res.render('index', {messages: tmessages, comments:comments});
            });
        });
    },
    message: function(req, res) {
        var mongoose_dashboard = new mongoose_dashboards({name: req.body.name, message: req.body.message});
        mongoose_dashboard.save(function(err) {
            if(!err) {
                res.redirect('/');
            }
        });
    },
    post: function(req, res) {
        var mongoose_comment = new mongoose_comments({message_id:req.params.id, name: req.body.name, message: req.body.message});
        mongoose_comment.save(function(err) {
            if(!err) {
                res.redirect('/');
            }
        });
    }
};
