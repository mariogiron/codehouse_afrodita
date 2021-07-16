function executeQuery(query, arrParams = []) {
    return new Promise((resolve, reject) => {
        db.query(query, arrParams, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    executeQuery
}