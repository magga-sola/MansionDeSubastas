const mongoose = require('mongoose');
const artSchema = require('../schemas/art');
const artistSchema = require('../schemas/Artist');
const auctionSchema = require('../schemas/Auction');
const auctionBidSchema = require('../schemas/AuctionBids');
const customerSchema = require('../schemas/Customer');

const uri = "mongodb+srv://eva:eva@cluster0.oqmgh.gcp.mongodb.net/MansionDeSubastas";

const connection = mongoose.createConnection(uri, { useNewUrlParser: true, useUnifiedTopology: true });

 //const Art = connection.model('Art', artSchema);
 const Art = connection.model('Art', artSchema, 'Art');
 const Artist = connection.model('Artist', artistSchema, 'Artist');
 const AuctionBid = connection.model('AuctionBid', auctionBidSchema, 'AuctionBids');
 const Customer = connection.model('Customer', customerSchema, 'Customers');
 const Auction = connection.model('Auction', auctionSchema, 'Auctions')

 module.exports = {
   connection,
   Art,
   Artist,
   AuctionBid,
   Customer,
   Auction
 };
