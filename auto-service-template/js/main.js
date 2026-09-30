const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const isOpen = answer.classList.toggle("open");
    button.querySelector("span").textContent = isOpen ? "−" : "+";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("appointment-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = document.getElementById("form-message");
  message.textContent = "Thanks! Your request has been captured in this demo. Connect the form to your email or backend before launch.";
  event.target.reset();
});
