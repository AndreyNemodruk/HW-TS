import { AbstractMessenger } from "./AbstractMessenger";
import { IMessagesSender } from "./types/types";

class MessagesSender implements IMessagesSender {
  messenger: AbstractMessenger;
  constructor(messanger: AbstractMessenger) {
    this.messenger = messanger;
  }
  sendMessage(message: string): void {
    this.messenger.sendMessage(message);
  }
}

class Telegram extends AbstractMessenger {
  sendMessage(message: string): void {
    console.log(message);
  }
}

class Viber extends AbstractMessenger {
  sendMessage(message: string): void {
    console.log(message);
  }
}

class WhatsApp extends AbstractMessenger {
  sendMessage(message: string): void {
    console.log(message);
  }
}

const telegram = new Telegram();
const viber = new Viber();
const whatsApp = new WhatsApp();

const messagesSenderTelegram = new MessagesSender(telegram);
const messagesSenderViber = new MessagesSender(viber);
const messagesSenderWhatsApp = new MessagesSender(whatsApp);

messagesSenderTelegram.sendMessage("telegram");
messagesSenderViber.sendMessage("viber");
messagesSenderWhatsApp.sendMessage("whatsApp");
