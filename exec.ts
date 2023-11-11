export function execTime<T, A extends any[], R>(
  originalMethod: (...args: A) => R,
  context: ClassMethodDecoratorContext<T, (...args: A) => R>
) {
  return function (this: T, ...args: A) {
    if (context.kind !== "method") throw new Error("Available only for method");
    const start = performance.now();
    const result = originalMethod.apply(this, args);
    const end = performance.now();
    console.log(`execution time with args [${args}], ${end - start}ms`);
    return result;
  };
}
