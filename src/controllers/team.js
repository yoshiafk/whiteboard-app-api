const Team = require ('../models/team')
const User = require ('../models/user')
const mongoose = require ('mongoose')

exports.addTeam = async function(req, res) {
   try{
    const user = await User.findById(req.body.userId)
    
    user.userId = req.body.userId

    const response = await team.save()
        if(!response) return res.status(404).json({
            message: 'Id not found',
            error: err
        })
       
        res.status(200).json({
            message: 'succes add user to team',
            data: response
        })
    }catch(error){
        res.status(500).json({
            error:err
        })
    }
    
}

exports.removeTeam = async function (req, res){
    
}
//===========================================================
exports.allTeam = async function(req, res){
    try{
        const response = await Team.find({})
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

exports.newTeam = async function(req, res){
    const team = new Team()
    team.teamName = req.body.teamName
    try{
        const response = await team.save()
        res.status(200).json({
            message: 'new Team created',
            data: response
        })
    }catch(error){
        res.status(500).json({
            message: err
        })
    }
}

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
exports.updateTeam = async function(req, res){
    try{
        const team = await Team.findById(req.params.id)

        team.teamName = req.body.teamName

        const response = await team.save(req.params.id)
        
        if(!response) return res.status(404).json({
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