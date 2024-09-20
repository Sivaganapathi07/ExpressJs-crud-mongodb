const { mongoose } = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    surName: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true
    },
    shortAddress: {
        type: String,
        required: true
    },
    completeAddress: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })

const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;