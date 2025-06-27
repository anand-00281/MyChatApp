import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters long"],
    },
    fullName: {
        type: String,
        required: true,
    },
    profilePic:{
        type: String,
    },
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;