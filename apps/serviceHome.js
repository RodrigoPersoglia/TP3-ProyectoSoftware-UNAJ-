import {NavMenu,Footer,redireccion} from './components.js'

const header = document.getElementById("header");
const contacto = document.getElementById("Contacto");

window.onload = () => {
    header.innerHTML=NavMenu();
    contacto.innerHTML=Footer();
    document.getElementById("searchButton").onclick = redireccionar;
}

const redireccionar = () => {
    redireccion();
}


