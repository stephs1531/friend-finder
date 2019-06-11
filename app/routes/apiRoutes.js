// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friendsData");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

}