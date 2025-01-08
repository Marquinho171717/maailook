import { createMenu, getContent } from "./menubar.js";
import { aboutImg } from "./about.js";
import { aboutText } from "./about.js";
import { homeProducts } from "./home.js";
function updateMain() {
    createMenu();
    aboutImg();
    aboutText();
    getContent();
    homeProducts();
}
function createButton() {
    //var div = document.getElementById("div") as HTMLElement;
    //var btn = document.createElement("button");
    //btn.textContent = "Home";
    //btn.className = "center-btn";
    //div?.appendChild(btn);
    // Add an event listener to the button
    //btn.addEventListener('click', () => {
    //	window.location.href = "./lauren.html";
    //});
}
;
function mobileMenuf() {
    const mobileMenu = document.getElementById("mobile-menu");
    const menu = document.querySelector(".menu");
    mobileMenu.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}
document.addEventListener("DOMContentLoaded", () => {
    //createButton();
    //createImg();
    mobileMenuf();
    updateMain();
});
