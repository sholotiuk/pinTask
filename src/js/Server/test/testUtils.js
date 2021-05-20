const Service = require('../service')
const service = new Service()

class TestUtils {
    static createPerson(url, body){
        return service.create(mockedQuery, body)
    }
    static getPerson(url){
        return service.findOne(mockedQuery)
    }
    static getPersons(url){
        return service.find(mockedQuery)
    }
    static updatePerson(url, body){
        return service.update(mockedQuery, body)
    }
    static deletePerson(url, param){
        return service.delete(mockedQuery, param)
    }
    static createTask(url, body){
        return service.create(mockedQuery, body)
    }
    static getTask(url, param){
        return service.findOne(mockedQuery)
    }
    static getTasks(url){
        return service.find(mockedQuery)
    }
    static updateTask(url, body){
        return service.update(mockedQuery, body)
    }
    static deleteTask(url, param){
        return service.delete(mockedQuery, param)
    }
    static createProject(url, body){
        return service.create(mockedQuery, body)
    }
    static getProject(url){
        return service.findOne(mockedQuery)
    }
    static getProjects(url){
        return service.find(mockedQuery)
    }
    static updateProject(url, body){
        return service.update(mockedQuery, body)
    }
    static deleteProject(url, param){
        return service.create(mockedQuery, body)
    }
}

module.exports = TestUtils