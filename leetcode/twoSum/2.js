/**多行注释
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * @author jhd 作者
 * @date 2020-11-20
 */

 //键头函数
const twoSum = (nums,target) => {
    // console.log('两个数相加');
    let map = {};//JSON Object  HashMap
    let res = [];
    //编写功能 一个函数完成一个功能
    //es6更简洁
    //callback
    //forEach：实现for循环的同时 + 执行一个功能
    nums.forEach((e,i) => map[e] = i);//时间复杂度 o(n) 以空间换时间
    // console.log(map);
    for(let i=0; i < nums.length; i++){// o(n) 总的时间复杂度为o(2n),结果还是o(n)
        let j = map[target-nums[i]];
        if(j && j != i){//i,j为下标
            res = [i,j];
            break;
        }
    }
    return res;
}

console.log(twoSum([3,4,8,6],7));//调用函数
