//alert('hello world')
var heroHealth = 3;
var dragonHealth = 3;

function choice(ch){
    console.log(ch)
    //var ch = document.getElementById("choice");
    if (ch === 'flee'){
        document.getElementById("user-choice").innerHTML = "run away, run fast Coward!";
    }else{
        document.getElementById("user-choice").innerHTML = "Feeling lucky?";
        rollDice();
    }
}

function randomNumber(min, max){        //function to calculate random number in range.
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function rollDice(){
    var dice1 = randomNumber(1, 6);
    var dice2 = randomNumber(1, 6);
    document.getElementById("left-dice").src = "./dragon-assets/d"+dice1+".gif";
    document.getElementById("right-dice").src = "./dragon-assets/d"+dice2+".gif";
    if ((dice1 + dice2) < 8){
        heroHealth -= 1;
        document.getElementById("next").innerHTML = "You got hit and only " + (heroHealth) + " of health left";
        if (heroHealth < 1){
            document.getElementById("main-image").src = "./dragon-assets/bad_dragon.jpg";
            document.getElementById("user-choice").innerHTML = "You are dead brave soul, RIP!";
            alert("game over!")
        }
    }else{
        dragonHealth -= 1;
        document.getElementById("next").innerHTML = "You hurt the dragon it has only " + (dragonHealth) + " of rage left";
        if (dragonHealth < 1){
//            document.getElementById('main-image').style.height = "450px";
            document.getElementById('main-image').style.width = "400px";
            document.getElementById("main-image").src = "./dragon-assets/gooddragon.jpg";
            document.getElementById("user-choice").innerHTML = "You broke the hard shell and released the good dragon";
            alert("game over!")
        }
    }
}
