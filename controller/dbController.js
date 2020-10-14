const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
db.defaults({ notes: [] })
    .write()

function findId(parsedId) {
    return db
        .get('notes')
        .find({ id: parsedId })
        .value();
}

function get() {
    return db
        .get('notes')
        .value()
}

function add(body) {
    db.get('notes')
        .push(body)
        .write()
}

function edit(parsedId, body) {
    return db
        .get('notes')
        .find({ id: parsedId })
        .assign(body)
        .write()
}

function del(parsedId) {
    db.get('notes')
        .remove({ id: parsedId })
        .write()
}

module.exports = {
    get, edit, add, del, findId
}