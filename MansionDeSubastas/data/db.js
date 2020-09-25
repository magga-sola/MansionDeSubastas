const mongoose = require('mongoose');
const artSchema = require('../schemas/art');
const artistSchema = require('../schemas/Artist');
const auctionSchema = require('../schemas/Auction');
const auctionBidSchema = require('../schemas/AuctionBids');
const customerSchema = require('../schemas/Customer');

 const uri = "mongodb+srv://<new_user1>:<newuserpassword>@cluster0.oqmgh.gcp.mongodb.net/<MansionDeSubestas>?retryWrites=true&w=majority";

 const connection = mongoose.createConnection(uri, { useNewUrlParser: true });

 module.exports = {
     Art: connection.model('Art', artSchema),
     Artist: connection.model('Artist', artistSchema),
     Auction: connection.model('Auction', auctionSchema),
     AuctionBid: connection.model('AuctionBid', auctionBidSchema, 'auctionBids'),
     Customer: connection.model('Customer', customerSchema)
 };
