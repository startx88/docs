import nats, { Message } from "node-nats-streaming";

console.clear();
const stan = nats.connect("learning", "123", {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Lisenter connected to NATS");

  const subscription = stan.subscribe("data:created");

  subscription.on("message", (msg: Message) => {
    const data = msg.getData();
    if (typeof data === "string") {
      console.log(
        `Event received #${msg.getSequence()}, data recieved: ${data}`
      );
    }
    msg.ack();
  });
});
