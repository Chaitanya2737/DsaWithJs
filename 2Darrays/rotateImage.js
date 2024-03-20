

 function rotateImg(array , index){
    let arr = []
 for (let i = 0; i < 3; i++) {
 arr.unshift(array[i][index])
 }
return arr
 } 
function main() {
    let array = [
        [4, 9, 2],
        [3, 5, 7],
        [8, 1, 6]
    ]

    for (let i = 0; i < array.length; i++) {
        
        let result = rotateImg(array , i);
        console.log(result)
    }
   
} 
main()