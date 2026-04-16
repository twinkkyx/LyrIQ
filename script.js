const yearNode = document.getElementById("year");
const mailingForm = document.querySelector(".mailing-form");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
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
