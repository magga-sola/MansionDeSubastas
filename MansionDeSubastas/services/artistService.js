const Artist = require('../data/db').Artist;

const artistService = () => {

    const globalTryCatch = async cb => {
        try {
          return await cb();
        } catch(err) {
          return err;
        }
    }

    const getAllArtists = async () => {
        return await globalTryCatch(async () => {
          const artists = await Artist.find({});
          return artists
        });
    };

    const getArtistById = async id => {
        return await globalTryCatch(async () => {
          const artist = await Artist.findById(id);
          return artist;
        });
      }

    function createArtist(artist, successCb, errorCb) {
      Artist.create(artist, function(err, result) {
        if (err) {errorCb(err); }
        else { successCb(result); }
      });
    };

    return {
        getAllArtists,
        getArtistById,
        createArtist
    };
};

module.exports = artistService();
