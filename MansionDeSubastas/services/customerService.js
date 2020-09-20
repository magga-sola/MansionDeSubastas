const customers = require('../data/collection').customers;

const customerService = () => {
    const getAllCustomers = () => {
        return customers;
    };


    const getCustomerById = () => {

    };

    const createCustomer = () => {

    };

    const getAuctionbidsByCustomerId = () => {

    };

    return {
        getAllCustomers,
        getCustomerById,
        getAuctionbidsByCustomerId

    };

};

module.exports = customerService();