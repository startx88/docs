import nats from "node-nats-streaming";
console.clear();
// CONNECT NATS
const stan = nats.connect("learning", "abc", {
  url: "http://localhost:4222",
});

// emit a connect event
stan.on("connect", () => {
  console.log("Publisher connected to NATS");
  const data = JSON.stringify({
    name: "Pradeep",
    age: 22,
  });
  stan.publish("data:created", data, () => {
    console.log("Event published!");
  });
});
