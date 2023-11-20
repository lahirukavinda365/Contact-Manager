import asyncHandler from 'express-async-handler';
import bcrypt from "bcrypt"
import userRoutes from '../routes/userRoutes.js'
import User from '../modals/userModal.js'
import userModal from '../modals/userModal.js';
import jwt from 'jsonwebtoken';
export const registerUser = asyncHandler(async (req, res) => {
    
    const {username, email, password} = req.body;

    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are required..");
    }

    const userAvailable = await User.findOne({ email });

    if (userAvailable) {
        res.status(400);
        throw new Error("User already available...!");
    }

    // hash pw

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModal.create({
        username,
        email,
        password:hashedPassword,
    });
    console.log(user);
    console.log(hashedPassword);

});


export const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are required..");
    }

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        
        const accessToken  = jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id,
            },
        },
        process.env.ACCESS_SRT,
        {expiresIn:"10m"});
        
        res.status(200).json({ accessToken });
    }else{
        res.status(401);
        throw new Error("email or password is not valid.");
    }
});


export const currentUser = asyncHandler(async(req, res) => {
    res.json({message:" current info"});
});


















