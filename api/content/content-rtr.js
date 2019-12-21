const express = require('express')
const hlpr = require('./content-db')
const auth = require('../auth/auth-mid')
const router = express.Router()

router.get('/', auth, (req, res) => {
    hlpr.find()
    .then(content => {
        res.status(200).json(content)
    })
    .catch(err => res.status(500).json({ error: `internal service issue see: ${err}`}))
})

router.get('/:id', auth, (req, res) => {
    hlpr.findById(req.params.id)
    .then(content => res.status(200).json(content))
    .catch(err => res.status(500).json({ error: `internal service issue see: ${err}`}))
})

router.delete('/:id', async (req, res) => {
const id = req.params.id
hlpr.deleter(id)
.then(rem => {
    if(rem > 0) {
        res.status(200).json({message: `Salty comment with id of ${id} has been removed`, id: id})
    } else {
        res.status(404).json({
            errMessage: ` Salty comment with id of ${id} could bot be found`})
 }
}) 
.catch(err => {res.status(500).json({ error: `failed to delete Saltiness from db`})
})
})

//need post

module.exports = router