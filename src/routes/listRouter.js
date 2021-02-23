const express = require('express');
const router = express.Router();
const List = require('../models/list')
const listController = require('../controller/list');
const validateBody = require('../middleware/validation')

router.post('/list', validateBody, listController.newList);
router.get('/list', listController.getList);
router.get('/list/:listId', listController.getListById)
router.put('/list/:listId', validateBody, listController.updateList);
router.delete('/list/:listId', listController.archiveList)
router.patch('/list/:listId', listController.retriveList);

module.exports = router;