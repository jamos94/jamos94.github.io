// enables scroll to top with arrow button
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click",() => {
  window.scrollTo({
    top:0,
    left:0,
    behavior: "smooth",
  })
})

// enables hamburger selections 
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

//toggles nav list on click
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
})

//close hamburger when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show")
  })
);