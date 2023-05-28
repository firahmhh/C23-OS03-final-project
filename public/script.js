// menutup sidebar
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".colaps");
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

// seleksi side menu
let ul = document.querySelector(".nav-link");
let li = document.querySelectorAll(".sub-endpoint");

li.forEach((el) => {
  el.addEventListener("click", function () {
    ul.querySelector(".active").classList.remove("active");
    el.classList.add("active");
  });
});

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
