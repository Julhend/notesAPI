const express = require('express')
const bodyParser = require('body-parser')
const { result } = require('lodash')
const getNotes = require('./routes/getNotes')
const editNotes = require('./routes/editNotes')
const deleteNotes = require('./routes/deleteNotes')
const addNotes = require('./routes/addNotes')
const app = express()
app.use(bodyParser.json())
app.use(getNotes)
app.use(editNotes)
app.use(deleteNotes)
app.use(addNotes)

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(1121, () => {
  console.log(`server is listening on http://localhost:1121`);
})
