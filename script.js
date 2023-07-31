/* var randomNumb = (Math.random()) * 100;
var rounded = Math.floor(randomNumb)
console.log(rounded + "%")

var randomDice = (Math.random()) * 6;
var rand = Math.ceil(randomDice)
console.log(rand + 1) */


/* var randomNumb = (Math.random()) * 101;
var rounded = Math.floor(randomNumb)
console.log(rounded)

if (rounded < 50){
    console.log("I failed the exam :,(")
}

else if(rounded < 75){
    console.log("I passed the exam with an average mark.")
}

else{
    console.log("I passed the exam with a great mark :)")
} */

/*Function - parameters & arguments*/

/* function dailyBattle(money, spentCash){
    console.log("Today I made $" + money);
    console.log("Today I spent $" + spentCash);
    totalMoney = money - spentCash
    console.log("Total money for today is $" + totalMoney);

    if(totalMoney >= 0){
        console.log("I won today's battle :D ");
    }
    if(totalMoney < 0){
        console.log("Today was a loss for me :( ");
    }
}

dailyBattle(30, 12) */

/*Function - parameters & arguments*/


/*Function - output*/

/* function sum(n1, n2){
    console.log("This text will not be visible!")
    return n1 + n2;
} */

/* function greeting(person){
    return "Hi " + person + ", Welcome back!";
} */

/*Function - output*/

/*Build calculator multiply */
/* var firstNumber = prompt("Type the first number?")
var secondNumber = prompt("Type the second number?")

function multiply(n1, n2){
    return n1 * n2;
}

alert(multiply(firstNumber, secondNumber)) */
/*Build calculator multiply */

/*practice arrays*/

/* var username = prompt("Type your name")

var friends = ["jim", "luna", "tom", "johan"]

if(friends.includes(username)){
    console.log("You can view the content.")
}
else{
    console.log("You don't have access!")
} */

/*practice arrays*/

/* var friends = ["jim", "luna", "tom", "johan"]

friends[3] = "jesus"

friends.push("niki")

console.log(friends) */

//remainder op %.

/* var friends = ["jim", "luna", "tom", "johan"]

friends.push("niki")

console.log(friends) // + - * / */

/*Practice pomodoro*/
/* var breakTime = []
    breakTime.push(5)
    breakTime.push(15)

function pomodoro(time){
    if(time < 5){
        breakTime = 'add 5 minutes'
    }
    else if(time < 15){
        breakTime = 'add 15 minutes'
    }
    else{
        breakTime = 'break time exceeded'
    }
    return breakTime;
}

console.log(pomodoro(14)); */


var breakTime = []
var round = 1;

function addBreakTime(){
    if(round % 4 == 0){
        breakTime.push(15);
    }
    else{
        breakTime.push(5);
    }
    round++;
    console.log(breakTime)
}

/*Practice pomodoro*/

/*TEST commit*/
