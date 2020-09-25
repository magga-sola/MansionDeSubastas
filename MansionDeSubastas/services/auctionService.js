const Auction = require('../data/db').Auction;

const auctionService = () => {

    const globalTryCatch = async cb => {
      try {
        return await cb();
      } catch(err) {
        return err;
      }
    }

    const getAllAuctions = async () => {
      return await globalTryCatch(async () => {
        const auctions = await Auction.find({});
        return auctions
      })
    };

    const getAuctionById = async id => {
      try {
        const auction = await Auction.findById(id);
        return auction
      } catch(err) {
        return err;
      }
    };

    ///api/auctions/:id/winner [GET]
    // If the auction is not finished the web service should return a status code 409 (Conflict),
    //otherwise it should return the customer which holds the highest bid. If the auction had no bids, it
    //should return a status code 200 (OK) with the message: ‘This auction had no bids.’.
    const getWinnerByAuctionId = () => {

    };

    //ekki alveg rétt held ég
    function createAuction(auction, successCb, errorCb) {
      Auction.create(auction, function(err, result) {
        if (err) { errorCb(err); }
        else { successCb(result); }
      });
    };

    ///api/auctions/:id/bids [GET]
    const getBidsByAuctionId = () => {

    };

    const createBidByAuctionId = () => {

    };

    return {
        getAllAuctions,
        getAuctionById,
        getWinnerByAuctionId,
        createAuction,
        getBidsByAuctionId,
        createBidByAuctionId
    };

};

module.exports = auctionService();
