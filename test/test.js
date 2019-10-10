/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiAsPromised = require('chai-as-promised');
const helper = require('../utils/helper');
const app = require('../app');

// Configure chai
chai.use(chaiHttp);
const { expect } = chai;


chai.use(chaiAsPromised).should();
describe('Students', () => {
  describe('GET /', () => {
    // Test to get all students record
    it('should get all students record', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.equal(200);
          expect(res.body).to.have.keys('data', 'message');
          expect(res.body.data).to.be.an('array');

          done();
        });
    });
    // Test to get single student record
    it("should get a single student record", (done) => {
         const id = 1;
         chai.request(app)
             .get(`/${id}`)
             .end((err, res) => {
                if (err) done(err);
                expect(res.status).to.equal(200);
                expect(res.body).to.have.keys('student', 'message');
                expect(res.body.student).to.be.an('object');

                done();
              });
     });

    // // Test to get single student record
    it("should not get a single student record", (done) => {
         const id = 5;
         chai.request(app)
             .get(`/${id}`)
             .end((err, res) => {
              if (err) done(err);
              expect(res.status).to.equal(404);
              expect(res.body).to.have.keys('message');
              
              done();                 
              });
     });
  });
});

describe('Test Helper Functions', () => {

  describe('Array That Adds', () => {
    it('Add Array of Numbers Accurately', (done) => {
      const arrayToAdd = [4,3,3];
      expect(helper.addMultipleNumbers(arrayToAdd)).to.equal(10);
      done();
    })
  
    it('return false on empty array', (done) => {
      const emptyArrayToAdd = [];
      expect(helper.addMultipleNumbers(emptyArrayToAdd)).to.equal(false);
      done();
    })

    it('should return true if valid user id', () => {
      return helper.isAuthorizedPromise(['abc123', 'abc125'], 'abc123').should.eventually.be.true;
    });

    it('should return false if invalid user id', () => {
      return helper.isAuthorizedPromise(['abc123', 'abc125'], 'abc127').should.eventually.be.false;
    });
  })
 
})


