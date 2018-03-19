var express = require('express');
var router = express.Router();

var bookmarkController = require('../controllers/bookmarkController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenue sur l\'application de gestion des Bookmarks' });
});



//GET all Bookmarks
router.get('/bookmarks', bookmarkController.bookmark_list);

//Get one Bookmark
router.get('/bookmarks/:id', bookmarkController.bookmark_detail);

//ajout d'un bookmark
router.post('/bookmarks',bookmarkController.bookmark_ajout);

router.put('/bookmarks/:id',bookmarkController.bookmark_maj);

router.delete('/bookmarks',bookmarkController.bookmark_clear);

router.delete('/bookmarks/:id',bookmarkController.bookmark_delete);


module.exports = router;
