const db = require('../../database/db-config')

module.exports = {
find,
findById,
add,
deleter
}

function find() {
    return db
    .select('*')
    .from('content')
}

function findById(u_id) {
    return db('content')
    .select('*')
    .from('content as c')
    .join('users as u','c.save_id', '=', 'user_id' )
    .where('c.save_id', '=', u_id)
    .first()
}
function add(nC) {
    return db('content')
    .insert(nC, 'id')
    .then(nC => {
        return find(nC)
    })
}

function deleter(id) {
    return db('content')
    .where({ id })
    .then(result => result)
}