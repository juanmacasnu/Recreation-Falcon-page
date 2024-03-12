document.getElementById("closesettings").addEventListener("click", function() {
    const settings = document.querySelector("#settings")
    settings.style.display = (settings.style.display === "none") ? "block" : "none";
  })