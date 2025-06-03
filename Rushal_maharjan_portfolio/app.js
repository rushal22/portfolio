document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(
    ".header .nav-bar .nav-list .hamburger"
  );
  const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
  const menu_item = document.querySelectorAll(
    ".header .nav-bar .nav-list ul li a"
  );
  const header = document.querySelector(".header.container");
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const pageTitle = document.querySelector("title");
  const ogDescription = document.querySelector(
    'meta[property="og:description"]'
  );

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });

  document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
      header.style.backgroundColor = "#29323c";
    } else {
      header.style.backgroundColor = "transparent";
    }
  });

  menu_item.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobile_menu.classList.toggle("active");
      const sectionName = item.getAttribute("data-after");
      if (sectionName) {
        ogTitle.setAttribute("content", `Rushal Maharjan - ${sectionName}`);
        pageTitle.textContent = `Rushal Maharjan - ${sectionName}`;
        ogDescription.setAttribute(
          "content",
          `Explore Rushal Maharjan's portfolio - ${sectionName} section`
        );
      }
    });
  });
});
