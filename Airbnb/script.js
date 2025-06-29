document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.getElementById("searchBar");
  const middle = document.getElementById("middleSection");



  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      searchBar.classList.add("shrink");
      middle.classList.add("hide");
      
    } else {
      searchBar.classList.remove("shrink");
      middle.classList.remove("hide");

    }
  });
});
