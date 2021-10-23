// enemy functions and console log
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var enemyInfo = [
    {
    name: "Roborto",
    attack: randomNumber(10, 14),
    shield: {
        type: "wood",
        strength: 10
    }
    },
    {
    name: "Amy Android",
    attack: randomNumber(10, 14)
    },
    {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
    }
];

//player functions and console log command
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        console.log(this);
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert ("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};
var round = 0;
console.log(playerInfo.name, playerInfo.attack, playerInfo.health, playerInfo.money);

// functions to operate game
var startGame = function() {
    playerInfo.reset();
    for(var i = 0; i <enemyInfo.length; i++) {
        var pickedEnemyObj = enemyInfo[i];
        pickedEnemyObj.health = randomNumber(40, 60);
        fight(pickedEnemyObj);
        shop();
}
}

shop = function() {
    playerInfo.health = playerInfo.health + 20;
    playerInfo.money = playerInfo.money -7;
    switch(shop) {
    case 'REFILL','refill':
        playerInfo.refillHealth();
        break;
    case "UPGRADE", 'upgrade':
        playerInfo.upgradeAttack();
        break;
    }}


var fight = function(enemy) {
    console.log(enemy);
    while(playerInfo.health > 0 && enemy.health > 0) {
    
    window.alert("Welcome to Robot Gladiators! Round " + ( round += 1 ));

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player choses to fight, then fight

    if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable

    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );

// check enemy's health
    if (enemy.health <= 0) {
    window.alert(enemy.health + " has died!");
    break;
    } else {
    window.alert(enemy.health + " still has " + enemy.health + " health left.");
    }

// remove player's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
    enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );

// check player's health
    if (playerInfo.health <= 0) {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
    } else {
    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }

// if player choses to skip
// if player picks "skip" confirm and then stop the loop
}  if (promptFight === "skip" || promptFight === "SKIP") {

// confirm player wants to skip
// confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

// if yes (true), leave fight
    if (confirmSkip) {
    window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");

// subtract money from playerMoney for skipping
    playerInfo.money = Math.max(0, playerInfo.money - 10);
    console.log("playerMoney", playerInfo.money);
    break;
}
// if no (false), ask question again by running fight() again
    else {
    fight();
            }
        }
    }
};

//to call functions
startGame()  