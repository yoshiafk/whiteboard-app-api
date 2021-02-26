const express = require('express');
const router = express.Router();
const cardController = require('../controller/card');
const validateBody = require('../middleware/validation')

router.post('/card', validateBody, cardController.newCard);
router.get('/card', cardController.getCard);
router.get('/card/:cardId', cardController.getCardById)
router.put('/card/:cardId', validateBody, cardController.updateCard);
router.delete('/card/:cardId', cardController.archiveCard)
router.patch('/card/:cardId', cardController.retriveCard);

module.exports = router;