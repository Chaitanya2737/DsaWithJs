let selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIdx = i;
    for (let j = i; j < array.length; j++){
        if (array[j]< array[minIdx]) {
            minIdx =j
        }
    }
    let temp =  array[i]
    array[i] = array[minIdx]
    array[minIdx] =temp
  }
  return  array
}
let main = () => {
    let array = [5,8,2,7,8]
    let result = selectionSort(array)
    console.log(result)
}

main()