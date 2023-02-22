const playerRouter = require('express').Router();

const playerController = require('../controllers/playerController');

playerRouter.get('/', playerController.viewPlayer);
playerRouter.post('/', playerController.addPlayer);
playerRouter.put('/', playerController.editPlayer);
playerRouter.delete('/:id', playerController.deletePlayer);

module.exports = playerRouter;