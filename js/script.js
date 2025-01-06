const hamburgerMenu = document.getElementById("Hamburger-menu");
const body = document.body;

// Toggle sidebar when clicking the hamburger menu
hamburgerMenu.addEventListener("click", () => {
  body.classList.toggle("sidebar-active");
});

// Close sidebar when clicking outside of it
document.addEventListener("click", (event) => {
  const sidebar = document.getElementById("sidebar");
  if (
    !sidebar.contains(event.target) &&
    !hamburgerMenu.contains(event.target) &&
    body.classList.contains("sidebar-active")
  ) {
    body.classList.remove("sidebar-active");
  }
});
