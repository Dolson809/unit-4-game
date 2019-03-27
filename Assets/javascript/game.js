var countWin = 0;
var countLose = 0;

var gems = {
    first:
    {
        name: "first",
        value: 0
    },

    second:
    {
        name: "second",
        value: 0
    },

    third:
    {
        name: "third",
        value: 0
    },

    fourth:
    {
        name: "fourth",
        value: 0
    }
};

var currentScore = 0;

var targetScore = 0;

var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function () {

     currentScore = 0;

    targetScore = getRandom(19, 120);

    gems.first.value = getRandom(1, 12);
    gems.second.value = getRandom(1, 12);
    gems.third.value = getRandom(1, 12);
    gems.fourth.value = getRandom(1, 12);

    $("#targetScore").html(targetScore);
    $("#total").html(currentScore);

    console.log("targetScore " + targetScore);
    console.log("first " + gems.first.value + " | Second " + gems.second.value + " | thrid " + gems.third.value + " | fourth " + gems.fourth.value)
}

var addValue = function (gems) {

    currentScore = currentScore + gems.value;

    $("#total").html(currentScore);

    checkWin()

    console.log("Your score " + currentScore);


}

var checkWin = function () {

    if (currentScore > targetScore) {
        alert("Sorry you lost!");

        console.log('you lost');

        countLose++

        $('#loseCount').html(countLose);

        startGame();
    }
    else if (currentScore == targetScore) {
        alert('Congratz you win!')

        console.log('you win');

        countWin++

        $('#winCount').html(countWin);

        startGame();
    }
}


//start game page will display a random number


//player will guess a number by hitting the button that selects a specific nnumber.

$("#first").click(function () {
    addValue(gems.first);
})
$("#second").click(function () {
    addValue(gems.second);
})
$("#third").click(function () {
    addValue(gems.third);
})
$("#fourth").click(function () {
    addValue(gems.fourth);
})

startGame()