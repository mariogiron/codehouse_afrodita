var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// GET http://localhost:3000/users/new
router.get('/new', (req, res) => {
  res.send('Creamos un nuevo usuario!');
});

router.get('/:userId/products/:productId', (req, res) => {
  console.log(req.params);
  res.end(`Recuperamos usuario: ${req.params.userId} y producto: ${req.params.productId}`);
});



router.post('/create', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});




module.exports = router;