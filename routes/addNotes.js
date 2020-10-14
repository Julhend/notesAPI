const express = require('express')
const { findId } = require('../controller/dbController')
const app = express.Router()
const db = require('../controller/dbController')


app.post('/notes', (req, res) => {
    const body = req.body
    const id = body.id
    const parsedId = parseInt(id)
    const cariId = db.findId(parsedId)

    if (cariId) {
        res.status(409).send('ID HAS BEEN USED, TRY OTHER ID (409 CONFLICT)!!!')
    }
    else {
        db.add(body)
        res.send(body)
    }

})

module.exports = app