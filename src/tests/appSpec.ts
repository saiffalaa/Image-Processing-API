import app from '../server/app';
import supertest from 'supertest';

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', (done) => {
    return request.get('/api?name=encenadaport.jpg').then((response) => {
      expect(response.status).toBe(200);
      done();
    });
  });
  it('gets the api endpoint', (done) => {
    return request.get('/api?name=encenadapoort.jpg').then((response) => {
      expect(response.status).toBe(400);
      done();
    });
  });
});
