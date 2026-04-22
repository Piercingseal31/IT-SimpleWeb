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
    <div class="search-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    </div>
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
