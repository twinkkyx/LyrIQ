const yearNode = document.getElementById("year");
const mailingForm = document.querySelector(".mailing-form");
const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => siteNav.classList.remove("open"));
  });
}

if (mailingForm instanceof HTMLFormElement) {
  mailingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = mailingForm.querySelector("button");
    if (button instanceof HTMLButtonElement) {
      button.textContent = "Submitted";
      button.disabled = true;
    }
  });
}
