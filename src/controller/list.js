const List = require('../models/list')

module.exports = {
    newList: async (req, res) =>{
        const listPost = new List({
            title: req.body.title
        })
        try {
            const list = await listPost.save()
            res.send({
                status: 201,
                data: list,
                message: "list created"
            })
            
        } catch (err) {
            res.status(404).json({message:'title name is required'})    
        }
    },

    getList: async (req, res) =>{
        try {
            const list = await List.find({active: true})
            res.send({
                status: 200,
                data: list,
                message: "Get all list data"
            })
          
        } catch(err){
            res.json({message: err})
        }
      },

    getListById: async (req, res) =>{
        try {
            const list = await List.findOne({_id: req.params.listId, active: true})
            res.send({
                status: 200,
                data: list,
                message: "Get list data by id"
            })
          
        } catch(err){
            res.status(404).json({message:'list not found'})
        }
        },

    updateList: async (req, res) =>{
        try {
            const listUpdate = await List.updateOne({_id: req.params.listId},
                {
                title: req.body.title
            })
                res.send({
                status: 201,
                data:listUpdate,
                message: "success update list title"
        })
        } catch (err) {
            res.status(404).json({message:'title name is required'})
        }
    },

    archiveList: async (req, res)=>{
        try {
            await List.findByIdAndUpdate(req.params.listId, {active: false})
            
            res.status(200).json({
                status: 'success',
                message: 'list successfully archived',
                data: null
            })
        } catch (error) {
            res.status(500).json({
                status: 'failed',
                message: error.message
            })
        }
    },
    retriveList: async (req, res)=>{
        try {
            await List.findByIdAndUpdate(req.params.listId, {active: true})

            res.status(200).json({
                status: 'success',
                message: 'list successfully retrived',
                data: List
            })
            
        } catch (error) {
            res.status(500).json({
                status: 'failed',
                message: error.message
            })
            
        }
    }
}
