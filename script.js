document.addEventListener("DOMContentLoaded", function() {
    const hamburgerCheckbox = document.querySelector(".hamburger input");
    const navLinks = document.querySelector(".nav-links");
  
    hamburgerCheckbox.addEventListener("change", function() {
      if (this.checked) {
        navLinks.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
      } else {
        navLinks.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scrolling when menu is closed
      }
    });
});
  
  