import { filterbtns } from "./api.js";

let box = document.querySelector(".box");
let Allbtnsforfillter = document.querySelectorAll(".btnsfil");



Allbtnsforfillter.forEach((btn) => {
  btn.onclick = () => {
    filterbtns(btn.value);
  };
});



function getData(data) {
  box.innerHTML = "";
  data.forEach((el) => {
    let div = document.createElement("div");
    let divimg = document.createElement("div");
    let divtex = document.createElement("div");
    let divtitleprice = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h3");
    let price = document.createElement("h3");
    let hr = document.createElement("hr");
    let desc = document.createElement("p");
      
    divtitleprice.style.display = "flex";
    divtitleprice.style.justifyContent = "space-between";
    divtitleprice.style.alignItems = "center";
    div.classList.add("div");

    img.src = el.img;
    divimg.append(img);

    title.innerHTML = el.title;
    title.style.color = "rgb(16, 42, 66)";

    price.innerHTML = el.price;
    divtitleprice.append(title, price);
    price.style.color = "rgb(197, 157, 95)";

    hr.style.marginTop = "10px";
    hr.style.marginBottom = "20px";

    desc.innerHTML = el.des;
    desc.style.width = "300px";
    desc.style.color = "rgb(97, 125, 152)";
    divtex.append(divtitleprice, hr, desc);

    div.append(divimg, divtex);
    box.append(div);
  });
}

export { getData };
