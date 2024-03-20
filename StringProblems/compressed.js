let s = "aabccccc"
let compressedString =""
let count = 0

for (let i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) {
        count++;
    } else {
        compressedString += s[i - 1] + count;
       count = 1;
    }
}

console.log(compressedString)
