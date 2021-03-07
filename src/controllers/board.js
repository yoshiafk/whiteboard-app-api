const Board =require ('../models/board')
const Team = require ('../models/team')

exports.allBoard = async function (req,res){
try{
    const response = await Board.find()
    res.status(200).json({
        message: 'My Board',
        data: response
    })
}catch(err){
    res.status(500).json({
        message:err
    })
}
}

// exports.newBoard = async function (req, res){
//     const board = new Board()
//     board.title = req.body.title
    
//     try{
//         const response = await board.save()
//         res.status(200).json({
//             message: 'new Board created',
//             data: response
            
//         })
//     }catch(error){
//         res.status(500).json({
//             message: error.message
//         })
//     }

// }

exports.viewBoard = async function (req, res){
    try{
        const id = req.params.id
        const response = await Board.findById(id)

        if(!response) return res.status(401).json({
            message: 'Board doesnt exist'
        })
        res.status(200).json({response})
    }catch(error){
        res.status(500).json({
            message: err
        })
    }
}

exports.updateBoard = async function (req, res){
    try{
        const board = await Board.findById(req.params.id)
        board.title = req.body.title

        const response = await board.save(req.params.id)
        if(!response) return res.status(401).json({
            message: 'Board doesnt exist'
        })
        res.status(200).json({
            message: 'Board title updated',
            data: response
        })
    }catch(error){
        res.status(500).json({
            message: err
        })
    }

}

exports.deleteBoard = async function (req, res){
    try{
        const id = req.params.id
        const response = await Board.findOneAndDelete({_id:id})

        if(!response) return res.status(401).json({
            message: 'Board doesnt exist'
        })
        res.status(200).json({
            message: 'Board deleted'
        })
    }catch(error){
        res.status(500).json({
            message: err
        })
    }
}

exports.assignTeam = async function (req, res){
    const teamId = req.body.teamId
    const id = req.params.id
    try{
        const result = await Board.findByIdAndUpdate(
            {_id: id},
            {$push: {teamId: teamId}},

        )
        res.status(200).json({
            message: `Succesfully add team with ID: ${teamId}`
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

exports.populateBoard = async function(req,res){
    const id = req.params.id
    await Board.findOne({_id: id})
    .populate({
        path: 'teamId',
        select: 'teamName',
        populate: {
            path: 'userId',
            select: 'name email'
            
        }
    })
    .exec()
    .then((result) =>{
        res.status(200).json(result)
    })
    .catch(
        (error) => {
            res.status(500).json({
                error: error.message
            })
        }
    )
    
}

exports.newVersionBoard = async function (req,res){
    const board = new Board({
            title: req.body.title,
          //{$push: {teamId: req.body.teamId}}
          teamId: req.body.teamId
        })
   
     try{
        const response = await board.save.push()
       
           
        res.status(200).json({
            message: 'new Board created',
            data: response
            
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}