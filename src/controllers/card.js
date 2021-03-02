const Card = require('../models/card')
const List = require('../models/list')

module.exports = {
    allCard: async (req, res) => {
        try {
            const card = await Card.find({active: true})
            res.send({
                status: 200,
                data: card,
                message: 'get all card data'
            })
            
        } catch (error) {
            res.json({message:error.message})
            
        }
    },

    addCard: async (req, res) => {
       try {
           const list = await List.findById(req.body.listId)

            list.listId = req.body.listId
           
           const response = await Card.save()
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
}