const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");
const navLinks = siteNav ? siteNav.querySelectorAll("a") : [];
const yearNode = document.getElementById("year");
const statValues = document.querySelectorAll(".stat-value");
const contactForm = document.querySelector(".contact-form");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
    });
  });
}

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const animateCounter = (node) => {
  const target = Number(node.dataset.target || 0);
  const hasPlus = node.textContent?.includes("+") || false;
  const durationMs = 1200;
  const start = performance.now();

  const step = (time) => {
    const progress = Math.min((time - start) / durationMs, 1);
    const value = Math.floor(progress * target);
    node.textContent = `${value.toLocaleString()}${hasPlus ? "+" : ""}`;
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

if (statValues.length > 0) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  statValues.forEach((node) => observer.observe(node));
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = contactForm.querySelector("button");
    if (button) {
      button.textContent = "Inquiry Sent ✓";
      button.setAttribute("disabled", "disabled");
    }
  });
}
