/**
 * Created by 1 on 2016/5/16.
 */
var mongoose=require('mongoose');
var config=require('./db_url.js');

module.exports=function(){
    var db=mongoose.connect(config.mongodb);
    require('../model/user.js');
    require('../model/news.js');
    require('../model/recruit.js');
    require('../model/quit.js');
    require('../model/feedback.js');
    require('../model/myMajor.js');
    require('../model/myChar.js');
    require('../model/major_master.js');
    require('../model/major_class.js');
    require('../model/university_major_subject.js');
    return db;
}