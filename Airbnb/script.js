document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.getElementById("searchBar");
  const middle = document.getElementById("middleSection");
  const mainHeader = document.querySelector(".main-header");

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 10;

    mainHeader.classList.toggle("scrolled", scrolled);   // shrink header
    searchBar.classList.toggle("shrink", scrolled);      // shrink and move search bar
    middle.classList.toggle("hide", scrolled);           // hide middle nav
  });
});
function toggleHeart(button) {
    button.classList.toggle('not-liked');
  }