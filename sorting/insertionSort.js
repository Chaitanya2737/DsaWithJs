let insertionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
     let j= i;
     while ( array[j] < array[j-1] ) {
        let temp = array[j]
        array[j]=array[j-1]
        array[j-1] = temp;
        j--
     }   
    }
    return array
}

let main = () => {
    let array=  [5,4,2,6,1]
    let result =  insertionSort(array)
    console.log(result)
}
main()