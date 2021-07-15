// Recupero todos los productos
const getAll = () => {
    const prom = new Promise((resolve, reject) => {
        db.query('select * from products', (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
    return prom;
};

// Recupero un producto por ID
// select * from products where id = 1
const getById = (productId) => {
    return new Promise((resolve, reject) => {
        db.query(
            'select * from products where id = ?',
            [productId],
            (err, result) => {
                if (err) return reject(err);
                if (result.length !== 1) return resolve(null);
                resolve(result[0]);
            }
        );
    });
};

module.exports = {
    getAll, getById
}