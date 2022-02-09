const router = require('express').Router();


router.get('/', (req, res) => {
  res.json(`User ${req.method} request received!`)
});


router.post('/', (req, res) => {
  res.json(`User ${req.method} request received!`)
});


router.put('/', (req, res) => {
  res.json(`User ${req.method} request received!`)
});


router.delete('/', (req, res) => {
  res.json(`User ${req.method} request received!`)
});

module.exports = router;