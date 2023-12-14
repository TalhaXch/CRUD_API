const express = require('express');
const { 
  createCustomer, 
  deleteCustomer, 
  getCustomer, 
  getCustomers, 
  updateCustomer 
} = require('../controller/customerController'); 

const customerRoute = express.Router();

customerRoute.route('/').get(getCustomers).post(createCustomer);
customerRoute.route('/:email').get(getCustomer).put(updateCustomer).delete(deleteCustomer);

module.exports = customerRoute;
 
 