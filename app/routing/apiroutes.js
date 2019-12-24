let friends = require('../data/friends.js');

module.exports = function(app){

app.get("/api/friends", function(req,res){
    res.json(friends);
    // console.log(friends)
    });

app.post("/api/friends", function(req, res) {
    console.log(req.body.answers);
    let user = req.body.scores;
    let scoresA = [];
    let match = 0;

    for (let i = 0; i < friends.length; i++) {
        let differences = 0;

        for (let j = 0; j < array.length; j++) {
            differences += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(user[j])));
            }
        scoresA.push(differences);
        }
    for(var i=0; i<scoresA.length; i++){
        if(scoresArray[i] <= scoresArray[match]){
            match = i;
            }
        }

    var newfriend = friends[match];
    friendList.push(req.body);



    });








};