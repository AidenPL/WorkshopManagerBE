process.env.NODE_ENV = 'test';
const mongoose = require('mongoose');
const app = require('../app');
const request = require('supertest')(app)
const { expect } = require('chai');
const seed = require('../seed/seed');



const {companyData, computerData, commentData} = require('../seed/testData')

describe('API Tests', () => {
  let computerDocs, companyDocs, commentDocs
  beforeEach(function () {
    this.timeout(6000);
    return seed(companyData, computerData, commentData)
      .then((data) => {
        [commentDocs, computerDocs, companyDocs] = data
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

        describe('POST api/computer', () => {
            it('POST Correct Data', () => {
                return request
                .post('/api/computer')
                .send({
                    ref: "IT29103",
                    bay: "2",
                    issue: "Blue Screening",
                    current_status: "HDD Test",
                    end_user: "5b41ee6407c0910ca976c1b6"
                })
                .expect(201)
                .then((res) => {
                    expect(res.body.Computer.ref).to.equal('IT29103');
                    expect(res.body.Computer.bay).to.equal('2');
                    expect(res.body.Computer.issue).to.equal('Blue Screening');
                 })
            });
        });
    });

    describe('Comment APIs', () => {
        describe('GET api/comment/:computer_id', () => {
            it('Return the correct comments', () => {
                return request
                .get(`/api/comment/${companyDocs[0]._id}`)
                .expect(200)
                .then((res) => {
                    expect(res.body.Comments[0].comment).to.equal(endUserDocs[0].name);
                    expect(res.body.Comments[0].date).to.equal(endUserDocs[0].contact_number);
                 })
            });
        });
        describe('POST api/comment', () => {
            it('POST Correct Data', () => {
                return request
                .post('/api/comment')
                .send({
                    computer_id: "5b41edb787a4670c788c5659",
                    comment: "Alex",
                    date: "01836372811"
                })
                .expect(201)
                .then((res) => {
                    expect(res.body.Comment.name).to.equal('Alex');
                 })
            });
        });
    });

});