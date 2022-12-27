let mongoose = require("mongoose")
let url="mongodb://localhost:27017/classdb"
mongoose.connect(url).then(()=>{
    console.log("connected to database")
})
    
