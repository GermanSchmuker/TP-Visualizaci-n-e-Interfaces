let navResponsive = document.querySelector(".ul_responsive")

console.log(navResponsive)


let burguer = document.querySelector(".burger_menu")

burguer.addEventListener("click", ()=>{
    if(burguer.src.includes("burger_menu.svg")){
        burguer.src = "../assets/iconSinBckgrd/cruz.svg";
        navResponsive.style.display = "flex";
    } else {
        burguer.src = "../assets/iconSinBckgrd/burger_menu.svg";
        navResponsive.style.display = "none";
    }
});


window.addEventListener("resize", ()=>{
    if(window.innerWidth > 801){
        // menu_desplegable_oculto.style = "display: none;";
        navResponsive.style.display = "none";
        burguer.src = "../assets/iconSinBckgrd/burger_menu.svg";
    }
})

// este lo hago para que cuando el menu esta desplegado, si toco en cualquier lado de la pantalla que NO sea ni el menu desplegable ni 
// la imagen del menu, este menu se oculte
document.addEventListener("click", (e)=>{
    if (!navResponsive.contains(e.target) && !burguer.contains(e.target)) {
        burguer.src = "../assets/iconSinBckgrd/burger_menu.svg";
        // menu_desplegable_oculto.style = "display: none";
        navResponsive.style.display = "none";
    }
});