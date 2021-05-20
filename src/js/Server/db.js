const mysql = require('mysql2')

class Database {
    constructor(config) {
        this.config = config;
        this.init = async () => {
            this.connection = await mysql.createConnection(this.config);
            console.info(`Connecting to the database "${this.config.database}"...`);
        };
    }

    async connect() {
        this.init().catch((err) => {
            console.error(err);
        });
    }

    async static executeQuery(query, queryParams) {
        if (!this.connection) {
            throw new Error("Connection to the database was not established");
        }
        return this.connection.execute(query, queryParams);
    }
}

module.exports = Database