"use strict";

let r = Math.floor(Math.random()*10);
if (4 == r) {
    console.log("OK!");
} else {
    console.log("ERRROR");
}
console.log(r);

const num = 50;
if (num < 49) {
    console.log('ERRRRRKA');
} else if (num > 100) {
    console.log("mnogo");
} else {
    console.log("OK!");
}

(num === 50) ? console.log("OK!") : console.log('ERRRRRKA');

const numx = 50;
switch (numx) {
    case 49:
        console.log("erka");
        break;
    case 100:
        console.log('ERKA');
        break;
    case 50:
        console.log("GOOD");
        break;
    default:
        console.log("ne v etot raz");
        break;
}

const num1 = 50;
while (num < 55) {
    console.log(num);
    num++
    
}
