const Card = require('../models/card')

module.exports = {
    newCard: async (req, res) =>{
        const cardPost = new Card({
            title: req.body.title,
            priority: req.body.priority,
            description: req.body.description
        })
        try {
            const card = await cardPost.save()
            res.send({
                status: 201,
                data: card,
                message: "card created"
            })
            
        } catch (err) {
            res.status(500).json({message:'title name is required'})    
        }
    },

    getCard: async (req, res) =>{
        try {
            const card = await Card.find({active: true})
            res.send({
                status: 200,
                data: card,
                message: "Get all card data"
            })
          
        } catch(err){
            res.json({message: err})
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
                title: req.body.title
            })
                res.send({
                status: 201,
                data: cardUpdate,
                message: "success update card title"
        })
        } catch (err) {
            res.status(500).json({message:'title name is required'})
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
    }
}