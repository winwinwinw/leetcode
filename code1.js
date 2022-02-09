//两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for(let i=0;i<=nums.length;i++){
//         for(let j=i+1;j<=nums.length-1;j++){
//             if((nums[i]+nums[j])===target){
//                 if(i!==j){
//                     return[i,j]
//                 }
//             }
//         }
//     }
//
// };
var twoSum = function(nums, target) {
    let obj = {} //保存索引值
    for(let i = 0;i<nums.length; i++){
        let num =nums[i]
        let n = target - num
        if( num in obj ){
            return [i,obj[num]]
        }else {
            obj[n]= i
        }
    }
};

