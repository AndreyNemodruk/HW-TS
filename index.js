"use strict";
const user = {
    0: false,
    1: true,
    id: "0",
    name: "Viktor",
    isAdmin: true,
};
const myArr = {
    0: "apple",
    1: "orange",
};
const myArr2 = {
    0: user,
    1: { name: "Alex" },
};
const orange = {
    name: "orange",
    colore: "orange",
};
const cat = {
    name: "cat",
    say: "meow",
    numberOfPaws: 4,
};
const validObj = {
    0: 20,
    1: 30,
    2: 40,
    3: 50,
};
const invalidObj = {
    0: 20,
    1: 30,
    2: "40",
    3: 50,
};
function checklIsValidObj(data) {
    let isValid = true;
    for (let i in data) {
        console.log(data[i]);
        if (typeof data[i] !== "number") {
            isValid = false;
            break;
        }
    }
    return isValid;
}
console.log(checklIsValidObj(validObj));
console.log(checklIsValidObj(invalidObj));
// 6 end //
