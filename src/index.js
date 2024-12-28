import h from "hyperscript";
import { registerImage } from "./lazy";

const url = "https://randomfox.ca";
const min = 1;
const max = 122;
const random = () => Math.floor(Math.random() * (max - min)) + min;

// Create one image
// Add image
const createImageNode = () => {
  //   const image = document.createElement("img");
  //   image.className = "mx-auto";
  //   image.width = "320";
  //   image.dataset.src = `${url}/images/${random()}.jpg`;

  const image = h("img.mx-auto", {
    width: 320,
    "data-src": `${url}/images/${random()}.jpg`,
  });

  //   const container = document.createElement("div");
  //   container.className = "p-4";

  const container = h("div.p-4.mt-3", image);

  //   container.appendChild(image);
  return container;
};

const mountNode = document.getElementById("images");
const addButton = document.querySelector("button");

const addImage = () => {
  const newImage = createImageNode();
  mountNode.appendChild(newImage);
  registerImage(newImage);
};

addButton.addEventListener("click", addImage);
