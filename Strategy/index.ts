interface IPaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPaymentStrategy implements IPaymentStrategy {
  pay(amount: number): void {
    console.log(`pay from credit card ${amount}`);
  }
}

class PaypalPaymentStrategy implements IPaymentStrategy {
  pay(amount: number): void {
    console.log(`pay from payPal acc ${amount}`);
  }
}

class BitcoinPaymentStrategy implements IPaymentStrategy {
  pay(amount: number): void {
    console.log(`pay from bitcoin acc ${amount}`);
  }
}

class PaymentContext {
  private _paymentStrategy: IPaymentStrategy;
  constructor(strategy: IPaymentStrategy) {
    this._paymentStrategy = strategy;
  }

  public set paymentStrategy(paymentStrategy: IPaymentStrategy) {
    this._paymentStrategy = paymentStrategy;
  }

  executePayment(amount: number): void {
    this._paymentStrategy.pay(amount);
  }
}

const paymentCtx = new PaymentContext(new CreditCardPaymentStrategy());

paymentCtx.executePayment(20);

paymentCtx.paymentStrategy = new PaypalPaymentStrategy();

paymentCtx.executePayment(10);

paymentCtx.paymentStrategy = new BitcoinPaymentStrategy();

paymentCtx.executePayment(50);
