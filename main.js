// Aquí abre en la rueda el 'settings' de la parte de Adriana
$(document).ready(function() {
    $('#settings').click(function() {
    $('#settings').toggleClass('open');
    });
});

//Este código abre un div en la barra de búsqueda
(function() {
    ('#searchIcon').click(function() {
        ('#searchLinks').toggle();
});


//AQUÍ EMPIEZA JS DE ADRIANA
(document).click(function(e) { //Esto cierra el 'settings' de  Adriana cuando se hace click en el botón de cerrar.
    if (!(e.target).closest('#searchBox, #searchIcon').length) {
        ('#searchLinks').hide();
}
});
});document.getElementById("closesettings").addEventListener("click", function() {
    const settings = document.querySelector("#settings");
    settings.style.display = (settings.style.display === "none") ? "block" : "none";
})