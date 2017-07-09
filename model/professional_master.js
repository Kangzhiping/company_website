/**
 * Created by Mike on 2017/7/8.
 * 所有525个专业
 */
var mongoose=require('mongoose');

var  professional_masterschema=new mongoose.Schema({
    ID:String,
    Name:String,
    Class_name:String,
    Class_subject_name:String,
    Remark:String
});

mongoose.model('Professional_master',professional_masterschema);