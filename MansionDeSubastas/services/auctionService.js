const auctions = require('../data/collection').auctions;

    const auctionService = () => {
        const getALlAuctions = () => {
            return auctions;
        };
        


    const getAuctionById = () => {

    };

    const getWinnerByAuctionId = () => {

    };

    const createAuction = () => {

    };

    const getBidsByAuctionId = () => {

    };

    const createBidByAuctionId = () => {

    };


    return {
        getALlAuctions,
        getAuctionById,
        getWinnerByAuctionId,
        createAuction,
        getBidsByAuctionId,
        createBidByAuctionId

    };

};

module.exports = auctionService();