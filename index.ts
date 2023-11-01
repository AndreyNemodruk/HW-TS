// 1 start
type DeepReadonly<T> = {
  readonly [K in keyof T]: DeepReadonly<T[K]>;
};
// 1 end

// 2 start
type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: DeepRequireReadonly<T[K]>;
};
// 2 end

// 3 start
type UpperCaseKeys<T> = {
  [K in keyof T as Uppercase<string & K>]: T[K];
};
// 3 end

//4 start
enum EUser {
  name = "name",
  role = "role",
}

type User = {
  [K in keyof typeof EUser as `get-${K}`]: () => void;
};
// 4 end

// 5 start
type ObjectToPropertyDescriptor<T extends Object> = {
  [K in keyof T]: PropertyDescriptor;
};

const obj = {
  name: "Alina",
  age: 25,
};

const convertObject: ObjectToPropertyDescriptor<typeof obj> =
  Object.getOwnPropertyDescriptors(obj);

console.log(convertObject);
// 5 end

// 6 start
function f(param: number[]): void {}
function f2(param: string[]): void {}
function f3(param: number): void {}
function f4(param: string): void {}

type ExtractTypeFromArray<T> = T extends (infer K)[] ? K : never;

type ParamType<T> = T extends (param: infer P) => void
  ? P extends Array<any>
    ? ExtractTypeFromArray<P>
    : P
  : undefined;

let a: ParamType<typeof f>;
let b: ParamType<typeof f2>;
let c: ParamType<typeof f3>;
let d: ParamType<typeof f4>;
// 6 end
