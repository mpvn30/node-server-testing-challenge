const db = require("../data/db-config.js");

module.exports = {
    insert,
    getAll,
}

function insert(character) {
    return (
        db("characters")
        .insert(character, "id")
        .then(ids => {
            const id = ids[0];
            return db("characters")
            .where({ id })
            .first();
        })
    )
}

function getAll(){
    return db("characters");
}