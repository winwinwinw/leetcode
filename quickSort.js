let arr = [2,35,1,32,12,312,15,2,312,3,125,123,12,1,61353];

function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let flag = arr.pop()
    let left = []
    let right = []
    for(let i=0;i<arr.length;i++){
        if(arr[i]<flag){
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
        return quickSort(left).concat(flag,quickSort(right))
}

function quickFn(arr,start,end){

}
function quickSort1(arr,start,end){
    if(arr.length>2){
        let index =quickFn(arr,0,arr.length-1)
        quickSort()
    }
}
console.log(quickSort(arr));
