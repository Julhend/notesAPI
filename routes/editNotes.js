const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')

app.patch('/notes', (req, res) => {
    const body = req.body
    const id = req.query.id
    const parsedId = parseInt(id)
    const cariId = db.findId(parsedId)
    if (cariId) {
        db.edit(parsedId, body)
        body.id = parsedId
        res.send(body)
    }
    else {
        res.status(404).send('DATA WITH THAT ID IS NOT FOUND (404 NOT FOUND)!!!')
    }
})

module.exports = app