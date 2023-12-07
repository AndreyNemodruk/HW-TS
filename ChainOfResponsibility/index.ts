interface Handler {
  setNext(handler: Handler): void;
  handleRequest(request: IRequest): void;
}

enum ECommand {
  TechSupport,
  PaymentSupport,
  ReturnGoodsSupport,
}

interface IRequest {
  command: ECommand;
}

class Support implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): void {
    this.nextHandler = handler;
  }

  handleRequest(request: IRequest): void {
    console.log("request for new chat");
    if (
      this.nextHandler &&
      typeof this.nextHandler.handleRequest === "function"
    ) {
      this.nextHandler.handleRequest(request);
    }
  }
}

class TechSupport implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): void {
    this.nextHandler = handler;
  }

  handleRequest(request: IRequest): void {
    if (request.command === ECommand.TechSupport) {
      console.log("Hello! You are in TechSupport");
    } else if (
      this.nextHandler &&
      typeof this.nextHandler.handleRequest === "function"
    ) {
      this.nextHandler.handleRequest(request);
    }
  }
}

class PaymentSupport implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): void {
    this.nextHandler = handler;
  }

  handleRequest(request: IRequest): void {
    if (request.command === ECommand.PaymentSupport) {
      console.log("Hello! You are in PaymentSupport");
    } else if (
      this.nextHandler &&
      typeof this.nextHandler.handleRequest === "function"
    ) {
      this.nextHandler.handleRequest(request);
    }
  }
}

class ReturnGoodsSupport implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): void {
    this.nextHandler = handler;
  }

  handleRequest(request: IRequest): void {
    if (request.command === ECommand.ReturnGoodsSupport) {
      console.log("Hello! You are in ReturnGoodsSupport");
    } else if (
      this.nextHandler &&
      typeof this.nextHandler.handleRequest === "function"
    ) {
      this.nextHandler.handleRequest(request);
    }
  }
}
const support = new Support();
const techSupport = new TechSupport();
const paymentSupport = new PaymentSupport();
const returnGoodsSupport = new ReturnGoodsSupport();

support.setNext(techSupport);
techSupport.setNext(paymentSupport);
paymentSupport.setNext(returnGoodsSupport);

support.handleRequest({ command: ECommand.TechSupport });
