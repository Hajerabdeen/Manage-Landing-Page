const btn =document.getElementById("menu-btn")
const nav = document.getElementById("menu");
const btnIcon = document.getElementById("btn-icon");

btn.addEventListener("click",()=>{
if (btnIcon.src.includes("icon-hamburger.svg")){
    btnIcon.src = "images/icon-close.svg";
}else{
    btnIcon.src = "images/icon-hamburger.svg";
}
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
})