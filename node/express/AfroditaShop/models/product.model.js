const { executeQuery, executeQueryUnique } = require('../helpers');

// Recupero todos los productos
const getAll = (page = 1, limit = 5) => {
    return executeQuery(
        'select * from products limit ? offset ?',
        [limit, limit * (page - 1)]
    );
};

// page: 1,2,3,4,5,6
// limit: 5
// offset: limit * (page-1)

// Recupero un producto por ID
// select * from products where id = 1
const getById = (productId) => {
    return executeQueryUnique(
        'select * from products where id = ?',
        [productId]
    );
};

// Inserta nuevo registro en la BD
// insert into products (name, description, price, category, available, created_at) values (...)
const create = ({ name, description, price, category }) => {
    return executeQuery(
        'insert into products (name, description, price, category, available, created_at) values (?, ?, ?, ?, ?, ?)',
        [name, description, price, category, true, new Date()]
    );
};

// Recuperar productos por categoría
const getByCategory = (category) => {
    return new Promise((resolve, reject) => {
        db.query(
            'select * from products where category = ?',
            [category],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        );
    });
}

// Actualizo los datos de un producto
// update products set name = '', description = '', price = , category = '' where id = XX
const update = (id, { name, description, price, category }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'update products set name = ?, description = ?, price = ?, category = ? where id=?',
            [name, description, price, category, id],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        );
    });
}

const remove = (productId) => {
    return new Promise((resolve, reject) => {
        db.query(
            'delete from products where id = ?',
            [productId],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        );
    });
}

const getByClient = (clientId) => {
    return new Promise((resolve, reject) => {
        db.query(
            'select p.* from products p, tbi_clients_products tbi where p.id = tbi.product_id and tbi.client_id = ?',
            [clientId],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        );
    });
}

module.exports = {
    getAll, getById, create, getByCategory, update, remove, getByClient
}