import { HTTPListener } from "./HTTPListener";
import { JavaScriptListener } from "./JavaScriptListener";
import { SourceLoadListener } from "./SourceLoadListener";

export class LogListener {
  public static setup() {
    JavaScriptListener.setup();
    SourceLoadListener.setup();
    HTTPListener.setup();
  }
}
