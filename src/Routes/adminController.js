const adminModel = require('../Models/Admin');
const doctorModel = require('../Models/Doctor');
const patientModel = require('../Models/Patient');
const { default: mongoose } = require('mongoose');

const createAdmin = async(req,res) => {
    const{username, password} = req.body;
    try{
        const admin = await adminModel.create({username, password});
        res.status(200).json(admin);
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports = {createAdmin};
// const createUser = async(req,res) => {
//     //add a new user to the database with 
//     let Name= req.body.name;
//     let Email= req.body.email;
//     let Age= req.body.age;
    
//     try{
//        let user = await userModel.create({Name:Name,Email:Email,Age:Age});
//        await user.save();
//        res.status(200).json({message:"User created successfully",data:user});
//     }
//     catch(err){
//        res.json({message:"User not created"});
//     }
//     // newUser.save()
 
//     //Name, Email and Age
//  }