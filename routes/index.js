var express = require('express');
var router = express.Router();

var connection = require('../config/connection');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.post('/', function (req, res, next) {
    let name = req.body.name;
    let address = req.body.address;
    let phone = req.body.phone;
    let insertQuery = `INSERT INTO users(name, address, phone)
                       VALUES ('${name}', '${address}', '${phone}')`;
    connection.query(insertQuery, (err, rows, fields) => {
        res.redirect('/');
    });

});


module.exports = router;
