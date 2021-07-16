const { executeQuery, executeQueryUnique } = require('../helpers');

const create = ({ username, email, password }) => {
    return executeQuery(
        'insert into users (username, email, password, role) values (?, ?, ?, ?)',
        [username, email, password, 'R']
    );
};

const getByEmail = (email) => {
    return executeQueryUnique(
        'select * from users where email = ?',
        [email]
    );
}

module.exports = {
    create, getByEmail
}