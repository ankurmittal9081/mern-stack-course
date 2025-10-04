//Number
// let a=10;
// let b=345.14467584;
// console.log(a);
// console.log(typeof b.toFixed(2));//After decimal  only give two value
// console.log(b);

const { log } = require("console");


// console.log(b.toPrecision(3));
// console.log(b.toString());number to string


// let a=new Number(20);
// let b=new Number(20);
// console.log(a==b);//false--> bcz it is a object 
// let b=a;
// console.log(a==b);//true

// console.log(a);///type is object
// console.log(b);

// let obj1={
//     name: "Ankur"
// }
// let obj2=obj1
// console.log(obj1==obj2);//true

// let obj2={
//     name: "Ankur"
// }
// console.log(obj1==obj2);//false
// console.log(obj1);
// console.log(Boolean(new Number(0)));//true

//Non primitive :Reference base pe compare
//primitive copy by value

// let a=10;
// let b=a;

// console.log(a==b);//true

//Math
// console.log(Math.abs(-4));
// console.log(Math.PI.toPrecision(3));
// console.log(Math.LN2.toFixed(3));
// console.log(Math.SQRT2.toFixed(3));
// console.log(Math.ceil(6.3));
// console.log(Math.floor(6.3));
// console.log(Math.log10(20));
// console.log(Math.max(20,40,12,314));
// console.log(Math.min(20,40,12,314));
// imp
// console.log(Math.random());//random value generate [0(incluxive)-1(exlcuxive)]

//satte bhajhi ka game banana h:(0-9)

// formula -->>>>> Math.floor(Math.random()*total No. of outcomes)+shift

// console.log(Math.floor(Math.random()*10)+1);
// console.log(Math.floor(Math.random()*6)+1);
// console.log(Math.floor(Math.random()*11)+15);

// Math.floor(Math.random()*(max-min+1))+min

//OTP Generate:4 Digit:1000-9999

console.log(Math.floor(Math.random()*(9999-1000)+1000));





