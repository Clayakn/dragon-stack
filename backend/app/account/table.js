const pool = require('../../databasePool');

class AccountTable {
    static storeAccount({ username, password }) {
        return new Promise((resolve, reject) => {
            pool.query(
                'INSERT INTO account("usernameHash", "passwordHash") VALUES($1, $2)',
                [username, password],
                (error, response) => {
                    if (error) return (error);
                    
                    resolve();
                }                                

            );
        });
    }
}

module.exports = AccountTable;

