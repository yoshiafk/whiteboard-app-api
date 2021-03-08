const Team = require ('../models/team')
const User = require ('../models/userModel')
//const mongoose = require('mongoose')
const auth = require('../middlewares/verification')
//get populate
exports.teamUser = async function(req,res){
    const id = req.params.id
    await Team.findOne({ _id: id})
    .populate({
        path: 'userId',
        select: 'email name'
    })
    .populate({
        path: 'boardId',
        select: 'title'
    })
    .exec()
    .then((teams) => {
        res.status(200).json({
           message: teams,
        })
    })
    .catch(
        (error) => {
        res.status(500).json({
            error: error.message
        })
    })  
}

//=====================================================
exports.addUserTeam = async function (req,res){
     const userId = req.body.userId
     const id = req.params.id
     try{
     const result = await Team.findByIdAndUpdate(
        {_id: id},
        {$push: {userId: userId}
    })
    
        res.status(200).json({
            message: `succesfully add user with ID: ${userId} on team`,
            result: result
                    
        })
     }catch(error){
         res.status(500).json({
             message: error.message
         })
     }
    
}

//====================================================
exports.removeTeam = async function (req, res){
    const userId = req.body.userId
    const id = req.params.id
     try{
        await Team.updateOne(
        {_id: id},
        {$pull: {userId: userId}
    })
        res.status(200).json({
            message: `user with ID: ${userId} has been remove`,
        })
     }catch(error){
         res.status(500).json({
             message: error.message
         })
     }
}
//===========================================================
exports.allTeam = async function(req, res){
    try{
        const id = req.user._id
        const response = await Team.find({userId: id})

        .populate({
            path: 'userId',
            select: 'email name'
        })
        .populate({
            path: 'boardId',
            select: 'title'
        })
        res.status(200).json({
            message: 'My Team',
            data: response == null ?[] : response
        })
    }catch(err){
        res.status(500).json({
            message:err
        })
    }
}
//=================================================
exports.newTeam = async function(req, res){
    const team = new Team({
        teamName : req.body.teamName,
         userId: req.user._id
    })
    
    try{
        const response = await team.save()

        res.status(200).json({
            message: 'new Team created',
            data: response
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}
//================================================
exports.viewTeam = async function(req, res){
    try{
        const id = req.params.id
        const response = await Team.findById(id)

        if(!response) return res.status(401).json({
            message: 'Team doesnt exist'
        })
        res.status(200).json({response})
    }catch(error){
        res.status(500).json({
            message: err
        })
    }
}
//=================================================
exports.updateTeam = async function(req, res){
    try{
        const team = await Team.findById(req.params.id)

        team.teamName = req.body.teamName

        const response = await team.save(req.params.id)
        
        if(!team) return res.status(404).json({
            message: 'Team doesnt exist'
        })
        res.status(200).json({
            message: 'Team name updated',
            data : response
        })
    }catch(error){
        res.status(500).json({
            message: err
        })
    }
}
//===================================================
exports.deleteTeam = async function(req, res) {
    try{
        const id = req.params.id
        const response = await Team.findOneAndDelete({_id: id})
    
        if(!response) return res.status(401).json({
            message: 'Team doesnt exist'
        })
        res.status(200).json({
            message: 'Team deleted',
            data: response
        })
    }catch(error){
        res.status(500).json({
            message:err
        })
    }
}