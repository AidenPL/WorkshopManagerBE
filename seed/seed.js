const mongoose = require('mongoose');
const {company, computer, endUser} = require('../models')

function seed(companyData, computerData, endUserData) {
    return mongoose.connection.dropDatabase()
        .then (() => {
          return Promise.all([company.insertMany(companyData)])  
        })
        .then(([companyDocs]) => {
            const endUserD = endUserData.map(endUser => {
                const CompanyID = companyDocs.find((company) => company.Company_name === endUser.Company_name)._id
                return {...endUser, company_name: CompanyID}                
            })
            return Promise.all([endUser.insertMany(endUserD), companyDocs]);
        })
        .then(([endUserDocs, companyDocs]) => {
            const ComputerD = computerData.map(computer => {
                const EndUserID = endUserDocs.find((endUser) => endUser.name === computer.end_user)._id
                return {...computer, end_user: EndUserID}                
            })
            return Promise.all([computer.insertMany(ComputerD), companyDocs, endUserDocs]);
        })
    
}

module.exports = seed;