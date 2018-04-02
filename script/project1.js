console.log("Level 0");

var numberA = 10;
let numberB = 099;
const numberC = 0.02;
console.log(numberA);
console.log(numberB);
console.log(numberC);

console.log("-----------------");

console.log("Level 1");
var a = 10;
var b = 9;
console.log("var a ="+" "+a);
console.log("var b ="+" "+b);
var tambah = a+b;
var kali = a*b;
var kurang = a-b;
var bagi = a/b;
var modulus = a%b;
console.log("result a + b ="+" "+tambah);
console.log("result a * b ="+" "+kali);
console.log("result a - b ="+" "+kurang);
console.log("result a / b ="+" "+bagi);
console.log("result a % b ="+" "+modulus);

console.log("-----------------");

console.log("Level 2");

var number = 1234567891;
var minus = -1234567891;
var pecahan = 123.456;
var add = number + pecahan;
console.log(add);
console.log("-----------------");

console.log("Level 3");
var cars = ["Avanza","BMW","Xenia"];
console.log(cars);
var results = ["dedek",25,"handsome",true,false,1==1];
console.log(results);
console.log("-----------------");

console.log("Level 5");
var  name ="dedek";
var  name1 ="juli";
const setenceC = name + " " + name1;
console.log(setenceC);

const setenceD = `${name} ${name1}`;
console.log(setenceD);
console.log("-----------------");

console.log("Level 6");
console.log(setenceD);
console.log(setenceD.toUpperCase());
console.log(setenceD.toLowerCase());
console.log("-----------------");

console.log("Level 7");
var array=setenceD.split(" ");
var Up = array[0].charAt(0).toUpperCase()+array[0].slice(1);
var Up1 = array[1].charAt(0).toUpperCase()+array[1].slice(1);
console.log(Up);
console.log(Up1);
console.log("-----------------");

console.log("Level 8");
let noLow = 20;
let noBig = 25;
console.log("number a = "+noLow);
console.log("number b = "+noBig);
if (noLow < noBig) {
  console.log("number a is smaller");
}
if (noBig > noLow) {
  console.log("number b is bigger");
} else if(noLow==noBig) {
  console.log("fales");
}
