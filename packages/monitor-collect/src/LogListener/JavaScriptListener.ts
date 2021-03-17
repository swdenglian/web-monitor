import { MessageStack } from '../MessageStack';
import { JavaScriptErrorMessage } from '../LogMessage/JavaScriptErrorMessage';

export class JavaScriptListener {
  private static jsMonitorStart: boolean = false;

  public static setup() {
    // 重写console.error, 可以捕获更全面的报错信息
    const oldError = console.error;
    console.error = function () {
      if (!JavaScriptListener.jsMonitorStart) {
        let errorMsg = arguments[0] && arguments[0].message;
        let lineNumber = 0;
        let columnNumber = 0;
        let errorObj = arguments[0] && arguments[0].stack;
        if (!errorObj) errorObj = arguments[0];
        // 如果onerror重写成功，就无需在这里进行上报了
        JavaScriptListener.addMessage(
          errorMsg,
          lineNumber,
          columnNumber,
          errorObj,
        );
      }
      return oldError.apply(console, arguments as any);
    };
    // 重写 onerror 进行jsError的监听
    window.onerror = function (
      errorMsg,
      url,
      lineNumber,
      columnNumber,
      errorObj,
    ) {
      JavaScriptListener.jsMonitorStart = true;
      let errorStack = errorObj ? errorObj.stack : null;
      JavaScriptListener.addMessage(
        errorMsg,
        lineNumber,
        columnNumber,
        errorStack,
      );
    };
  }

  public static addMessage(
    errorMsg: string | Event,
    lineNumber?: number,
    columnNumber?: number,
    errorObject?: any,
  ) {
    MessageStack.push(
      new JavaScriptErrorMessage(
        `${errorMsg}:${lineNumber}:${columnNumber}`,
        errorObject,
      ),
    );
  }
}
