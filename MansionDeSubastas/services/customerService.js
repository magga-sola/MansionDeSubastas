//const { Customer } = require('../data/db');

const customers = require('../data/db').Customer;
const auctionBids = require('../data/db').AuctionBid;


const customerService = () => {


    const globalTryCatch = async cb => {
      try {
        return await cb();
      } catch(err) {
        return err;
      }
    }

    const getAllCustomers = async () => {
      return await globalTryCatch(async () => {
        const customers = await Customer.find({});
        return customers
      })
    };

    const getCustomerById = async id => {
      try {
        const customer = await Customer.findById(id);
        return customer;
      } catch(err){
        return err;
      }
    };

    function createCustomer(customer, successCb, errorCb) {
      Customer.create(customer, function(err, result){
        if (err) {errorCb(err); }
        else {successCb(result);}
      });
    };

    //api/customers/:id/auction-bids [GET]
    const getAuctionbidsByCustomerId = () => {

    };

    return {
        getAllCustomers,
        getCustomerById,
        createCustomer,
        getAuctionbidsByCustomerId
    };

};

module.exports = customerService();
