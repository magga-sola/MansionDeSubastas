const apiPath = '/api';
const version = "v1"

const express = require('express');
var mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

const artService = require('./services/artService');
const artistService = require('./services/artistService');
const customerService = require('./services/customerService');
const auctionService = require('./services/auctionService');
const app = express();


// Parse requests of content-type 'application/json'
app.use(bodyParser.json());

//Tell express to use cors -- enables CORS for this backend
app.use(cors());

app.listen(port, () => {
    console.log('App listening on port ' + port);
});


/////////////////////////
/////   ENDPOINTS   /////
/////////////////////////


// /api/arts [GET]
app.get(apiPath + '/art', async function(req, res) {
  const art = await artService.getAllArt();
  return res.json(art);
});

// /api/art/:artid [GET]
app.get(apiPath + '/art/:artId', async function(req, res) {
    const artId = req.params.artId;
    const art = await artService.getArtById(artId);
    return res.json(art);
});

// /api/art [POST]
app.post(apiPath + '/art', function(req, res) {
  artService.createArt(req.body, function(art) {
    return res.status(201).json(art);
  }, function(err) {
    return res.status(400).json(err)
  });
});

// /api/artists [GET]
app.get(apiPath + '/artists', async function(req, res) {
    //return res.status(200);
    const artists = await artistService.getAllArtists();
    return res.json(artists);
});

// /api/artists/:artistId [GET]
app.get(apiPath + '/artists/:artistId', (req, res) => {
    return res.status(200);
});

// /api/customers [GET]
app.get(apiPath + '/customers', async function(req, res) {
  const customers = await customerService.getAllCustomers();
  return res.json(customers);
});

// /api/customers/:id [GET]
app.get(apiPath + '/customers/:customerId', (req, res) => {
    return res.status(200);
});

// /api/customers [POST]
app.post(apiPath + '/customers', function(req, res) {
  customerService.createCustomer(req.body, function(customer) {
    return res.status(200).json(customer);
  }, function (err) {
    return res.status(400).json(err);
  });
});

app.post(apiPath + '/art', function(req, res) {
  artService.createArt(req.body, function(art) {
    return res.status(201).json(art);
  }, function(err) {
    return res.status(400).json(err)
  });
});

// /api/customers/:id/auction-bids [GET]
app.get(apiPath + '/customers/:customerId/auction-bids', (req, res) => {
    return res.status(200);
});

// /api/auctions [GET]
app.get(apiPath + '/auctions', async function(req, res) {
  const auctions = await auctionService.getAllAuctions();
  return res.json(auctions);
});

// /api/auctions/:id [GET]
app.get(apiPath + '/auctions/:auctionId', (req, res) => {
    return res.status(200);
});


// /api/auctions/:id/winner [GET]
app.get(apiPath + '/auctions/:auctionId/winner', (req, res) => {
    return res.status(200);
});


// /api/auctions [POST]
app.post(apiPath + '/auctions', function(req, res) {
    auctionService.createAuction(req.body, function(auction) {
      return res.status(200).json(auction);
    }, function(err) {
      return res.status(400).json(err)
    });
});

// /api/auctions/:id/bids [GET]
app.get(apiPath + '/auctions/:auctionId/bids', (req, res) => {
    return res.status(200);
});


// /api/auctions/:id/bids [POST]
app.post(apiPath + '/auctions/:auctionId/bids', (req, res) => {
    return res.status(200);
});
