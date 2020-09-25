const apiPath = '/api';
const version = "v1"

const express = require('express');
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
    const art = await artService.getArtById(artId)
    if (art === null){
        return res.status(404).json({"message":"Art with ID" + req.params.artId + "does not exist"});
    }
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
    const artists = await artistService.getAllArtists();
    return res.json(artists);
});

// /api/artists/:artistId [GET]
app.get(apiPath + '/artists/:artistId', async function(req, res) {
    const artistId = req.params.artistId;
    const artist = await artistService.getArtistById(artistId);
    if (!artist){
        return res.status(404).json({"message":"Artist with ID" + req.params.artistId + "does not exist"});
    }
    return res.json(artist);
});

// /api/artists [POST]
app.post(apiPath + '/artists', function(req, res) {
    artistService.createArtist(req.body, function(artist) {
      return res.status(200).json(artist);
    }, function (err) {
      return res.status(400).json(err);
    });
  });

// /api/customers [GET]
app.get(apiPath + '/customers', async function(req, res) {
  const customers = await customerService.getAllCustomers();
  return res.json(customers);
});

// /api/customers/:id [GET]
app.get(apiPath + '/customers/:customerId', async function(req, res) {
    const customerId = req.params.customerId;
    const customer = await customerService.getCustomerById(customerId);
        if (!art){
            return res.status(404).json({"message":"Customer with ID" + req.params.customerId + "does not exist"});
        }
    return res.json(customer);
    });

// /api/customers [POST]
app.post(apiPath + '/customers', function(req, res) {
  customerService.createCustomer(req.body, function(customer) {
    return res.status(200).json(customer);
  }, function (err) {
    return res.status(400).json(err);
  });
});

// /api/customers/:id/auctiobids [GET]
app.get(apiPath + '/customers/:customerId/bids', async function(req, res) {
    const customerId = req.params.customerId;
    const auctionBids = await customerService.getAuctionbidsByCustomerId(customerId);
    if (!auctionBids){
        return res.status(404).json({"message":"Auction bid with customer ID" + req.params.customerId + "does not exist"});
    }
    return res.status(200).json(auctionBids);
  });

// /api/auctions [GET]
app.get(apiPath + '/auctions', async function(req, res) {
  const auctions = await auctionService.getAllAuctions();
  return res.json(auctions);
});


// /api/auctions/:id [GET]
app.get(apiPath + '/auctions/:auctionId', async function(req, res) {
    const auctionId = req.params.auctionId;
    const auction = await auctionService.getAuctionById(auctionId);
    if (!auction){
        return res.status(404).json({"message":"Auction with ID" + req.params.auctionId + "does not exist"});
    }
    return res.json(auction);
});

// /api/auctions/:id/winner [GET]
app.get(apiPath + '/auctions/:auctionId/winner', async function(req, res) {
  auctionId = req.params.auctionId;
  const winner = await auctionService.getWinnerByAuctionId(auctionId);
  return res.json(winner);
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
app.get(apiPath + '/auctions/:auctionId/bids', async function(req, res) {
  const auctionId = req.params.auctionId;
  const auctionBids = await auctionService.getBidsByAuctionId(auctionId);
  return res.status(200).json(auctionBids);
});

// /api/auctions/:id/bids [POST]
app.post(apiPath + '/auctions/:auctionId/bids', function(req, res) {
  auctionService.createAuctionBid(req.body, function(auctionBid) {
    return res.status(200).json(auctionBid);
  }, function (err) {
    return res.status(400).json(err);
  });  
});

app.post("/api/auctions/:id/bids", function(req, res) {
  auctionService.createAuctionBid( req.body, function(auctionBid) {
      return res.status(201).json(auctionBid);
    },function(err) {
      return res.status(400).json(err);
    }
  );
});


app.get("/api/auctions/:id/bids", async function(req, res) {
  const result = await auctionService.getBidsByAuctionId(
    req.params.id
  );
  return res.status(result.status).json(result.body);
});


