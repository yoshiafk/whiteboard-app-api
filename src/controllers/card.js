const Card = require('../models/card')

module.exports = {
    addCard: async (req, res) =>{
        const cardPost = new Card({
            priority: req.body.priority,
            title: req.body.title,
            description: req.body.description,
            dueDate: req.body.dueDate
        })
        try {
            const card = await cardPost.save()
            res.send({
                status: 201,
                data: card,
                message: "card created"
            })
            
        } catch (err) {
            res.status(500).json({message:err.message})    
        }
    },

    getCard: async (req, res) =>{
        try {
            const card = await Card.find({active: true}).populate({
                path: 'userId',
                select: 'name photo role industry'
            })
            res.send({
                status: 200,
                data: card,
                message: "Get all card data"
            })
          
        } catch(err){
            res.json({message: err.message})
        }
      },

    getCardById: async (req, res) =>{
        try {
            const card = await Card.findOne({_id: req.params.cardId, active: true})
            res.send({
                status: 200,
                data: card,
                message: "Get card data by id"
            })
          
        } catch(err){
            res.status(500).json({message:'card not found'})
        }
    },

    updateCard: async (req, res) =>{
        try {
            const cardUpdate = await Card.updateOne({_id: req.params.cardId},
                {
                    priority: req.body.priority,
                    title: req.body.title,
                    description: req.body.description,
                    dueDate: req.body.dueDate
            })
                res.send({
                status: 201,
                data: cardUpdate,
                message: "success update card"
        })
        } catch (err) {
            res.status(500).json(err.message)
        }
    },

    archiveCard: async (req, res)=>{
        try {
            await Card.findByIdAndUpdate(req.params.cardId, {active: false})
            
            res.status(200).json({
                status: 'success',
                message: 'card successfully archived',
                data: null
            })
        } catch (error) {
            res.status(500).json({
                status: 'failed',
                message: error.message
            })
        }
    },

    retriveCard: async (req, res)=>{
        try {
            await Card.findByIdAndUpdate(req.params.cardId, {active: true})

            res.status(200).json({
                status: 'success',
                message: 'card successfully retrived',
                data: Card
            })
            
        } catch (error) {
            res.status(500).json({
                status: 'failed',
                message: error.message
            })
            
        }
    },

    assignUser: async (req, res)=>{
        const userId = req.body.userId
        const cardId = req.params.cardId
     
     try {
         const result = await Card.findByIdAndUpdate(
             {_id: cardId},
             {$push: {userId: userId}}
         )
         res.status(200).json({
             message: `Successfully add user with Id: ${userId}`
         })
     } catch (error) {
         res.status(500).json({
             message:error.message
         })
      }
     },

     populateCard: async (req, res)=>{
        const cardId = req.params.cardId
        await Card.findOne({_id: cardId}).populate({
            path: 'userId',
            select: 'name photo role industry'
        })
        .exec()
        .then((result)=>{
            res.status(200).json(result)
        })
        .catch(
            (error) =>{
                res.status(500).json({
                    error: error.message
                })
            }
        )
    }
}




//aku push array listId
//berarti push cardId ke listId
//ntar populate get list Idnya


// exports.assignList = async function (req, res){
//     const listId = req.body.listId
//     const id = req.params.id
//     try{
//         const result = await Card.findByIdAndUpdate(
//             {_id: id},
//             {$push: {listId: listId}},

//         )
//         res.status(200).json({
//             message: `Succesfully add list with ID: ${teamId}`
//         })
//     }catch(error){
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }


///===================================
// exports.populateBoard = async function(req,res){
//     const id = req.params.id
//     await Board.findOne({_id: id})
//     bklaakk
//     .populate({
//         path: 'cardId',
//         select: 'title sasdad asdasdassa asdasd',
//         populate: {
//             path: 'userId',
//             select: 'name email'
            
//         }
//     })
//     .exec()
//     .then((result) =>{
//         res.status(200).json(result)
//     })
//     .catch(
//         (error) => {
//             res.status(500).json({
//                 error: error.message
//             })
//         }
//     )
    
// }

