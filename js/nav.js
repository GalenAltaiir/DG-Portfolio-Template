var elem = document.getElementById("nav");
function slide() {
  elem.classList.toggle('hide');
}

const mediaQuery = window.matchMedia('(max-width: 992px)')
// Check if the media query is true
if (mediaQuery.matches) {
  slide();
}


