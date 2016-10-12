var mongoose = require('mongoose');
var mongoose_dashboardsSchema = new mongoose.Schema({
    name: {type:String, required: true},
    message: {type:String, required: true},
},
{
    timestamps: true
});
mongoose.model('mongoose_dashboards', mongoose_dashboardsSchema);
var mongoose_dashboards = mongoose.model('mongoose_dashboards');
var mongoose_commentsSchema = new mongoose.Schema({
    message_id: {type:String, required: true},
    name: {type:String, required: true},
    message: {type:String, required: true},
},
{
    timestamps: true
});
mongoose.model('mongoose_comments', mongoose_commentsSchema);
var mongoose_comments = mongoose.model('mongoose_comments');
