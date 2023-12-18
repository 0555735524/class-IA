// const mongoose = require('mongoose')

// const patientiNFOSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: (true, "please enter youtname")
//   },

//   patientId: {
//     type: Number,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: Boolean,
//   }
// },
// {
//   timestamps: true
// });

// const Product = mongoose.model('Product', productSchema);
// module.exports = Product;

const mongoose = require('mongoose')

const patientInfoSchema = mongoose.Schema({
  patientId: {
    type: Number,
    required: true
  },
  surName: {
    type: String,
    requied: (true, "enter your surname")
  },
  otherNames: {
    type: String,
    required: (true, "enter your other Names")
  },
  gender: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  residentialAddress: {
    type: String,
    required: true
  },
  emergencyContact: {
    name: {type: String,
    required: true},
    phoneNumber: {type: String,
    required: true},
    relationship: {type: String,
    required: true}
  }
})

const patient = mongoose.model('patient', patientSchema);
module.exports = patient;