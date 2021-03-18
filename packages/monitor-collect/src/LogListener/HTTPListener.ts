import { HttpMessage } from "../LogMessage/HttpMessage";
import { MessageStack } from "../MessageStack";

export class HTTPListener {
  public static setup() {
    (function (xhr) {
      let send = xhr.send;
      let open = xhr.open;
      xhr.open = function () {
        (this as any)._method = arguments[0];
        (this as any)._url = arguments[1];

        return open.apply(this, arguments as any);
      };

      xhr.send = function (data) {
        const method = (this as any)._method;
        this.addEventListener("loadstart", () => {
          MessageStack.push(
            new HttpMessage("start", this.status, (this as any)._url, method)
          );
        });
        this.addEventListener("loadend", () => {
          MessageStack.push(
            new HttpMessage("end", this.status, this.responseURL, method)
          );
        });
        this.addEventListener("error", () => {
          MessageStack.push(
            new HttpMessage("error", this.status, (this as any)._url, method)
          );
        });
        return send.apply(this, arguments as any);
      };
    })(XMLHttpRequest.prototype);
  }
}
