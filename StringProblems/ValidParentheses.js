let str = "{}()[]";
let obj = {
    "{": "}",
    "(": ")",
    "[": "]",
};

let stack = [];

for (let i = 0; i < str.length; i++) {
    if (str[i] in obj) {
        stack.push(obj[str[i]]);
    } else {
        if (stack.length === 0 || stack.pop() !== str[i]) {
            console.log(false);
            return;
        }
    }
}

console.log(stack.length === 0);
