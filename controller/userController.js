const express = require('express');
const app = express();
const fs =require('fs');
const path =require('path');

const dataPath = path.join(__dirname,'../db.json');

const readDataFromFile=()=>{
    const data = fs.readFileSync(dataPath,'utf8');
    return JSON.parse(data);
}



const getUserById =async(req,res)=>{
    try{
    res.status(200).json({data: readDataFromFile().filter((user)=>user.id == req.params.id)});
    }catch(err){
        res.status(500).json({data:err});
    }
}

const getAllUser =async(req,res)=>{
    res.status(200).json({data: readDataFromFile()});
    
}
const deleteUser =async(req,res)=>{
    try{
    const data = readDataFromFile().filter((user)=>user.id != req.params.id);
    fs.writeFileSync(dataPath,JSON.stringify(data));
    res.status(200).json({data});
    }catch(err){
        res.status(500).json({data:err});
    }
}

const updateUser=async(req,res)=>{
    try{
    const data = readDataFromFile().map((user)=>{
        if(user.id == req.params.id){
            user.name = req.body.name;
        }
        return user;
    });
    fs.writeFileSync(dataPath,JSON.stringify(data));
    res.status(200).json({data});
    }catch(err){
        res.status(500).json({data:err});
    }
}


module.exports = {getAllUser,getUserById,deleteUser,updateUser};