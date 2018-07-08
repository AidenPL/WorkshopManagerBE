process.env.NODE_ENV = 'test';
const mongoose = require('mongoose');
const app = require('../app');
const request = require('supertest')(app)
const { expect } = require('chai');
const seed = require('../seed/seed');



const {companyData, computerData, endUserData} = require('../seed/testData')

describe('API Tests', () => {
  let computerDocs, companyDocs, endUserDocs
  beforeEach(function () {
    this.timeout(6000);
    return seed(companyData, computerData, endUserData)
      .then((data) => {
        [computerDocs, companyDocs, endUserDocs] = data
      });
  });

  after(function () {
    return mongoose.disconnect()
      .then(() => {

      })
  })


    describe('Company APIs', () => {
        describe('GET api/company', () => {
            it('Return the correct company', () => {
                return request
                .get('/api/company')
                .expect(200)
                .then((res) => {
                    expect(res.body.Company[0].company_name).to.equal(companyDocs[0].company_name);
                 })
            });
        });

        describe('POST api/company', () => {
            it('POST Correct Data', () => {
                return request
                .post('/api/company')
                .send({company_name: "new company"})
                .expect(201)
                .then((res) => {
                    expect(res.body.Company.company_name).to.equal('new company');
                 })
            });
        });
    });

    describe('Computer APIs', () => {
        describe('GET api/computer', () => {
            it('Return the correct computer', () => {
                return request
                .get('/api/computer')
                .expect(200)
                .then((res) => {
                    expect(res.body.Computer[1].bay).to.equal(computerDocs[1].bay);
                    expect(res.body.Computer[2].ref).to.equal(computerDocs[2].ref);
                    expect(res.body.Computer[0].issue).to.equal(computerDocs[0].issue);
                 })
            });
        });
    });

    describe('EndUser APIs', () => {
        describe('GET api/enduser/:companyID', () => {
            it('Return the correct EndUser', () => {
                return request
                .get(`/api/enduser/${companyDocs[0]._id}`)
                .expect(200)
                .then((res) => {
                    expect(res.body.EndUsers[0].name).to.equal(endUserDocs[0].name);
                    expect(res.body.EndUsers[0].contact_number).to.equal(endUserDocs[0].contact_number);
                 })
            });
        });
        describe('POST api/enduser', () => {
            it('POST Correct Data', () => {
                return request
                .post('/api/enduser')
                .send({
                    company_id: "5b41edb787a4670c788c5659",
                    name: "Alex",
                    contact_number: "01836372811"
                })
                .expect(201)
                .then((res) => {
                    expect(res.body.EndUser.name).to.equal('Alex');
                 })
            });
        });
    });

});