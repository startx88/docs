import { Listener } from "./base-listener";
import { Message } from "node-nats-streaming";

export class CreateDataListener extends Listener {
  subject = "data:created";
  queueGroupName = "learn-data-group";
  onMessage(data: any, msg: Message) {
    console.log("Event data", data);
    msg.ack();
  }
}
