import { LogBaseMessage } from './LogBaseMessage';

export class JavaScriptErrorMessage extends LogBaseMessage {
  public constructor(public errorMessage: string, public errorStack: string) {
    super('JavaScriptError');
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      errorMessage: this.errorMessage,
      errorStack: this.errorStack,
    };
  }
}
