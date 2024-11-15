
let popupFondo = document.querySelector(".pop-up-fondo")
let btnLogOut = document.querySelector(".logout")

btnLogOut.addEventListener("click",()=>{
    popupFondo.style.display = "flex";
})

let btnCancelar = document.getElementById("cancelar")

btnCancelar.addEventListener("click", ()=>{
    popupFondo.style.display = "none";
})


let btnSiguientePaso1 = document.getElementById("btnConfirmar")
let msj = document.querySelector(".pop-up-mensaje")

if (btnSiguientePaso1) {
    btnSiguientePaso1.addEventListener("click",()=>{
        msj.innerHTML = "¿Desea confirmar la inscripción?";
        popupFondo.style.display = "flex";
    })
    
    let btnCancelarPaso1 = document.getElementById("cancelarPaso1")
    
    btnCancelarPaso1.addEventListener("click", ()=>{
        popupFondo.style.display = "none";
    })
}
