
let candies = (array) => {
  return new Set(array)
}

let main = () => {
    let array = [1,1,2,2,3,3];
    let result = candies(array)
    console.table(result)
}

main()