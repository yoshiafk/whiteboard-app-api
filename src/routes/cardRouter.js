const express = require('express');
const router = express.Router();
const cardController = require('../controllers/card');
// const card = require('../models/card');
// const validateBody = require('../middlewares/validation')

router.post('/card', cardController.addCard);
router.get('/card', cardController.getCard);
router.get('/card/:cardId', cardController.getCardById);
router.put('/card/:cardId', cardController.updateCard);
router.delete('/card/:cardId', cardController.archiveCard);
router.patch('/card/:cardId', cardController.retriveCard);

module.exports = router;