

let partition = (array) => {
  array.sort((a,b) => a-b)
  let total =0
  for (let i = 0; i < array.length; i+=2) {
    total+= array[i]
  }
  return total
}


let main = () => {
  let array =  [1,4,3,2]
  let result = partition(array)
  console.log(result)
}

main()


