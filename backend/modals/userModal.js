import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "please add user name"],
    },
    email: {
        type: String,
        required: [true, "please add email"],
        unique: [true, "Email address already exists"]
    },
    password: {
        type: String,
        required: [true, "please add user name"],
    }
},{
    timestamp:true
}
);

export default mongoose.model("User", userSchema);
























