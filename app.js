let celsius = 10;
let fahrenheit = celsius * 1.8 + 32

console.log(fahrenheit);

let subscribed = false
let loggedIn = true

if (subscribed === true) {
    console.log ('show the video')
}
else if (loggedIn === true) {
    console.log ('tell user to become pro')
}
else {
    console.log('tell user to log into account')
}

let cash = 50
let price = 40

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

let isStoreOpen = true

// if (cash >= price && !isStoreOpen) {
//     console.log ('Store is open and we have enough cash to buy product.')
// }

let str = cash >= price && isStoreOpen ? 'give receipt' : 'do not give receipt'
console.log(str)

// for (let i = 0; i < 3; i++) {
//     console.log(i)
// }

for (let i = 1; i <= 20; i++) {
    
    if (i % 3 === 0 && i % 5 ===0) {
        console.log(`${i} -> Frontend Simplified`)
    }
    else if (i % 3 === 0) {
        console.log(`${i} -> FrontEnd`)
    }
    else if (i % 5 === 0) {
        console.log(`${i} -> Simplified`)
    }
    else {
        console.log(`${i} -> ${i}`)
    }
}


const fes = "FrontEnd Simplified";

for (i = 0; i < fes.length; i++) {
    console.log(fes[i])
}