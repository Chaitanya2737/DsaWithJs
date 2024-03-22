let array = [5,2,7,3];
for (let i = 0; i < array.length; i++) {
    let flag=  false
    for (let j = 0; j < array.length-i; j++) {
        if(array[j] > array[j+1]){
            let temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
            flag= true
        }
    }
    if (!flag) {
        break
    }
}
for (let i = 0; i < array.length; i++) {
    console.log( array[i])    
}