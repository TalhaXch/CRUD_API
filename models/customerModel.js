const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the customer's name"]
  },
  email: {
    type: String,
    required: [true, "Please enter the customer's email"],
    unique: true
  },
  phoneNumber: {
    type: String
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String
  }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
