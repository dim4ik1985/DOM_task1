// TODO: write code here
import imageUrl from './goblin.png'
export default class MovingImage {
  constructor(element) {
    this._element = element;
  }

  randomNumber() {
    return Math.floor(Math.random() * (15 + 1));
  }

  deleteImg() {
    const cellImg = document.querySelector(".cell__img");
    cellImg.remove();
  }

  addImg(cell) {
    const cellArr = Array.from(this._element.querySelectorAll(".cell"));
    const img = document.createElement("img");

    img.src = imageUrl;
    img.classList.add("cell__img");

    cellArr[cell].appendChild(img);
  }
}
