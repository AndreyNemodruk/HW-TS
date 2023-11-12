function Debounce(time: number) {
  return function <T, A extends any[]>(
    originalMethod: (...args: A) => void,
    context: ClassMethodDecoratorContext<T, (...args: A) => void>
  ) {
    if (context.kind !== "method") throw new Error("Available only for method");
    let timeout: number;
    return function (this: T, ...args: A) {
      clearTimeout(timeout);
      timeout = setTimeout(() => originalMethod.apply(this, args), time);
    };
  };
}

class Api {
  @Debounce(50)
  request() {
    console.log("request send");
  }
}

const api = new Api();

api.request();

setTimeout(() => {
  api.request();
}, 100);

api.request();
api.request();

setTimeout(() => {
  api.request();
}, 200);

api.request();
api.request();
