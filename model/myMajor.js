/**
 * Created by LinGaunnan on 7/4/2017.
 */
var mongo = require('mongoose');

var myMajor = new mongo.Schema({
    username:String,
    t_res:[{
        t_date:String,
        major1:String,
        major2:String,
        major3:String

    }]
});

mongo.model("myMajor",myMajor);