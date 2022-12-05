"use strict";

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll(".needs-validation");
const check = document.querySelectorAll(".form-check-input");
const btn = document.querySelector(".btn");

// Loop over them and prevent submission

btn.addEventListener("click", function (e) {
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    });
  });
});

// Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection2 = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver2 = new IntersectionObserver(revealSection2, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((s) => {
  sectionObserver2.observe(s);
  s.classList.add("section--hidden");
});
