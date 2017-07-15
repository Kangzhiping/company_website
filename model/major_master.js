/**
 * Created by Mike on 2017/7/8.
 * 所有525个专业
 */
var mongoose=require('mongoose');

var  major_masterschema=new mongoose.Schema({
    ID:String,
    Name:String,
    Class_name:String,
    Class_subject_name:String,
    Remark:String
});

mongoose.model('Major_master',major_masterschema);