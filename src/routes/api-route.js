// Initialize express router
const router = require('express').Router()
const auth = require('../middlewares/verification')

//Set default API response
router.get('/', function (req, res) {
    res.json({
        status: '200',
        message: 'YO Welcome White Board!!!',
    })
})



// Import user controller
// const userController = require('../controllers/user')
// User routes
// router.route('/users')
//     .get(userController.index)
//     .post(userController.new)
// router.route('/users/:id')
//     .get(userController.view)
//     .put(userController.update)
//     .delete(userController.delete)

//============================== 
    //import team controller
//==============================
const teamController = require ('../controllers/team')
//Team routes
router.route('/team')
    .get(auth, teamController.allTeam)
    .post(teamController.newTeam)

router.route('/team/:id')
    .get(teamController.viewTeam)
    .put(teamController.updateTeam)
    .delete(teamController.deleteTeam)

router.route('/team/:id/team')
    .get(teamController.teamUser)
    .put(teamController.addUserTeam)
router.route('/team/:id/removeUser')
    .put(teamController.removeTeam)

//============================== 
    //import board controller
//==============================
const boardController = require ('../controllers/board')
//Board routes
router.route('/board')
    .post(boardController.newVersionBoard)
    .get(boardController.allBoard)
router.route('/board/:id')
    .get(boardController.viewBoard)
    .put(boardController.updateBoard)
    .delete(boardController.deleteBoard)
router.route('/board/:id/team')
    .get(boardController.populateBoard)
    .put(boardController.assignTeam)


//========tes

module.exports = router