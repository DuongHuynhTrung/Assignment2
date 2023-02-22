var express = require('express');
var router = express.Router();

const nationController = require('../controllers/nationController');

/* GET home page. */
router.get('/',  (req, res, next) => {
  res.render('index', {
    title: 'Home page'
  });
});

router.get('/nation', nationController.viewNation);

module.exports = router;
