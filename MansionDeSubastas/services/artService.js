const Art = require('../data/db').Art;

const artService = () => {

    const globalTryCatch = async cb => {
        try {
          return await cb();
        } catch(err) {
          return err //, {status: 500};
        }
    }

    const getAllArt = async () => {
      return await globalTryCatch(async () => {
        const art = await Art.find({});
        return art
      });
    }

    const getArtById = async id => {
      return await globalTryCatch(async () => {
        const art = await Art.findById(id);
        return art;
      });
    };


    function createArt(art, successCb, errorCb) {
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
