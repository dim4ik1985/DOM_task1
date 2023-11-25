import "./css/style.css";

import "./js/moving-image/moving-image";

// TODO: write your code in moving-image.js

import MovingImage from "./js/moving-image/moving-image";

document.addEventListener("DOMContentLoaded", () => {
  const nodeImg = new MovingImage(document.querySelector(".container"));
  let numCell = nodeImg.randomNumber();
  nodeImg.addImg(numCell);

  const newInterval = setInterval(() => {
    let numRandom = nodeImg.randomNumber();
    console.log(numRandom);
    if (numCell !== numRandom) {
      nodeImg.deleteImg();
      nodeImg.addImg(numRandom);
      numCell = numRandom;
    }
  }, 2000);
});
