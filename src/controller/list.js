const List = require('../models/list');
const softDelete = require('mongoosejs-soft-delete');

module.exports = {
    newList: async (req, res) =>{
        const listPost = new List({
            title: req.body.title
        })
        try {
            const list = await listPost.save()
            res.send({
                status: 200,
                data: list,
                message: "list created"
            })
            
        } catch (err) {
            res.json({message:err})    
        }
    },

    getList: async (req, res) =>{
        try {
            const list = await List.find()
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
            const list = await List.findOne({_id: req.params.listId})
            res.send({
                status: 200,
                data: list,
                message: "Get list data by id"
            })
          
        } catch(err){
            res.json({message: err})
        }
        },

    updateList: async (req, res) =>{
        try {
            const listUpdate = await List.updateOne({_id: req.params.listId},
                {
                title: req.body.title
            })
                res.send({
                status: 200,
                data:listUpdate,
                message: "success update list title"
        })
        } catch (err) {
            res.json({message: err})
        }
    },

    deleteList: async (req, res)=>{
        try {
            const listDelete = await List.removeOne({_id: req.params.listId})
    
            res.send({
                status: 200,
                data: listDelete,
                message: 'success archive list'
            })
        } catch (err) {
            res.json({message:err})
        }
    }
}
