// Dynamic Favicon Loader
(function () {
  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = "simple_logo-removebg-preview.png";
  document.head.appendChild(link);
})();

const navbarHTML = `
<header id="main-header">
  <a href="index.html" class="logo-section">
    <img src="simple_logo-removebg-preview.png" alt="IT Simple Logo" class="nav-logo" />
    <span>IT SIMPLE SOLUTIONS INC.</span>
  </a>
  
  <nav id="nav-links">
    <a href="index.html">Home</a>
    <a href="product.html">Products</a>
    <a href="contact.html">Contact</a>
    <a href="updates.html">Updates</a>
    <a href="about.html">About Us</a>
  </nav>

  <div class="mobile-menu-toggle" id="menu-open">
    <span></span>
    <span></span>
    <span></span>
  </div>
</header>

<div class="mobile-sidebar" id="sidebar">
  <div class="sidebar-header">
    <div class="close-btn" id="menu-close">✕</div>
  </div>
  <nav class="sidebar-links">
    <a href="index.html">Home</a>
    <a href="product.html">Products</a>
    <a href="contact.html">Contact</a>
    <a href="updates.html">Updates</a>
    <a href="about.html">About Us</a>
  </nav>
</div>
<div class="sidebar-overlay" id="overlay"></div>
`;

document.body.insertAdjacentHTML("afterbegin", navbarHTML);

// Logic for active links
const currentPath = window.location.pathname.split("/").pop() || "index.html";
const links = document.querySelectorAll("#nav-links a, .sidebar-links a");
links.forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  }
});

// Mobile Sidebar Toggle Logic
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
}

menuOpen.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// Scroll logic for black background switch
window.addEventListener("scroll", () => {
  const isScrolled = window.scrollY > 50;
  const header = document.querySelector("header");
  if (header) header.classList.toggle("scrolled", isScrolled);
});
