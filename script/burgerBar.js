const burgerBtn = document.querySelector(".menu-icon");
const rightSide = document.querySelector(".right");
const leftSide = document.querySelector(".left");

export function burgerEvent() {
  burgerBtn.addEventListener("click", () => {
    rightSide.classList.toggle("right-deactive");
    leftSide.classList.toggle("right");
  });
}
