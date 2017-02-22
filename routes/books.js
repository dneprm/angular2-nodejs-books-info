var express = require('express');
var router = express.Router();
var books = [
    {
        'author': 'Margaret Mitchell',
        'title': 'Gone with the wind',
        'year': '1936'

    },
    {
        'author': 'F. Scott Fitzgerald',
        'title': 'The Great Gatsby',
        'year': '1922'

    },
    {
        'author': 'Charles Dickens',
        'title': 'A Christmas Carol',
        'year': '1843'

    },
    {
        'author': 'Marijn Haverbeke',
        'title': 'Eloquent JavaScript',
        'year': '2015'

    },
    {
        'author': 'Eric Ries',
        'title': 'The Lean Startup',
        'year': '2011'
    }
];

router.get('/', function (req, res, next) {
    res.status(200).json({
                obj: books
            });
});



module.exports = router;