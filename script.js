const yearNode = document.getElementById("year");
const mailingForm = document.querySelector(".mailing-form");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

if (mailingForm) {
  mailingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = mailingForm.querySelector("button");
    if (button) {
      button.textContent = "Submitted";
      button.disabled = true;
    }
  });
}
