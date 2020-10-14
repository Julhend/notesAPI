const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')

app.delete("/notes", (req, res) => {
    const query = req.query
    const id = query.id
    const parsedId = parseInt(id)
    const cariId = db.findId(parsedId)
    if (cariId) {
        db.del(parsedId)
        res.send("DATA HAS BEEN DELETED!!!")
    }
    else {
        res.status(404).send('DATA WITH THAT ID IS NOT FOUND (404 NOT FOUND)!!!')
    }
});

module.exports = app
