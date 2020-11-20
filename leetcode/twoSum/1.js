// console.log('leetcode,必考之twoSum')
//手写代码 
/**多行注释
 * @param {number[]} nums 一个数组名为nums的数组，每一个数组元素的类型是number
 * @param {number} target
 * @return {number[]}
 * 
 * @author jhd 作者
 * @date 2020-11-20
 */
const twoSum = function(nums,target){
    //1.双重循环
    let arr = [];
    for(let i=0; i < nums.length; i++){
        for(let j=0;j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                arr = [j,i] ;//内层循环的数先找到
            }
        }
    }
    return arr;
}

console.log(twoSum([3,4,8,6],7))