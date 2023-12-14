const Customer = require('../models/customerModel');

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(200).json(customer);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const getCustomer = async (req, res) => {
  try {
    const { email } = req.params;
    const customer = await Customer.findOne({ email });
    if (!customer) {
      return res.status(404).json({ message: `Cannot find any customer with email ${email}` });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const { email } = req.params;
    const customer = await Customer.findOneAndUpdate({ email }, req.body);
    if (!customer) {
      return res.status(404).json({ message: `Cannot find any customer with email ${email}` });
    }
    const updatedCustomer = await Customer.findOne({ email });
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const { email } = req.params;
    const customer = await Customer.findOneAndDelete({ email });
    if (!customer) {
      return res.status(404).json({ message: `Cannot find any customer with email ${email}` });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
