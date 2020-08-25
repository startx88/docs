import { Stan, Message } from "node-nats-streaming";

export abstract class Listener {
  private client: Stan;
  abstract subject: string;
  abstract onMessage(data: any, msg: Message): void;
  abstract queueGroupName: string;

  protected ackWait = 5 * 1000;

  constructor(client: Stan) {
    this.client = client;
  }

  subscriptionOptions() {
    return this.client
      .subscriptionOptions()
      .setDeliverAllAvailable()
      .setManualAckMode(true)
      .setAckWait(this.ackWait)
      .setDurableName(this.queueGroupName);
  }

  listen() {
    const subcription = this.client.subscribe(
      this.subject,
      this.queueGroupName,
      this.subscriptionOptions()
    );

    subcription.on("message", (msg: Message) => {
      console.log(`Event received: ${this.subject} / ${this.queueGroupName}`);
      const data = this.parsedMessage(msg);
      this.onMessage(data, msg);
    });
  }

  parsedMessage(msg: Message) {
    const data = msg.getData();
    return typeof data === "string"
      ? JSON.parse(data)
      : JSON.parse(data.toString("utf-8"));
  }
}
