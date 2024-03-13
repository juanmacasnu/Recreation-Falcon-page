// Aquí, engranaje abre el 'settings' de la parte de Adriana
window.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("engranaje").addEventListener("click", function() {
        console.log("Entró a la función")
        const settings = document.querySelector("#settings")
        console.log(settings);
        settings.style.display = (settings.style.display === "flex") ? "none" : "flex";
        oscuro.style.display = (oscuro.style.display === "block") ? "none" : "block"; //Esto es la parte oscura de la izq
})
});

//Este código abre un div en la barra de búsqueda
(function() {
    ('#searchIcon').click(function() {
        ('#searchLinks').toggle();
});


//AQUÍ EMPIEZA JS DE ADRIANA
(document).click(function(e) { //Esto cierra el 'settings' y .oscuro de  Adriana cuando se hace click en el botón de cerrar.
    if (!(e.target).closest('#searchBox, #searchIcon').length) {
        ('#searchLinks').hide();
        ('#oscuro').hide();
}
});
});document.getElementById("closesettings").addEventListener("click", function() {
    const settings = document.querySelector("#settings");
    settings.style.display = (settings.style.display === "none") ? "block" : "none";
})