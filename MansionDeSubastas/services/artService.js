const art = require('../data/db').Art;

const globalTryCatch = async cb => {
    try {
      return await cb();
    } catch(err) {
      return err;
  }
}

const artService = () => {
    const getAllArt = () => {
      return await globalTryCatch(async () => {
        const art = await Art.find({});
        return art
      })


    const getArtById = async id => {
      try {
        const artist = await Artist.findbyId(id);
        return artist
      } catch(err) {
        return err;
      }
    };

    function createArt = (art, successCb, errorCb) => {
      Art.create(art, function(err, result) {
        if (err) {errorCb(err); }
        else { successCb(result); }
      });
    };

    return {
        getAllArt,
        getArtById,
        createArt
    };

};

module.exports = artService();
