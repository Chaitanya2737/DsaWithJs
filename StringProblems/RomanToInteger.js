
 let str= "IVMC"
let romanNum={
    "I" : 1,
    "V" : 5,
    "X": 10 ,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M"  : 1000,
 }
 
 let total = 0;

 for (let i = 0; i < str.length; i++) {
    // console.log(str[i])
  total += romanNum[str[i]]
 }
console.log(total)


