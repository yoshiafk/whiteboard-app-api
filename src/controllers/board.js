const Board =require ('../models/board')



exports.newBoard = async function (req, res){
    const board = new Board()
    board.title = req.body.title
    try{
        const response = await board.save()
        res.status(200).json({
            message: 'new Board created',
            data: response
        })
    }catch(error){
        res.status(500).json({
            message: err
        })
    }

}

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