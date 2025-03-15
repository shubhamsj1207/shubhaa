const mongoose=require('mongoose');
const registeruserSchema= new mongoose.Schema({
    name:{
        type: String,
        reuired: true,
        trim: true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    mobileno:{
        type:Number,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
});

const reguser=new mongoose.model("reguser",registeruserSchema);
module.exports=reguser;