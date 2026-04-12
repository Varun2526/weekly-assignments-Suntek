import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { verifyToken } from '../middlewares/VerifyToken.js'

export const adminApp = exp.Router()

//Read all users and authors
adminApp.get("/users", verifyToken("ADMIN"), async(req,res)=>{
    const users = await UserModel.find({ role: { $in: ["USER", "AUTHOR"] } }).select("-password")
    res.status(200).json({message: "Users found", payload: users})
})

//Activate or deactivate user or author
adminApp.put("/users", verifyToken("ADMIN"), async(req,res)=>{
    const {userId, isActive} = req.body;
    const userOfDB = await UserModel.findById(userId);
    if(!userOfDB){
        return res.status(404).json({message: "User not found"})
    }
    if(isActive === userOfDB.isuseractive){
        return res.status(200).json({message: "User already in the same state"})
    }
    userOfDB.isuseractive = isActive;
    await userOfDB.save();
    
    // remove password from response
    let userObj = userOfDB.toObject();
    delete userObj.password;

    res.status(200).json({message: "User status updated successfully", payload: userObj})
})