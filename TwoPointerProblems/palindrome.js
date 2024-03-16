

function main(){
    let array= [1,2,2,1];
    let result =  palindrome(array)
    console.log(result)
}


function palindrome(array){
    let left = 0;
    let right = array.length-1;
    while (left <right) {
        if (array[left] !==array[right]) {
            return false
        }
        left++
        right--
    }
    return true , array
}

main()