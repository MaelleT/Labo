var express = require('express');
var router = express.Router();

var bookmarkController = require('../controllers/bookmarkController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenue sur l\'application de gestion des Bookmarks' });
});



//GET all Bookmarks
router.get('/bookmarks', bookmarkController.bookmark_list);


module.exports = router;
