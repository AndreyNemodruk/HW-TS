// 1 start //
interface User {
  [key: string | number]: string | boolean;
}

const user: User = {
  0: false,
  1: true,
  id: "0",
  name: "Viktor",
  isAdmin: true,
};
// 1 end //

// 2 start //
interface Configuration {
  [key: string]: <K>(data: K) => K;
}
// 2 end //

// 3 start //
interface PseudoArray<K> {
  [key: number]: K;
}

const myArr: PseudoArray<string> = {
  0: "apple",
  1: "orange",
};

const myArr2: PseudoArray<User> = {
  0: user,
  1: { name: "Alex" },
};
// 3 end //

// 4 start //
interface Fruits {
  name: string;
  [key: string]: string;
}

const orange: Fruits = {
  name: "orange",
  colore: "orange",
};
// 4 end //

// 5 start //
interface Animal {
  [key: string]: string | number;
}

interface Cat extends Animal {
  name: "cat";
  say: "meow";
  numberOfPaws: 4;
}

const cat: Cat = {
  name: "cat",
  say: "meow",
  numberOfPaws: 4,
};
// 5 end //

// 6 start //
interface Numbers {
  [key: number]: number | string;
}

const validObj: Numbers = {
  0: 20,
  1: 30,
  2: 40,
  3: 50,
};

const invalidObj: Numbers = {
  0: 20,
  1: 30,
  2: "40",
  3: 50,
};

function checklIsValidObj(data: Numbers): boolean {
  let isValid = true;

  for (let i in data) {
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
