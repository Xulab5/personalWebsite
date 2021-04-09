var state = false;
function displayNavBar() {
  const navbar = document.getElementById("navbar");
  if (!state) {
    navbar.style.display = "block";
    state = true;
  } else {
    state = false;
    navbar.style.display = "none";
  }
}
