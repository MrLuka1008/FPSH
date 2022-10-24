import { sumOfDigit } from "./script";
const selectComp = document.querySelectorAll("a");
const companyName = document.getElementById("companyName");
const companyEmail = document.getElementById("companyEmail");
let obj;

export function forEachEl() {
  selectComp.forEach((el) => {
    el.addEventListener("click", (e) => {
      let result = obj.find((element) => element.id == e.target.id);
      console.log(result);
      companyName.innerText = result.name;
      companyEmail.innerText = result.email;
      boxValue.value = result.boxes;
      console.log(result.boxes);
      sumOfDigit(result.boxes);
    });
  });
}

export function getInfo() {
  fetch(
    "https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json"
  )
    .then((res) => res.json())
    .then((data) => {
      obj = data;
      forEachEl();
    });
}
