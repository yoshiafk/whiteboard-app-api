const express = require('express');
const router = express.Router();
const cardController = require('../controllers/card');
const card = require('../models/card');
// const card = require('../models/card');
// const validateBody = require('../middlewares/validation')

router.post('/card', cardController.addCard);
router.get('/card', cardController.getCard);
router.get('/card/:cardId', cardController.getCardById);
router.get('/card/:cardId/user', cardController.populateCard)
router.put('/card/:cardId', cardController.updateCard);
router.put('/card/:cardId/user', cardController.assignUser);
router.put('/card/:cardId/list', cardController.assignList);
router.put('/card/:cardId/board', cardController.assignBoard);
router.put('/card/:cardId/team', cardController.assignTeam);
router.put('/card/:cardId/label', cardController.assignLabel)
router.delete('/card/:cardId', cardController.archiveCard);
router.patch('/card/:cardId', cardController.retriveCard);

module.exports = router;
