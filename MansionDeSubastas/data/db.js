const mongoose = require('mongoose');
const artSchema = require('../schemas/Art');
const artistSchema = require('../schemas/Artist');
const auctionSchema = require('../schemas/Auction');
const auctionBidSchema = require('../schemas/AuctionBids');
const customerSchema = require('../schemas/Customer');

const uri = "mongodb+srv://eva:eva@cluster0.oqmgh.gcp.mongodb.net/MansionDeSubastas";

const connection = mongoose.createConnection(uri, { useNewUrlParser: true, useUnifiedTopology: true });

 const Art = connection.model('Art', artSchema);
 const Artist = connection.model('Artist', artistSchema);
 const AuctionBid = connection.model('AuctionBid', auctionBidSchema);
 const Customer = connection.model('Customer', customerSchema);
 const Auction = connection.model('Auction', auctionSchema)

 module.exports = {
   connection,
   Art,
   Artist,
   AuctionBid,
   Customer,
   Auction
 };
