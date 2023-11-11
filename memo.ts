import { execTime } from "./exec";

function memo<T, A extends any[], R extends number>(
  originalMethod: (...args: A) => R,
  context: ClassMethodDecoratorContext<T, (...args: A) => R>
) {
  if (context.kind !== "method") throw new Error("Available only for method");
  const cache = new Map<string, any>();
  let cachedResult = 0;

  function replacementMethod(...args: A) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = originalMethod(...args);
    cachedResult = result;
    cache.set(key, result);
    return result;
  }

  return replacementMethod;
}

class Сalculations {
  @execTime
  @memo
  complicatedCalculation(a: number, b: number): number {
    for (let x = 0; x++ < 2000000000; ) {}
    return a + b;
  }
}

const calc = new Сalculations();

console.log(calc.complicatedCalculation(2, 4));
console.log(calc.complicatedCalculation(1, 4));
console.log(calc.complicatedCalculation(2, 4));
console.log(calc.complicatedCalculation(2, 4));
console.log(calc.complicatedCalculation(2, 4));
console.log(calc.complicatedCalculation(1, 4));
