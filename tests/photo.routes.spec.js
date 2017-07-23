const { expect } = require('chai');
const request = require('supertest');
const db = require('../server/db');
const app = require('../server/index');

describe('Photo routes', () => {

  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('/api/photos/', () => {
    const photoInfo = {
      description: 'Hardcoded description',
      link: 'http://localhost/s3/uploads/f7c7616b-b479-467d-b9e6-c18676026144_bfx.png',
      title: 'TEST UPLOAD'
    }

    it('POST /api/photos', () => {
      return request(app)
        .post('/api/photos')
        .send(photoInfo)
        .expect(201)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body.link).to.be.equal('http://localhost/s3/uploads/f7c7616b-b479-467d-b9e6-c18676026144_bfx.png');
        });
    });
  });
});

