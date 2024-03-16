let array = [1,2,3,4]

let product =[]

for (let i = 0; i < array.length; i++) {
 product += array[i+1]
}

console.log(product)