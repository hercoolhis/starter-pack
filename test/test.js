const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

// Configure chai
chai.use(chaiHttp);
const expect = chai.expect;
describe("Students", () => {
    describe("GET /", () => {
        // Test to get all students record
        it("should get all students record", (done) => {
             chai.request(app)
                 .get('/')

                 .end((err, res) => {
                     if (err) done(err);
                     
                     expect(res.status).to.equal(200);
                     //expect(res.body).to.have.all.keys('data', 'message');
                     expect(res.body.data).to.be.a('object');
                     
                     done();
                  });
         });
        // Test to get single student record
        // it("should get a single student record", (done) => {
        //      const id = 1;
        //      chai.request(app)
        //          .get(`/${id}`)
        //          .end((err, res) => {
        //              res.should.have.status(200);
        //              res.body.should.be.a('object');
        //              done();
        //           });
        //  });
         
        // // Test to get single student record
        // it("should not get a single student record", (done) => {
        //      const id = 5;
        //      chai.request(app)
        //          .get(`/${id}`)
        //          .end((err, res) => {
        //              res.should.have.status(404);
        //              done();
        //           });
        //  });
    });
});