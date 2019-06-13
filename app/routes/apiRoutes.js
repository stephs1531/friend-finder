// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

      app.post("/api/friends", function(req, res) {
      //  console.log(friends);
      // console.log(req.body);
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
        
        //convert userScore string array to numbers
        var userScore = userAnswers.reduce(function(a,b){
          return a+b}, 0);
        console.log(userData.name , ", ", userScore);

        // loop through all friends and compare their scores to user's scores
        for (var i=0; i<friends.length; i++) {
          console.log(friends[i].name);
          var scores = friends[i].scores;
          var scoreSum = scores.reduce(function(a,b){
            return a+b}, 0);
          console.log(scoreSum);
          
          //add together all scores in each person's data set
          // var arraySum = function(scores){
          //   return scores.reduce(function(a,b){
          //     return a + b
          //   }, 0);
          //   console.log(scores)
          // };
          // console.log(arraySum);
          // console.log(req.body);
        }
      

        //compare each person's total score to the user's
        var diff = Math.abs( scoreSum - userScore );

          if( diff < 5 ) {
            //this user is a match
          }

        //determine which user has the closest score

        //send closest match back to html




      });

};