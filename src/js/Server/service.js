const Database = require("./db")

class Service {
    async find(query){
        return Database.executeQuery(query)
    }
    async findOne(query, params){
        return Database.executeQuery(query, params)
    }
    async create(query, params){
        return Database.executeQuery(query, params)
    }
    async update(query, params){
        return Database.executeQuery(query, params)
    }
    async delete(query, params){
        return Database.executeQuery(query, params)
    }
}

module.exports = Service