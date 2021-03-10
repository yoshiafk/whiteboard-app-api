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
const userController = require('../controllers/user')
// User routes
router.route('/allusers')
    .get(userController.getAllUsers)
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
    .post(auth, teamController.newTeam)
router.route('/team/:id')
    .get(auth, teamController.viewTeam)
    .put(auth, teamController.updateTeam)
    .delete(auth, teamController.deleteTeam)
router.route('/team/:id/team')
    .get(auth, teamController.teamUser)
    .put(auth, teamController.addUserTeam)
router.route('/team/:id/removeUser')
    .put(auth, teamController.removeTeam)
 
//============================== 
    //import board controller
//==============================
const boardController = require ('../controllers/board')
//Board routes
router.route('/board')
    .post(auth, boardController.newVersionBoard)
    .get(auth, boardController.allBoard)
router.route('/board/:id')
    .get(auth, boardController.viewBoard)
    .put(auth, boardController.updateBoard)
    .delete(auth, boardController.deleteBoard)
router.route('/board/:id/team')
    .get(auth, boardController.populateBoard)
    .put(auth, boardController.assignTeam)
router.route('/boardId/:id')
    .put(auth, teamController.updateBoardNew)

    

module.exports = router 


