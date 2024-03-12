document.getElementById("closesettings").addEventListener("click", function() {
    const dropdownMenuTopProducts = document.querySelector("#settings")
    dropdownMenuTopProducts.style.display = (dropdownMenuTopProducts.style.display === "none") ? "block" : "none";
  })