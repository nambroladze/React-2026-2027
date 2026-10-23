const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    navLinks.forEach((item) => {
      item.style.color = "white";
      item.style.textDecoration = "none";
    });

    link.style.color = "#5b13cf";
    link.style.textDecoration = "underline";
  });
});

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.textContent = "Purchased";
    btn.style.backgroundColor = "green";
  });
});
