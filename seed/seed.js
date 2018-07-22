const mongoose = require('mongoose');
const {company, computer, comment} = require('../models')

function seed(companyData, computerData, commentData) {
    return mongoose.connection.dropDatabase()
        .then (() => {
          return Promise.all([company.insertMany(companyData)])  
        })
        .then(([companyDocs]) => {
            const ComputerD = computerData.map(computer => {
                const CompanyID = companyDocs.find((company) => company.company_name === computer.end_user)._id
                return {...computer, end_user: CompanyID}                
            })
            return Promise.all([computer.insertMany(ComputerD), companyDocs]);
        })
        .then(([computerDocs, companyDocs]) => {
            const commentD = commentData.map(comment => {
                const ComputerID = computerDocs.find((computer) => computer.ref === comment.computer_id)._id
                return {...comment, computer_id: ComputerID}                
            })
            return Promise.all([comment.insertMany(commentD), computerDocs, companyDocs]);
        })
    
}

module.exports = seed;