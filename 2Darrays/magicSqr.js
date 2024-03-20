let array = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6]
]

let countofRow = (array, rowNum) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[rowNum][i]
    }
    return sum
}


let countofCol = (array, colNum) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[colNum][i]
    }
    return sum
}

let diagonals = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i][i]
    }
    return sum
}

let diagonal2 = (array) => {
    let j = array.length - 1;
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i][j]
        j--
    }
    return sum
}


let magicSqr = (array) => {
    let baselineRow =  countofRow(array , 0);
    let baselineCol =  countofCol(array , 0)
    for (let i = 0; i < 3; i++) {
        let rowSum =  countofRow(array , i)
        let colSum =  countofCol(array , i)
        if (baselineRow !== rowSum && baselineCol !== colSum) {
            return false
        }
    }
    let dig1 = diagonals(array)
    let dig2 = diagonal2(array)

    if (dig1 !== baselineRow || dig2 !== baselineCol) {
        return false
    }
    return true
}


let main = () => {
  let result =  magicSqr(array);
  console.log(result)
}

main()