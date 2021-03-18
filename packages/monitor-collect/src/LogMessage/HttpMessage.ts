import { LogBaseMessage } from "./LogBaseMessage";

export class HttpMessage extends LogBaseMessage {
  public constructor(
    public httpType: "start" | "end" | "error",
    public status: number,
    public requestURL: string,
    public method: string
  ) {
    super("HTTPMessage");
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      httpType: this.httpType,
      status: this.status,
      requestURL: this.requestURL,
      method: this.method,
    };
  }
}
