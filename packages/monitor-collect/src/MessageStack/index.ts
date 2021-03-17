import { LogBaseMessage } from '../LogMessage/LogBaseMessage';

export class MessageStack {
  private static intervalTimer: NodeJS.Timer | null = null;
  public static stack: LogBaseMessage[] = [];
  public static push(log: LogBaseMessage) {
    MessageStack.stack.push(log);
  }
  public static clear() {
    MessageStack.stack = [];
  }

  public static getLength(): number {
    return MessageStack.stack.length;
  }

  public static upload() {
    console.log(MessageStack.stack.map((message) => message.toJSON()));
    MessageStack.clear();
  }

  public static startTimer() {
    if (MessageStack.intervalTimer) {
      clearInterval(MessageStack.intervalTimer);
    }
    MessageStack.intervalTimer = setInterval((): void => {
      MessageStack.upload();
    }, 10000);
  }

  public static setup() {
    MessageStack.startTimer();
  }
}
