const pool = require('../../databasePool');

class AccountTable {
    static storeAccount({ username, password }) {
        return new Promise(() => {
            pool.query(
                'INSERT INTO account("usernameHash", "passwordHash") VALUES($1, $2)',
                [usernameHash, passwordHash],
                (error, response) => {
                    if (error) return (error);
                    
                    resolve();
                }                                

            );
        });
    }
}

module.exports = AccountTable;