import * as filters from "./fetch.js";

self.onmessage = e => {
  const { imageData, filter } = e.data;
  console.log('e', e)
  filters[filter](imageData);
  self.postMessage(imageData, [imageData.data.buffer]);
};