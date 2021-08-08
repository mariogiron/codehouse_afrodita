var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Funsiona requetebien',
    clasesV2: ['primera', 'segunda', 'tercera'],
    products: 1,
    animales: ['cotorra', 'perro', 'gato', 'iguana']
  });
});

router.get('/info', (req, res) => {
  res.render('info', {
    people: [
      { name: 'Aitor', surname: 'González', age: 19 },
      { name: 'Rocío', surname: 'García', age: 23 },
      { name: 'Manuel', surname: 'Robles', age: 49 },
      { name: 'Laura', surname: 'Romero', age: 37 }
    ]
  });
});

module.exports = router;