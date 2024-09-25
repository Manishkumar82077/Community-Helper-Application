import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullName: {
        type:String,
        require:true
    },email: {
        type:String,
        require:true,
        unique:true
    },phoneNo: {
        type:Number,
        require:true
    },password: {
        type:String,
        require:true
    },
    role:{
        type:String,
        enum:['student','recruiter'],
        require:true
    },
    profile:{
        bio:{type:String},
        skill:[{type:String}],
        resume:{type:String},//url to resume file
        resumeOriginalName:{type:String},
        company:{type:mongoose.Schema.Types.ObjectId,ref:'company'},
        profilePhoto:{type:String,default:""}
    }
},{timestamps:true});
export const user = mongoose.model('user',userSchema);