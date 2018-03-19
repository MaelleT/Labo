const pg = require('pg');


exports.bookmark_list = function(req, res, next) {


    const connectionString = 'postgres://postgres:Password1@192.168.1.50:5432/favori';

    const db = new pg.Client(connectionString);
    db.connect();
    const query = {

    name: 'fetch-all-task',
    text: 'SELECT * FROM bookmark',
    };

    db.query(query, function(err, result){
        if (err) {
            console.log(err.stack);
            res.send('ERROR');

        } else {
            res.json(result.rows);

        }
});


}

exports.bookmark_detail = function(req, res, next) {
    var id = req.param('id');
    res.send('NOT IMPLEMENTED: one bookmark detail ');
}
exports.bookmark_ajout = function(req, res, next) {
    res.send('NOT IMPLEMENTED: bookmark ajout ');
}

exports.bookmark_maj = function(req, res, next) {
    res.send('NOT IMPLEMENTED: one bookmark maj ');
}

exports.bookmark_clear = function(req, res, next) {
    res.send('NOT IMPLEMENTED: all bookmarks clear ');
}

exports.bookmark_delete = function(req, res, next) {
    res.send('NOT IMPLEMENTED: one bookmarks delete ');
}