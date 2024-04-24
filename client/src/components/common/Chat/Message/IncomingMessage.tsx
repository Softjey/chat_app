import { Message, MessageProps } from "./Message";

export function IncomingMessage(props: MessageProps) {
  return <Message {...props} />;
}
