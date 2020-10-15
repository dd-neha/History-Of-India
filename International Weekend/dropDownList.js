function fortListClick() {
  document.getElementById("fortList").classList.toggle("show");
}

function palaceListClick() {
  document.getElementById("palacesList").classList.toggle("show");
}
function historicalListClick() {
  document.getElementById("historicalList").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}