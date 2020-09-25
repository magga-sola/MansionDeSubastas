const db = require("../data/db");
const auction = require("../schemas/auction");
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


    // If the auction is not finished the web service should return a status code 409 (Conflict),
    //otherwise it should return the customer which holds the highest bid. If the auction had no bids, it
    //should return a status code 200 (OK) with the message: ‘This auction had no bids.’.

    ///api/auctions/:id/winner [GET]
    function getWinnerByAuctionId(id, successCb, errorCb) {
      auction = Auction.findById(id);

      if (auction.endDate < Date.now()) {
        if (winningBid = AuctionBid.find({auctionId: auction.id}).sort("-price").limit(1)) {
        return winningBid;
      }
        else{
          return status(200).json('This auction had no bids.')
        }
      } else {
        return status(409).json("conflict! Auction is still going.")
      }
    };

    function createAuction(auction, successCb, errorCb) {
      Auction.create(auction, function(err, result) {
        if (err) { errorCb(err); }
        else { successCb(result); }
      });
    };


    ///api/auctions/:id/bids [GET]
    const getBidsByAuctionId = async (id, cb, errorCb) => {

      try {
        const auctionbids = await AuctionBid.find({ auctionId: id });
        return auctionbids;
      } catch(err) {
        return err;
      }
    };


    //Auction bids must be higher than the minimum price and higher than the highest bid
    //if it is lower than the minimum price or current highest bid, we return a 412

    const createAuctionBid = async (auctionBid, cb, errorCb) => {
      //get winning bid to test if it's less than the new bid
      const auction = await Auction.find({auctionId: auctionBid.auctionId});

      // check if auction is done
      if (auction.endDate < Date.now()) {
        return status(409).json("This auction is no longer open")
      }
      //check if new bid is higher than the minimum price
      if (auctionBid.price > auction.minimumPrice) {

        AuctionBid.create(auctionBid, function(err, result) {
          if (err) { errorCb(err); }
          else { successCb(result); }
        });

      } else { 
        return status("412").json("bid not high enough!")
      }
    };


    return {
        getAllAuctions,
        getAuctionById,
        getWinnerByAuctionId,
        createAuction,
        getBidsByAuctionId,
        createAuctionBid
    };

};

module.exports = auctionService();
