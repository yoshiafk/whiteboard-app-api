const express = require('express');
const router = express.Router();
const List = require('../models/list')
const listController = require('../controller/list');

router.post('/list', listController.newList);
router.get('/list', listController.getList);
router.get('/list/:listId', listController.getListById)
router.put('/list/:listId', listController.updateList);
router.delete('/list/:listId', listController.deleteList);

module.exports = router;