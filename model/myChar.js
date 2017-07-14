/**
 * Created by LinGaunnan on 7/4/2017.
 */
var mongo = require('mongoose');

var myChar = new mongo.Schema({
    username:String,
    t_res:[{
        date:String,
        dimen1:String,
        dimen2:String,
        dimen3:String,
        dimen4:String,
        res:String
    }]
});

mongo.model("myChar",myChar);