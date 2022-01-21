import getText from './module-a.js'
import {createA,createB} from './rect.js'
import rect from "./css/rect.css"
let div = document.createElement("div");
div.innerText=getText();
div.id="test";
document.body.appendChild(div);
document.body.appendChild(createA());
document.body.appendChild(createB());