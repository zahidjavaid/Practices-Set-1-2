
// 4 > 2
let numb1 = 4;
console.log(numb1 > 2);


let numb2 = 2;
console.log(numb2 > 4);

let numb3 = 59;
console.log(numb3 === 9);

let numb4 = 59;
console.log(numb4 !==9); 

let numb5 = 5;
console.log(numb5 >=6);


let numb6 = 5;
console.log(numb6 <=6);

let numb7 = 5;
console.log(numb7 <=5); 

let numb8 = 5;
console.log(numb8 <5);

let numb9 = 4;
let numb10 = 59;
console.log(numb9 > 4 && numb10 === 9);

let numb11 = 79;
let numb12 = 80;
console.log(numb11<80 && numb12>79);

let numb13 = 7;
let numb14 = 9;
console.log(numb13!==8 && numb14!==4);

let numb15 = 99;
console.log(numb15<9);

let numb16 = 99;
let numb17 = 1000;
console.log(numb16<9 || numb17>100);
console.log(numb16<9 && numb17>100);

let numb18 = 2;
console.log(!(numb18 === 2));

let numb19 = 80;
console.log(!(numb19>2));
// !(99 < 9) && 1000 > 100
console.log(!(numb16<9) && numb17>100); 

// 48 > 8 && 34 < 90 && 49 > 50
console.log(48>8 && 34<90 && 49>50);

// (48 > 8 && 34 < 90 ) || 49 > 50
console.log((48>8&&34<90)||49>50);

// !(48 > 8 && 34 < 90) || 49 > 50
console.log(!(48 > 8 && 34 < 90) || 49 > 50);