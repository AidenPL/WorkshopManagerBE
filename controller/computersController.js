const computerModel = require('../models/computerModel')

function computers (req, res, next) {
    computerModel.find().populate({ 
        path: 'end_user',
        populate: {
          path: 'company_name'
        } 
     })
    .then(data => {
        res.send({ Computer: data });
    })
    .catch((err) => {console.log})
}
    


module.exports = {computers}