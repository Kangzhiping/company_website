/**
 * Created by Mike on 2017/7/8.
 * 所有100个专业类
 */
var mongoose=require('mongoose');

var major_classschema=new mongoose.Schema({
    ID:Number,
    Name:String,
    Class_subject_name:String,
    Remark:String
});

mongoose.model('Major_class',major_classschema);