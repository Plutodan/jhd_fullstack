const numbers = [9,21,11,8,28,12,5,3,6];
const arr = [];
// const largenumber = numbers.forEach((e,i) => {
//     if (e > 6) {
//         arr.push(e);
//     }
// })
// console.log(arr);

//filter内置函数
const cb = numbers =>{
    return numbers > 6;
} 
// const cb = numbers => numbers > 6;
const largenumber = numbers.filter(cb);

console.log(largenumber);