// Aquí abre en la rueda el 'settings' de la parte de Adriana
document.getElementById("engranaje").addEventListener("click", function() {
    const openSettings = document.querySelector("settings")
    openSettings.style.display = (openSettings.style.display === "none") ? "block" : "none";
})


//Este código abre un div en la barra de búsqueda
(function() {
    ('#searchIcon').click(function() {
        ('#searchLinks').toggle();
});

(document).click(function(e) {
    if (!(e.target).closest('#searchBox, #searchIcon').length) {
        ('#searchLinks').hide();
}
});
});