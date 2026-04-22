// --- DYNAMIC FAVICON LOADER ---
(function () {
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png"; // Change to 'image/x-icon' if using a .ico file
  link.href = "simple_logo-removebg-preview.png"; // Path to your icon
  document.head.appendChild(link);
})();

const navbarHTML = `
<header id="main-header">
  <div class="logo-section">
    <img src="simple_logo-removebg-preview.png" alt="IT Simple Logo" class="nav-logo" />
    <span>IT SIMPLE SOLUTIONS INC.</span>
  </div>
  <nav id="nav-links">
    <a href="index.html">Home</a>
    <a href="product.html">Products</a>
    <a href="contact.html">Contact</a>
    <a href="updates.html">Updates</a>
  </nav>
</header>
`;

document.body.insertAdjacentHTML("afterbegin", navbarHTML);

// Logic to highlight the active page
const currentPath = window.location.pathname.split("/").pop() || "index.html";
const links = document.querySelectorAll("#nav-links > a, .dropdown > a");
links.forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  }
});

// Scroll logic for the black background switch
window.addEventListener("scroll", () => {
  const isScrolled = window.scrollY > 50;
  document.querySelector("header").classList.toggle("scrolled", isScrolled);
});
