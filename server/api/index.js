const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/photos', require('./photos'));

router.use((req, res) => {
  res.status(404).send('Not found');
});
