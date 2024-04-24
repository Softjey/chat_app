import { Message, MessageProps } from "./Message";

export function OutgoingMessage(props: MessageProps) {
  return <Message color="primary" {...props} />;
}
