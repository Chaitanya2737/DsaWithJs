let str = "this is javascript"

let spilt= str.split(" ")


console.log(spilt.map((item) => item.charAt(0).toUpperCase()+ item.slice(1)).join(" "))