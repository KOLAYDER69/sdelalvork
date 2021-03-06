const box = document.getElementById('box');
      btns = document.getElementsByTagName('button');
      circles = document.getElementsByClassName("circle");
      hearts = document.querySelectorAll('.heart');
      oneHeart = document.querySelector('.heart');
      wrapper = document.querySelector('.wrapper');

console.dir(box);

box.style.backgroundColor = 'blue';
box.style.width = '500px';
hearts.forEach(item => {
    console.log(item);
})

box.style.cssText = `width: 500px; background-color: blue`;

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
const text = document.createTextNode('tut ya bil s');
div.classList.add('black');

wrapper.append(div);

div.innerHTML = "<h1>Hello World</h1>";

div.insertAdjacentHTML('beforebegin', '<h2> Hey world</h2>')

// hearts[1].append(div);

// btns[3].append(div);

// console.log();

// const question = prompt("", "");
// const arr = question.split(", ")
// console.log(arr);

// const arr = [2, 4, 5, 6]
// arr.sort(compareNum);
// function compareNum(a, b) {
//     return a - b;
// }
// compareNum();

// const obj = {
//     a: 4,
//     f: 23,
//     l: 43
// }
// function copyObject(mainObj) {
    
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4,
//     }
// };

// const add = {
//     d: 445,
//     RW: 94,
// }

// // const newObject = copy(numbers);
// // console.log(numbers);

// console.log(Object.assign({}), add);

// const oldArray = ['a', 'b', 'c', '4'];
// const newArray = oldArray.slice();
// console.log(newArray);
// console.log(oldArray);

// newArray.push("W");
// console.log(newArray, "\n" , `Длина массива ${newArray.length} символа`);

// newArray.forEach(function(item, index, array){
//     console.log(`Текущий айтем " ${item} " находится в индексе ${index} массива ${array}`);
// })

// let num = Math.floor(Math.random()*10)


// function inc(object) {
//     if (object.includes(`${num}`)) {
//         console.log("object include Math.random");
//     } else {
//         console.log("object WRONG");
//     }
// }
// inc(newArray);
// console.log(num);
// // console.log(newArray.includes("gf"));

// console.log(newArray.includes(`${num}`));

// function sum(x, y, z) {
//     return x + y + z;
//   }
  
//   const numbers = [1, 2, 3];
  
//   console.log(sum(...numbers));
//   // expected output: 6

// const numbers1 = [1, 2, 3];
// let new2 = [...numbers1, 8];
// console.log(new2);
// new2.push(9, "boby");
// console.log(new2);



// /////////////////////////////
// /////////////////////////////
// /////////////////////////////
// /////////////////////////////
// /////////////////////////////


// function first() {
//     setTimeout(function () {
//         console.log(1);

//     }, 500)
// }
// // first();

// function second() {
//     console.log(2);
// }


// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// let r = Math.floor(Math.random() * 100);
// let s = Math.floor(Math.random() * 100);

// function math(a, b) {
//     return a + b;
// }
// console.log(math(r, s));

// function reverseString(str) {

//     return str.split("").reverse().join("");

// }

// reverseString("hello"); // olleh


// //   const obj = new Object();


// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: 'red',
//     },
//     admin: true,
//     makeTest: function () {
//         console.log("kakoy text budet otvechat za test");
//     }
// }
// options.makeTest();
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`)
//     }
// }

// for (let i in options) {
//     console.log(options);
// }


// console.log(Object.keys(options).length);
// for (let i in options) {
//     console.log(options[i]);
// }



// let values = Object.values(options);
// console.log(values);
// let lrs = Object.entries(options);
// console.log(lrs);
// var keyCount = Object.keys(coordinates).length

// options.admin = true;

// console.log(options.admin);

// let arr = ["arka", "durka", "murka"]
// console.log(arr[1]);

// arr.push("3");
// arr.pop
// console.log(arr);

// console.log(arr.length);


// let text = "kakoy to tekts";
// console.log(text.split(",3"));

// const num = Math.floor(Math.random()*10);
// let r =Math.floor(Math.random()*10);
// const arr = [2, 4, 5, 7, 10, 14];
// arr.push(num, r);
// console.log(arr);
// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} eto vnutri massiva ${arr}`);
// })


// arr.push[99];
// console.log(arr.length);