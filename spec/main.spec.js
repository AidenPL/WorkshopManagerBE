process.env.NODE_ENV = 'test';
const mongoose = require('mongoose');
const app = require('../app');
const request = require('supertest')(app)
const { expect } = require('chai');
const seed = require('../seed/seed');



const {companyData, computerData, endUserData} = require('../seed/devData')

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
                    expect(res.body.Company[0].company_name).to.eql(companyDocs[0].company_name);
                 })
            });
        });
    });

    describe('computer APIs', () => {
        describe('GET api/computer', () => {
            it('Return the correct computer', () => {
                return request
                .get('/api/computer')
                .expect(200)
                .then((res) => {
                    expect(res.body.Computer[1].bay).to.eql(computerDocs[1].bay);
                    expect(res.body.Computer[2].ref).to.eql(computerDocs[2].ref);
                    expect(res.body.Computer[3].issue).to.eql(computerDocs[3].issue);
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
                    expect(res.body.EndUsers[1].name).to.eql(endUserDocs[1].name);
                    expect(res.body.EndUsers[0].contact_number).to.eql(endUserDocs[0].contact_number);
                 })
            });
        });
    });

});