let arr =  [1,8,6,2,5,4,8,3,7];


let left = 0;
let right = arr.length - 1;
let maxValue= 0

while (left < right) {
   let value = Math.min(arr[left] ,  arr[right])* (right - left)

   maxValue =  Math.max(value ,  maxValue)


   if(arr[left] < arr[right]){
    left++
   }
   else{
    right--
   }
}
console.log(maxValue)
