const router = require('express').Router();
const Photos = require('../db').model('photo');
module.exports = router;

router.get('/:id', (req, res, next) => {
  Photos.findAll({where: {userId: req.params.id}})
    .then(photoUrls => res.json(photoUrls))
    .catch(next);
});
