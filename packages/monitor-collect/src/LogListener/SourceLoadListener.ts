import { MessageStack } from "../MessageStack";
import { SourceLoadErrorMessage } from "../LogMessage/SourceLoadErrorMessage";

export class SourceLoadListener {
  public static setup() {
    // 当浏览器不支持 window.performance.getEntries 的时候，用下边这种方式
    window.addEventListener(
      "error",
      (e: any) => {
        const typeName = e?.target?.localName;
        let sourceUrl = "";
        if (typeName === "link") {
          sourceUrl = e.target.href;
        } else if (typeName === "script") {
          sourceUrl = e.target.src;
        }

        SourceLoadListener.addMessage(sourceUrl, typeName);
      },
      true
    );
  }

  public static addMessage(sourceURL: string, typeName: string) {
    MessageStack.push(new SourceLoadErrorMessage(sourceURL, typeName));
  }
}
