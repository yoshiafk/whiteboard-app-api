const User = require ('../models/user')

exports.index = async function(req, res) {
    try{
        const response = await User.find({})
        res.status(200).json({
            status:200,
            message: 'Users retrieved succesfully',
            data: response == null ?[] : response
        })
    }catch(err){
        res.status(500).json({
            status: 500,
            message: err
        })
    }
}
//create user
exports.new = async function (req,res) {
    let user = new User()
    user.username = req.body.username
    user.industri = req.body.company
    user.companyName = req.body.companyName

    try{
        const response = await user.save()
        res.status(200).json({
            message: 'new User created',
            data: response
        })
    }catch(err){
        res.status(500).json({
            message: err
        })
    }

}
//view
exports.view = async function(req, res){
    try{
        const response = await User.findById(req.params.id)
        res.status(200).json({
            status:200,
            message: 'User details',
            data: response == null ? []: response
        })
    }catch(err){
        res.status(500).json({
            status:500,
            message: err
        })
    }
}
//update user info
exports.update = async function (req,res){
    try{
        const user = await User.findById(req.params.id)

        user.username = req.body.username
        user.industri = req.body.industri
        user.companyName = req.body.companyName

        const userResp = await user.save(req.params.id)
        res.status(200).json({
            status:200,
            message: 'User updated',
            data: userResp
        })
    }catch(err){
        res.status(500).json({
            status:500,
            message: err
        })
    }
}
//delete
exports.delete = async function(req,res){
    try{
        const id = req.params.id
        const deleteResp = await User.findOneAndDelete({_id : id})
        res.status(200).json({
            status:200,
            message: 'User deleted',
            data: deleteResp
        })
    }catch(err){
        res.status(500).json({
            status:500,
            message: err
        })
}

}

