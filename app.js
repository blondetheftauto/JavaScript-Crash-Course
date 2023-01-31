let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit);

let subscribed = false;
let loggedIn = true;

if (subscribed === true) {
  console.log("show the video");
} else if (loggedIn === true) {
  console.log("tell user to become pro");
} else {
  console.log("tell user to log into account");
}

let cash = 50;
let price = 40;

// let change = cash - price

// if (cash > price) {
//     console.log(`you paid extra, here's ${change} dollars change.`)
// }
// else if (cash === price) {
//     console.log ("you paid the exact amount. have a nice day!")
// }
// else {
//     console.log (`Not enough money. You still owe ${price - cash} dollars.`)
// }

let isStoreOpen = true;

// if (cash >= price && !isStoreOpen) {
//     console.log ('Store is open and we have enough cash to buy product.')
// }

let str = cash >= price && isStoreOpen ? "give receipt" : "do not give receipt";
console.log(str);

// for (let i = 0; i < 3; i++) {
//     console.log(i)
// }

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} -> Frontend Simplified`);
  } else if (i % 3 === 0) {
    console.log(`${i} -> FrontEnd`);
  } else if (i % 5 === 0) {
    console.log(`${i} -> Simplified`);
  } else {
    console.log(`${i} -> ${i}`);
  }
}

const fes = "FrontEnd Simplified";

for (i = 0; i < fes.length; i++) {
  console.log(fes[i]);
}

// FUNCTIONS

//function definition
function welcomePersonToFES(firstName, lastName) {
  console.log(`Welcome to FES, ${firstName} ${lastName}!`);
}

//call the function
welcomePersonToFES("David", "Bragg");
welcomePersonToFES("Mitri", "Doe");
welcomePersonToFES("Taylor", "Brewster");

function sumOfTwoNumbers(firstNum, secondNum) {
  return firstNum + secondNum;
  console.log("this wont run due to return");
}

console.log(sumOfTwoNumbers(10, 10));

//Example

function convertCelsiusToFahrenheit(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}

console.log(convertCelsiusToFahrenheit(0));
console.log(convertCelsiusToFahrenheit(10));
console.log(convertCelsiusToFahrenheit(30));

//Arrays

let arr = [20, 30, 40, 50, 100];

//first element of array:
console.log(arr[0]);

//last element of array:
console.log(arr[arr.length - 1]);

//add element to array
arr.push(200);

let newArr = arr.filter((element) => {
  console.log(element);
  if (element < 50) {
    return true;
  }
});

console.log(newArr);

//newArr is same as newArr2

let newArr2 = arr.filter((element) => element < 50);

console.log(newArr2);

//examples

let grades = ["A+", "A", "FAIL"];

//WITH ARRAY FILTER

// grades.push('FAIL', 'FAIL', 'B')
// grades.push('FAIL')

// let noFails = grades.filter (element => element !== 'FAIL')
// console.log(noFails)

//WITHOUT ARRAY FILTER

let goodGrades = [];

for (let i = 0; i < grades.length; i++) {
  if (grades[i] !== "FAIL") {
    goodGrades.push(grades[i]);
  }
}
console.log(goodGrades);

//MAP function

let arrmap = [1, 4, 9, 16];

let newArrMap = arrmap.map((element) => {
  console.log(element);
  return undefined;
});

console.log(newArrMap);

//example

let dollars = [1, 5, 10, 3];

// let cents = dollars.map((element) => element * 100)

// console.log(cents)

let cents = [];

for (let ix = 0; ix < dollars.length; ix++) {
  cents.push(dollars[ix] * 100);
}

console.log(cents);

//Objects

let users = [
  {
    username: "David",
    email: "david@frontend.com",
    password: "test123",
    subStatus: "VIP",
  },
  {
    username: "Mitri",
    email: "mitri@frontend.com",
    password: "mitri123",
    subStatus: "VIP",
  },
  {
    username: "Zen",
    email: "zen@frontend.com",
    password: "zen123",
    subStatus: "VIP",
  },
];

function login(email, password) {
  for (let io = 0; io < users.length; io++) {
    if (users[io].email === email) {
      console.log(users[io]);
      if (users[io].password === password) {
        console.log("log the user in --- details are correct");
      } else {
        console.log("password is incorrect --- try again");
      }
      return;
    }
  }
  console.log("could not find an email that matches");
}

login("exists@frontend.com", "wrong");

function register(user) {
    users.push(user)
}

register({
    username: "Exists", 
    email: "exists@frontend.com", 
    password: 'exists123', 
    subscriptionStatus: 'VIP', 
    discordId: 'exists#1000', 
    lessonsCompleted: [0, 1, 2],
});


console.log(users);


// DOM

//first way of accessing an element
console.log(document.querySelector('#title'));

//second way of accessing an element

console.log(document.getElementById('title'))

//changing HTML

document.querySelector('#title').innerHTML += ' Frontend Simplified'

//chaning CSS
document.querySelector('#title').style.color = 'blue'

//exercise

// function changeTitleToRed () {
//     document.querySelector('#title').style.color = 'red'
// }

function toggleDarkMode () {
    document.querySelector('body').classList.toggle('dark-theme');
}