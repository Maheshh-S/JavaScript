// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);// we know true or false


// console.log("2" > 1);
// console.log("02" > 1);//auto convert "02" to num so True

console.log(null > 0);//F
console.log(null == 0);//F
console.log(null >= 0);//T

console.log(undefined == 0);
console.log(undefined > 0);//null convert to 0
console.log(undefined < 0);
//^^^^ try not to use [not a clean  code]

// === strict check the datatype and not allowed to convert

console.log("2" === 2);