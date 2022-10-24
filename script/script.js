import { forEachEl, getInfo } from "./api.js";
import { burgerEvent } from "./burgerBar";

const boxValue = document.getElementById("boxValue");
let boxLabel = document.getElementById("boxNumber");
let newarr;
let sumNumber = 0;

export function sumOfDigit(arr) {
  newarr = arr.split(",");

  for (let i = 0; i < newarr.length; i++) {
    sumNumber += eval(newarr[i]);
  }

  boxLabel.innerText = Math.ceil(sumNumber / 10);
  sumNumber = 0;
  newarr = "";
}

function changeNumber() {
  boxValue.addEventListener("change", (e) => {
    newarr = e.target.value.split(",");

    for (let i = 0; i < newarr.length; i++) {
      sumNumber += eval(newarr[i]);
    }

    boxLabel.innerText = Math.ceil(sumNumber / 10);
    sumNumber = 0;
    newarr = "";
  });
}
burgerEvent();
changeNumber();
getInfo();
