let array = [0,1,2,2,3,0,4,2];

let value = 2

let count = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] !== value) {
        array[count] = array[i]
        count++
    }
    
}

console.log(count)
