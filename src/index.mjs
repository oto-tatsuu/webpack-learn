import getText from './module-a.mjs'
let div = document.createElement("div");
div.innerText=getText();
document.body.appendChild(div);