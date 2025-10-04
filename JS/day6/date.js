// const now=new Date();
// console.log(now);//2025-10-04T17:04:47.544Z
// console.log(now.toString());// Sat Oct 04 2025 22:36:54 GMT+0530 (India Standard Time)
// console.log(now.toISOString());//2025-10-04T17:11:33.745Z
// console.log(now.toLocaleString());//10/4/2025, 10:42:08 PM
// console.log(now.getDay());//6=saturday
// console.log(now.getDate());//4 
// console.log(now.getMonth());//9->october,0->january......
// console.log(now.getFullYear());//2025
// console.log(now.getHours());//22
// console.log(now.getMinutes());//44
// console.log(now.getSeconds());//17
// console.log(now.getMilliseconds());//865


//days:(Mon-tue) 1 based 
//month:0 based

//year month date hour minute second milisecond
// const now=new Date(2025,9,4,10,48,44,17);
// console.log(now.toString());//Sat Oct 04 2025 10:48:44 GMT+0530 (India Standard Time)

const now=Date.now();
// const dates=new Date(1759598659476)
const dates=new Date(now)
console.log(dates.toString());//Sat Oct 04 2025 22:54:19 GMT+0530 (India Standard Time)
const dates1=new Date(0)
console.log(dates1.toString());//Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
// console.log(now);//1759598659476//in ms:TimeStamp













