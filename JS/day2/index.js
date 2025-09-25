// How to declare a variable
//let keyword
// let name="Ankur";
// let age=21;

// if(true){
//     let c=90;
// }
// console.log(name,age);
// console.log(c);give error

//const keyword
// const account=1234;
// account=123; can't be redeclared
// console.log(account);

//var keyword(Old tarika)
// var a=10;
// a=20;
// // var a=30;it can be redaclared same variable again and again which is not good
// console.log(a);

// if(true){
//     var a=20;


// }
// console.log(a);scope ko respect nhi karta


// function fun(){
//     var a=30;

// }
// console.log(a);give error


//Data Types
//primitive data type

// number , string , boolean , undefined, bigint, null,symbol

// console.log("primitive Data Type->>>")

//Number

// let a=20;
// let b=.14;
// // console.log(a,b)
// console.log(typeof a);

// // String
// let info="Strike is Coming soon";
// let name='Ankur';
// // console.log(info,name);
// console.log(typeof name);

// //Boolean
// let login=true;
// let f=false;

// // console.log(login,f);
// console.log(typeof f);


// // Undefined
// let user;
// // const; const must be assigned the value
// // console.log(user);
// console.log(typeof user);


// // bigint

// let big=21341241484114;
// // console.log(big);
// console.log(typeof big);

// // null

// let weather=null;
// // console.log(weather);
// console.log(typeof weather);//bug when we call typeof null it gives object 


// // let weather=current_weather("Dwarka");
// //25
// //null
// //undefined

// // symbol
// const id1=Symbol("id");
// // const id2=Symbol("id");
// // console.log(id1==id2);
// // console.log(id1);
// console.log(typeof id1);


// //Non-primitive data type
// //Array,Object,function


// console.log("Non-primitive Data Type-->>>")
// //Array
// let array=[10,20,30,40,50,"Ankur",true];
// // console.log(array);
// console.log(typeof array);


// //Object
// let obj={
//     name:"Ankur",//key,value
//     account:12312,
//     age:18,
//     category:'gen'
// }
// console.log(obj);
// console.log(typeof obj);

// //Function
// let si=function add(){
//     console.log("Hello");
// }
// console.log(typeof si);


// add();
// console.log(si);
// si();

//premitive data is immutuble

let c=10;
let d=c;
d=20;
console.log(c,d);

// c=30;
// console.log(c);

// let str="ankur"
// str[0]='m';
// // str="mohan"
// console.log(str[0]);


// Non -primitive data type mutable
let arr=[1,2,3,4];
arr.push(5);
arr[0]=6;
console.log(arr);

let obj={
    name:"Ankur",
    age:20
}

let obj2=obj;

obj2.name="Rohan"
obj2.age=30;
console.log(obj2.name,obj2.age);

