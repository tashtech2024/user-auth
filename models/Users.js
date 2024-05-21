import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 20
    },
    email:{
        type: String,
        required: true,
        // unique: true, // will make sure you dont supply the same email (one account one email)
    },
    password: {
        type: String, 
        require: true,
        minLength: 8,
        maxLength: 12
    }, 
    role: {
        type:String,
        enum: ['Admin', 'Regular', 'Premium'],
        default: 'Regular', 
        message: '{VALUE} is not vaild for role.'
    }, 
    isAdmin: {
        type: Boolean,
        default: false
    },
    age: {
        min: 18,
        type : Number
    }
});

userSchema.index(())

export default new mongoose.model('User', userSchema);