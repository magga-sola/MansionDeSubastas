const { Auction } = require('../data/db');

const auctions = require('../data/db').Auction;

const globalTryCatch = async cb => {
  try {
    return await cb();
  } catch(err) {
    return err;
  }
}

    const auctionService = () => {
        const getAllAuctions = () => {
          return await globalTryCatch(async () => {
            const auctions = await Auction.find({});
            return auctions
          })
        };

    const getAuctionById = async id => {
      try {
        const auction = await Auction.findbyId(id);
        return artist
      } catch(err) {
        return err;
      }
    };

    const getWinnerByAuctionId = () => {

    };

    function createAuction(auction, successCb, errorCb) {
      Auction.create(auction, function(err, result) {
        if (err) { errorCb(err); }
        else { successCb(result); }
      });
    };

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
