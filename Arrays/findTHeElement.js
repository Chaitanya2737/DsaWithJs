let array = [1,3,5,6];

let value = 5;

for (let i = 0; i < array.length; i++) {
    if (array[i] >=value) {
        console.log(array.length)
        return i
    }
}