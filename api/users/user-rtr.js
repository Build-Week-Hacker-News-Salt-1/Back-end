const router = require('express').Router();

const Users = require('./u-db');
const restricted = require('../auth/auth-mid');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.post('/', (req, res) => {
    const newUser = {...req.body}
    Users.add(newUser)
    .then(nu => {
        res.status(201).json(nu)
    })
    .catch(err => {
        res.status(500).json({error: `internal service issue see ${err}`})
    })
})

module.exports = router;