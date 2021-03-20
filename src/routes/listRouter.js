const express = require('express');
const router = express.Router();
const List = require('../models/list')
const listController = require('../controllers/list');
// const validateBody = require('../middlewares/validation')

router.post('/list', listController.newList);
router.get('/list', listController.getList);
router.get('/list/:listId', listController.getListById)
router.put('/list/:listId', listController.updateList);
router.delete('/list/:listId', listController.archiveList)
router.patch('/list/:listId', listController.retriveList);
router.put('/list/:listId/card', listController.assignCard);
router.put('/list/:listId/board', listController.assignBoard);
router.get('/list/:listId/card', listController.populateList)
router.get('/listboard/:boardId', listController.getListBoard)

module.exports = router;

