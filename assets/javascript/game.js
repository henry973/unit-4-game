var crystal = {
    crystal1:
    {
        name:"crystal1",
        value: 0
    },
    crystal2:
    {
        name: "crystal2",
        value: 0
    },
    crystal3:
    {
        name:"crystal3",
        value: 0
    },
    crystal4:
    {
        name:"crystal4",
        value: 0
    }
};

var currentScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;

var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function() {

    var currentScore = 0;

    targetScore = getRandom(19, 120);

    crystal.crystal1.value = getRandom(1, 12);
    crystal.crystal2.value = getRandom(1, 12);
    crystal.crystal3.value = getRandom(1, 12);
    crystal.crystal4.value = getRandom(1, 12);

    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);
}


var addValues = function(crystal) {

    currentScore = currentScore + crystal.value;

    $("#yourScore").html(currentScore);
    checkWin();
    console.log("Your Score: " + currentScore);
}

var checkWin = function()  {
    if(currentScore > targetScore){
        alert("You lose");
        lossCount++;
        $("#lossCount").html(lossCount);

        startGame();
    }
    else if (currentScore == targetScore){
        alert("You won!");
        winCount++;
        $("#winCount").html(winCount);

        startGame();
    }
}

startGame();

$("#crystal1").click(function() {
    addValues(crystal.crystal1);
})

$("#crystal2").click(function() {
    addValues(crystal.crystal2);
})

$("#crystal3").click(function() {
    addValues(crystal.crystal3);
})

$("#crystal4").click(function() {
    addValues(crystal.crystal4);
})  
