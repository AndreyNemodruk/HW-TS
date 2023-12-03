interface IObserver {
  kind: string;
  update(data: any): void;
}

interface IObservable {
  subscribe(observer: IObserver): void;
  unsubscribe(observer: IObserver): void;
  notify(data: any): void;
}

abstract class AbstractObservable implements IObservable {
  private readonly observers: IObserver[] = [];
  subscribe(observer: IObserver): void {
    const oldObserver = this.observers.find((i) => i.kind === observer.kind);
    if (!oldObserver) {
      this.observers.push(observer);
    } else {
      throw new Error("такой объект уже добавлен в список");
    }
  }
  unsubscribe(observer: IObserver): void {
    const observerIdx = this.observers.findIndex(
      (i) => i.kind === observer.kind
    );
    this.observers.splice(observerIdx, 1);
  }
  notify(data: number): void {
    this.observers.forEach((i) => i.update(data));
  }
}

class Subject extends AbstractObservable {
  private _stockPrice: number;

  constructor(price: number) {
    super();
    this._stockPrice = price;
  }

  get stockPrice() {
    return this._stockPrice;
  }

  changePrice(newPrice: number) {
    this._stockPrice = newPrice;
    this.notify(newPrice);
  }
}

class StockObserver implements IObserver {
  kind: string;
  stockPrice: number;

  constructor(price: number, kind: string) {
    this.stockPrice = price;
    this.kind = kind;
  }
  update(data: number): void {
    this.stockPrice = data;
  }
}

const observable = new Subject(0);
const observer1 = new StockObserver(0, "stockObserver1");
const observer2 = new StockObserver(1, "stockObserver2");
console.log(`observer1 before event price ${observer1.stockPrice}`);
console.log(`observer2 before event price ${observer2.stockPrice}`);

observable.subscribe(observer1);
observable.subscribe(observer2);
observable.changePrice(20);

console.log(`observer1 after event price ${observer1.stockPrice}`);
console.log(`observer2 after event price ${observer2.stockPrice}`);
