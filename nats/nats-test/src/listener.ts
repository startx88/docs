import nats from "node-nats-streaming";
import { randomBytes } from "crypto";
import { CreateDataListener } from "./events/create-data-listener";

console.clear();
const stan = nats.connect("learning", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Lisenter connected to NATS");
  stan.on("close", () => {
    console.log("Nats server is closed");
    process.exit();
  });
  new CreateDataListener(stan).listen();
});

process.on("SIGINT", () => stan.close());
process.on("SIGTERM", () => stan.close());
