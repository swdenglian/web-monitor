import { LogBaseMessage } from './LogBaseMessage';

export class SourceLoadErrorMessage extends LogBaseMessage {
  public constructor(public sourceURL: string, public typeName: string) {
    super('SourceLoadError');
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      sourceURL: this.sourceURL,
      typeName: this.typeName,
    };
  }
}
