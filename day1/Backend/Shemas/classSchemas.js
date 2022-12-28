let mongoose = require("mongoose");
let Schema =mongoose.Schema;
let studentSchemas = new Schema({
    id:{type:String, require:true, unique:true},
    studentCount:{type:Number, require:true},
    class:{type:String, require:true},
})
let classmodel=mongoose.model( "classColl", studentSchemas)
module.exports= classmodel
