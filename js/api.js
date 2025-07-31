import { getData } from "./dom.js";

let API = "https://687f27d3efe65e5200888b47.mockapi.io/restaraunt";

async function get() {
  let res = await fetch(API);

  let product = await res.json();

  getData(product);
}

async function filterbtns(value) {
  let respone;

  if (value == "all") {
    respone = await fetch(API);
  } else {
    respone = await fetch(`${API}?category=${value}`);
  }

  let afterfilter = await respone.json();

  getData(afterfilter);
}

export { get, filterbtns };
