/**
 * Created by Mike on 2017/7/8.
 * 所有100个专业类
 */
var mongoose=require('mongoose');

var university_professional_subjectschema=new mongoose.Schema({
    ID:Number,
    Name:String,
    Remark:String
});

mongoose.model('University_professional_subject',university_professional_subjectschema);