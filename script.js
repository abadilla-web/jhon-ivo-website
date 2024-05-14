function toggleNav() {
  var nav = document.getElementById("menu");
  if (nav.style.display === "" || nav.style.display === "none") {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
}
