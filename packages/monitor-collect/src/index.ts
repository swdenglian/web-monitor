import { LogListener } from "./LogListener/LogListener";
import { MessageStack } from "./MessageStack";

function setup() {
  MessageStack.setup();
  LogListener.setup();
}

setup();
