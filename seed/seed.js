const mongoose = require('mongoose');
const {company, computer, endUser} = require('../models')

function seed(companyData, computerData, endUserData) {
    return mongoose.connection.dropDatabase()
        .then (() => {
          return Promise.all([company.insertMany(companyData)])  
        })
        // .then(([companyDocs]) => {
        //     const endUserD = endUserData.map(endUser => {
        //         const CompanyID = companyDocs.find((company) => company.company_name === endUser.company_id)._id
        //         return {...endUser, company_id: CompanyID}                
        //     })
        //     return Promise.all([endUser.insertMany(endUserD), companyDocs]);
        // })
        .then(([companyDocs]) => {
            const ComputerD = computerData.map(computer => {
                const CompanyID = companyDocs.find((company) => company.company_name === computer.end_user)._id
                return {...computer, end_user: CompanyID}                
            })
            return Promise.all([computer.insertMany(ComputerD), companyDocs]);
        })
    
}

module.exports = seed;