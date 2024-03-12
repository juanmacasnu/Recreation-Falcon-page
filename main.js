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
});document.getElementById("closesettings").addEventListener("click", function() {
    const settings = document.querySelector("#settings")
    settings.style.display = (settings.style.display === "none") ? "block" : "none";
  })