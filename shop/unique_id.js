/**
 * 获得唯一ID
 * @return {string}
 * 
 * @author jhd
 * @date 2020-11-21
 */
//方法1
// const uniqueID = () =>{
//     let t = +new Date();//在new前的“+”实现类型转换
//     let ranNum = Math.ceil(Math.random())*10000;
//     return t + "" + ranNum;
// }

//方法2
const uniqueID = () => +new Date() + "" + Math.ceil(Math.random()*10000)

console.log(uniqueID());