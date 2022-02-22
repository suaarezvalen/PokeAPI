addEventListener("DOMContentLoaded", function(){
    //alert("prueba")

    const btn_navbar = document.querySelector(".btn_navbar");
    btn_navbar.addEventListener("click", function(){
        const lista_navbar = document.querySelector(".lista_navbar");
        lista_navbar.classList.toggle("show")
    })
})

