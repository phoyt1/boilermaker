'use strict'
const router = require('express').Router();
const Photos = require('../db').model('photo');
module.exports = router;

router.get('/:userId', (req, res, next) => {
  Photos.findAll({where: {userId: req.params.userId}})
    .then(photoUrls => res.json(photoUrls))
    .catch(next);
});

// const testPhoto = {
//   description: "Hardcoded description",
//   link: "http://localhost/s3/uploads/f7c7616b-b479-467d-b9e6-c18676026144_bfx.png",
//   title: "TEST UPLOAD",
//   userId: 1
// }

router.post('/',(req, res, next) => {
  Photos.create(req.body)
    .then((created) => {
      console.log('CREATED', created)
      res.status(201).send(created)
    })
    .catch(next)
})

