var lovePoints = 0;
var feed = 0;
var pet = 0;
var play = 0;
var clean = 0;
var sleep = 0;
var speak = 0;


$('#feed').click(function(){
    lovePoints += 1;
    feed += 1;
    console.log(lovePoints + ", " + feed);
    if(feed%5 == 0){
        alert("Your pet needs to play");
    }
    if(lovePoints == 1000){
        alert("Congrats, you maxed out the love bar! You and your pet are best friends! Keep taking care of your pet to earn even more points.");
    }
    else if(lovePoints%1000 == 0 && lovePoints != 0){
        alert("Congrats, you've earned " + lovePoints + " points! Keep up the good work.");
    }
});
$('#pet').click(function(){
    lovePoints += 2;
    pet += 1;
    console.log(lovePoints + ", " + pet);
    if(lovePoints == 1000){
        alert("Congrats, you maxed out the love bar! You and your pet are best friends! Keep taking care of your pet to earn even more points.");
    }
    else if(lovePoints%1000 == 0 && lovePoints != 0){
        alert("Congrats, you've earned " + lovePoints + " points! Keep up the good work.");
    }
});
$('#play').click(function(){
    lovePoints += 2;
    play += 1;
    console.log(lovePoints + ", " + play);
    if(play%5 == 0){
        alert("Your pet needs some sleep");
    }
    if(lovePoints == 1000){
        alert("Congrats, you maxed out the love bar! You and your pet are best friends! Keep taking care of your pet to earn even more points.");
    }
    else if(lovePoints%1000 == 0 && lovePoints != 0){
        alert("Congrats, you've earned " + lovePoints + " points! Keep up the good work.");
    }
});
$('#clean').click(function(){
    lovePoints += 1;
    clean += 1;
    console.log(lovePoints + ", " + clean);
    if(lovePoints == 1000){
        alert("Congrats, you maxed out the love bar! You and your pet are best friends! Keep taking care of your pet to earn even more points.");
    }
    else if(lovePoints%1000 == 0 && lovePoints != 0){
        alert("Congrats, you've earned " + lovePoints + " points! Keep up the good work.");
    }
});
$('#sleep').click(function(){
    lovePoints += 2;
    sleep +=1;
    console.log(lovePoints + ", " + sleep);
    if(sleep%15 == 0){
        alert("Your pet needs to play");
    }
    if(lovePoints == 1000){
        alert("Congrats, you maxed out the love bar! You and your pet are best friends! Keep taking care of your pet to earn even more points.");
    }
    else if(lovePoints%1000 == 0 && lovePoints != 0){
        alert("Congrats, you've earned " + lovePoints + " points! Keep up the good work.");
    }
});
$('#speak').click(function(){
    lovePoints += 1;
    speak += 1;
    console.log(lovePoints + ", " + speak);
    if(lovePoints == 1000){
        alert("Congrats, you maxed out the love bar! You and your pet are best friends! Keep taking care of your pet to earn even more points.");
    }
    else if(lovePoints%1000 == 0 && lovePoints != 0){
        alert("Congrats, you've earned " + lovePoints + " points! Keep up the good work.");
    }
});