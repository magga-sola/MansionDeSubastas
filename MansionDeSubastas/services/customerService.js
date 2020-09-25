const customers = require('../data/db').Customer;
const auctionBids = require('../data/db').AuctionBid;

const globalTryCatch = async cb => {
  try {
    return await cb();
  } catch(err) {
    return err;
  }
}

const customerService = () => {
    const getAllCustomers = () => {
      return await globalTryCatch(async () => {
        const customers = await Customer.find({});
        return customers
      })
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
