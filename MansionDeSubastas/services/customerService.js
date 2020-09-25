const Customer = require('../data/db').Customer;
const AuctionBid = require('../data/db').AuctionBid;


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
      return await globalTryCatch(async () => {
        const customer = await Customer.findById(id);
        return customer;
      })
    };


    function createCustomer(customer, successCb, errorCb) {
      Customer.create(customer, function(err, result){
        if (err) {errorCb(err); }
        else {successCb(result);}
      });
    };

    //api/customers/:id/auction-bids [GET]
    const getAuctionbidsByCustomerId = async (id, successCb, errorCb) => {
      const auctionBids = await AuctionBid.find({'customerId': id});
      if (auctionBids == null) {
        return status(400);
      } else {
        return auctionBids;
      }
    };


    return {
        getAllCustomers,
        getCustomerById,
        createCustomer,
        getAuctionbidsByCustomerId
    };

};

module.exports = customerService();
