const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function toggle() {
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
    return;
  } else {
    navMenu.style.display = "flex";
  }
});

window.addEventListener("resize", function() {
  if (window.innerWidth > 1500) {
    navMenu.style.display = "flex";
    hamburger.style.display = "none";
  }

  if (window.innerWidth < 1500) {
    navMenu.style.display = "none";
    hamburger.style.display = "block";
  }
})