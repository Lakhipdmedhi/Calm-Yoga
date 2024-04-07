
/*JS FOR NAV BAR*/


function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



/*copyhsheoeekeoe]*/
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.gallery');
    container.addEventListener('selectstart', (e) => {
        e.preventDefault();
    });
});



