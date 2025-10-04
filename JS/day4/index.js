// operator

const { log } = require("console");
const { loadavg } = require("os");

//Arithmetic


// console.log(2+5);
// console.log(2-5);
// console.log(2*5);
// console.log(6/2);
// remainder
// console.log(5%2);

// console.log(5**3);//5*5*5

// Assignment
// let x=20;
// let y=10;
// // x=x+y;
// x+=y
// console.log(x);


//Comparision
// let x="10";
// let y="20";
// console.log(x>y);
// console.log(x>=y);
// console.log(x<y);
// console.log(x<=y);

// console.log(x==y);//check only value is equal// number and string compare string convert into number
// console.log(x===y);// Strictt check must type same  asn check value

// let z="10";
// let a=Number(z);
// console.log(typeof(a));
// console.log((a));


// let a=true;
// console.log(Number(a));1
// let b=false;
// console.log(Number(b));0

// console.log(Number(null));0
// console.log(Number(undefined));NAN


// let a="121ac";//Not a Number 
// let b=Number(a);
// console.log(b);
// console.log(0/0);NAN 
// Nan type is number
// console.log(typeof(b));

// let a=10;
// let b=String(a);
// console.log(b);
// console.log(typeof(b));

// console.log(typeof(String(true)));
// console.log((String(false)));
// console.log(typeof(String(null)));
// console.log(typeof(String(undefined)));


// console.log(Boolean(10));//true
// console.log(Boolean(0));//false
// console.log(Boolean("hello"));//true
// console.log(Boolean());//FALSE


//Computer Science ka sabse bada chalellenge
// let a=0.1;
// let b=0.2;
// let c=a+b;//  0.30000000000000004
// console.log(0.4+0.5);//0.9
// let a=String(0.1);
// let b=String(0.2);
// console.log(a+b);//0.10.2


    
// console.log(c);
// console.log(c==0.3);


// 1. NULL is loosely equal to undefined only
// console.log(null==undefined);//true
// console.log(null===undefined);//false
// console.log(null==0);//false
// console.log(null=="");//false
// console.log(null==true);//false
// console.log(null==false);//false

// >, <,<=,>=(null-> number, undefined->NAN)
// console.log(null>=0);//true
// console.log(null<=0);//true
// console.log(null>0);//false
// console.log(null<0);//false
// console.log(null>=undefined);//false
// console.log(undefined>=0);//false

//string convert leter to ascii value(A==65, a==97)
// console.log("Ankur"<"Mohit");true
// console.log("Ankur">"Mohit");false

// console.log(10>"10");false
// console.log(10>true);//true
//ek koi bhi type ko compare karna h kisi or type se do dono numnber me convert honge
// console.log(null>="");//true
// console.log(NaN==NaN);//false

// logical operator
//Logical And operator
// console.log(true&&true);//true
// console.log(false&&true);//false
// console.log(true&&false);//false
// console.log(false&&false);//false

//Logical OR operator
// console.log(true||true);//true
// console.log(false||true);//true
// console.log(true||false);//true
// console.log(false||false);//false


// let a=""//""
// let b="Ankur";
// // let b="Mohit";
// let c=a&&b;
// console.log(c);//Mohit

// let a=0;//false
// let b=20;//true
// console.log(a&&b);//0
// && if first value is false, it will return the first value
// && if first value is true,  it will return the second value


//or ||
// let a=10;
// let b=20;
// console.log(a||b);
// || if first value is true, it will return the first value
// || if first value is false,  it will return the second value

// not equal to!=
// console.log(4!=5);true
// console.log(5!=5);//false

//And &, | or
// console.log(2&3);2



















