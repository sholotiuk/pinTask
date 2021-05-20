const testUtils = require('./testUtils')

describe('Testing of person API', function() {
    test('POST api/person: should return 201 when person was created', function() {
        const response = testUtils.createPerson("/api/person", "/api/person")
        expect(response.status).toBe(201);
    });
    test('GET api/person: should return 200 when person was got', function() {
        const response = testUtils.getPerson("/api/person", "/api/person")
        expect(response.status).toBe(200);
    });
    test('GET api/person: should return 200 when person were got', function() {
        const response = testUtils.getPersons("/api/person", "/api/person")
        expect(response.status).toBe(200);
    });
    test('PUT api/person: should return 200 when person was updated', function() {
        const response = testUtils.updatePerson("/api/person", "/api/person")
        expect(response.status).toBe(200);
    });
    test('DELETE api/person: should return 204 when person was deleted', function() {
        const response = testUtils.deletePerson("/api/person", "/api/person")
        expect(response.status).toBe(204);
    });
});

describe('Testing of task API', function() {
    test('POST api/task: should return 201 when task was added', function() {
        const response = testUtils.createTask("/api/task", "/api/task")
        expect(response.status).toBe(201);
    });
    test('GET api/task: should return 200 when task was got', function() {
        const response = testUtils.getTask("/api/task", "/api/task")
        expect(response.status).toBe(200);
    });
    test('GET api/task: should return 200 when tasks were got', function() {
        const response = testUtils.getTasks("/api/task", "/api/task")
        expect(response.status).toBe(200);
    });
    test('PUT api/task: should return 200 when task was updated', function() {
        const response = testUtils.updateTask("/api/task", "/api/task")
        expect(response.status).toBe(200);
    });
    test('DELETE api/task: should return 204 when task was deleted', function() {
        const response = testUtils.deleteTask("/api/task", "/api/task")
        expect(response.status).toBe(204);
    });
});

describe('Testing of project API', function() {
    test('POST api/project: should return 201 when project was created', function() {
        const response = testUtils.createProject("/api/project", "/api/project")
        expect(response.status).toBe(201);
    });
    test('GET api/project: should return 200 when project was got', function() {
        const response = testUtils.getProject("/api/project", "/api/project")
        expect(response.status).toBe(200);
    });
    test('GET api/project: should return 200 when projects were got', function() {
        const response = testUtils.getProjects("/api/project", "/api/project")
        expect(response.status).toBe(200);
    });
    test('PUT api/project: should return 200 when project was updated', function() {
        const response = testUtils.updateProject("/api/project", "/api/project")
        expect(response.status).toBe(200);
    });
    test('DELETE api/project: should return 204 when project was deleted', function() {
        const response = testUtils.deleteProject("/api/project", "/api/project")
        expect(response.status).toBe(204);
    });
});