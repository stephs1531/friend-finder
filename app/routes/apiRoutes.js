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

      app.post("api/friends", function(req, res) {
       
        //set variable for the closest match that contains the difference between scores
        var bestMatch = {
          name: "",
          photo: "",
          closeAnswers: ""
        }

        //parse user's survey results
        var userData = req.body;
        var userAnswers = userData.answers;
        var userName = userData.name;
        var userPhoto = userData.photo;

        //set variable to calculate difference between users' scores
        var scoreDifference = 0;

        
      })

}