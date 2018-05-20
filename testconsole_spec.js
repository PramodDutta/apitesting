const frisby = require('frisby');

it ('GET should return a status of 200 OK', function (done) {
    frisby
        .get('https://jsonplaceholder.typicode.com/posts')
        .inspectJSON()
        .done(done);
});