var request = require('supertest');
var app = require('../index.js');
describe('GET /will', function() {
    it('respond with you can do it', function(done) {
        request(app).get('/will').expect('{ "response": "you can do it" }', done);
    });
});
