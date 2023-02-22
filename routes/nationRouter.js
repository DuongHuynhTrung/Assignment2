const nationRouter = require('express').Router();

const nationController = require('../controllers/nationController');

nationRouter.get('/', nationController.viewNation);
nationRouter.post('/', nationController.addNation);
nationRouter.put('/', nationController.editNation);
nationRouter.delete('/:id', nationController.deleteNation);

module.exports = nationRouter;