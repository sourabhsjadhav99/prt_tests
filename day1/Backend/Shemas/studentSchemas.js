let mongoose = require("mongoose");
let Schema =mongoose.Schema;
let studentSchemas = new Schema({
    name:{type:String, require:true},
    classId:{type:Number, require:true},
    studentId:{type:Number, require:true, unique:true},
})
let studentmodel=mongoose.model( "studentColl", studentSchemas)
module.exports= studentmodel
