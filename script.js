const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");
const navLinks = siteNav ? siteNav.querySelectorAll("a") : [];
const yearNode = document.getElementById("year");
const revealNodes = document.querySelectorAll(".reveal");
const loopPath = document.querySelector(".loop-front");

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

if (loopPath instanceof SVGPathElement) {
  const length = loopPath.getTotalLength();
  loopPath.style.strokeDasharray = `${length}`;
  loopPath.style.strokeDashoffset = `${length}`;
}

if (revealNodes.length > 0) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealNodes.forEach((node, index) => {
    node.style.transitionDelay = `${Math.min(index * 40, 240)}ms`;
    observer.observe(node);
  });
}
