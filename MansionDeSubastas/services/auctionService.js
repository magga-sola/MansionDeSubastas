const db = require("../data/db");
const Auction = require('../data/db').Auction;
const AuctionBid = require('../data/db').AuctionBid;

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
    const getWinnerByAuctionId = async (auction, cb, errorCb) => {
      
    };

    function createAuction(auction, successCb, errorCb) {
      Auction.create(auction, function(err, result) {
        if (err) { errorCb(err); }
        else { successCb(result); }
      });
    };

    //const getBidsByAuctionId = async (auctionId, cb, errorCb) => {
    //  try {
    //    const auctionbids = await db.AuctionBid.find({auctionId: auctionId});
    //    return auctionbids;
    //  } catch(err){
    //    return err;
    //  }
    //}

    ///api/auctions/:id/bids [GET]
    const getBidsByAuctionId = async (auctionId, cb, errorCb) => {

      try {
        const auctionbids = await AuctionBid.find({ auctionId: auctionId });
        return auctionbids;
      } catch(err) {
        return err;
      }
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
