const { it } = require('@jest/globals')
const request = require('supertest')
const app = require('../index')

describe('Test endpoints', () =>{
    it('should get some data',async()=>{
        const res = await request(app)
            .get('/api/getData')
        expect(res.statusCode).toEqual(200);
    })

})