const express = require('express')
const hlpr = require('./content-db')
const auth = require('../auth/auth-mid')
const router = express.Router()

router.get('/', (req, res) => {
    hlpr.find()
    .then(content => {
        res.status(200).json(content)
    })
    .catch(err => res.status(500).json({ error: `internal service issue see: ${err}`}))
})

router.get('/:id',  (req, res) => {
    hlpr.findById(req.params.id)
    .then(content => res.status(200).json(content))
    .catch(err => res.status(500).json({ error: `internal service issue see: ${err}`}))
})

router.delete('/:id', (req, res) => {
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
router.add('./:id', async (req, res) => {
    let body = await bodyCheck(Object.keys(req.body), [originalPoster, content, commentPoster, rating, comment ]);
     let id = req.params.id
    if (body.valid) {
        let post = {originalPoster, content, commentPoster, rating, comment} = request.body

        try {
            await helpr.add(post, id);
            response.status(201).json({ message: "Saltiness added" });
        } catch (err) {
            response.status(500).json({ message: 'Internal service error' });
        }
    } else {
        response.status(400).json({ message: body.message });
    }
})

module.exports = router