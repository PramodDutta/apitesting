const frisby = require('frisby');

it('should have a JSON Content-Type header', function () {
    return frisby.get('https://httpbin.org/headers')
        .expect('header', 'Content-Type', 'application/json');
});