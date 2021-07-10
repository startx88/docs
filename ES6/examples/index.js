

// if (!window.Worker) throw new Error("Browser does not support worker");

// const w = new Worker('./worker.js');
// w.onmessage = function (e) {
//   console.log("parent", e);
// }
// w.postMessage({ url: "http://jsonplaceholder.typicode.com/users" });

const worker = new Worker("worker.js", { type: "module" });
worker.onmessage = receiveFromWorker;

const url = document.querySelector("#image-url");
const filter = document.querySelector("#filter");
const output = document.querySelector("#output");

url.oninput = updateImage;
filter.oninput = sendToWorker;

let imageData, context;

function updateImage() {
  const img = new Image();
  img.src = url.value;
  img.crossOrigin = "Anonymous";
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    context = canvas.getContext("2d");
    context.drawImage(img, 0, 0);
    console.log(context.getImageData(0, 0, canvas.width, canvas.height));
    imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    sendToWorker();
    output.replaceChildren(canvas);
  };
}

function sendToWorker() {
  worker.postMessage({ imageData, filter: filter.value });
}

function receiveFromWorker(e) {
  context.putImageData(e.data, 0, 0);
}