const customers = require('../data/db').Customer;
const auctionBids = require('../data/db').AuctionBid;

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
