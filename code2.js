// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
/**
 *输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] 输出：[8,9,9,9,0,0,0,1]
 *
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 输出：[7,0,8]
 解释：342 + 465 = 807.
 */
let addTwoNumbers=function (l1,l2){
    let num=Math.abs(l1.length-l2.length);
    let arr=[];//TODO: 数组arr用来保存 l1和 l2数组每一项的加和 的个位数的值
    let n=0;
    if(l1.length>l2.length){//TODO: 用来判断两个数组 l1 和 l2 长度是否相等, 短的用0补齐 ,
        for (let i=0;i<num;i++){
            l2.push(0);//补0,使两个数组长度相等
        }
    }else if(l1.length<l2.length){
        for (let i=0;i<num;i++){
            l1.push(0);//补0,使两个数组长度相等
        }
    }
    //TODO:-------------------------------------
    l1.forEach((val,index)=>{
        arr.push((val+l2[index]+n)%10)  //TODO: 求 l1 + l2 + n 的和 的个位数, 和大于10的话将十位传给下一项
        n=parseInt((val+l2[index]+n)/10) //大于10 n为10,小于10,n为0
        // 判断是否为最后一项,并且最后一项的值大于10
        if(index===l1.length-1&&n===1)arr.push(1);
    })
// for (let index=0;index<l1.length;index++){
//     arr.push((l1[index]+l2[index]+n)&10);
//     n=parseInt((l1[index]+l2[index]+n)/10);
// }
    //TODO:--------------------------------------
    arr.reverse();
    if (arr[0]===0){
        arr.splice(0,1)
    }
    // return Number(arr.join(''));
    console.log(Number(arr.join('')));//TODO:结果应为数字   2161963
};
// addTwoNumbers([1,3,4,5,5,1,2,0],[2,3,5,6])
addTwoNumbers([1],[9])