/**
 * Created by Mike on 2017/7/8.
 * 所有100个专业类
 */
var mongoose=require('mongoose');

var university_major_subjectschema=new mongoose.Schema({
    ID:Number,
    Name:String,
    Remark:String
});

mongoose.model('University_major_subject',university_major_subjectschema);