function executeQuery(query, arrParams = []) {
    return new Promise((resolve, reject) => {
        db.query(query, arrParams, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

function executeQueryUnique(query, arrParams = []) {
    return new Promise((resolve, reject) => {
        db.query(query, arrParams, (err, result) => {
            if (err) return reject(err);
            if (result.length !== 1) return resolve(null);
            resolve(result[0]);
        });
    });
}

module.exports = {
    executeQuery, executeQueryUnique
}