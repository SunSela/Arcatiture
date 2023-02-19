const services = document.querySelector(".services");
const portfolio = document.querySelector(".portfolio");
const hamburger = document.getElementById("nav__toggle");

const menu = document.querySelector(".nav__list");
const navServices = document.querySelector(".nav__services");

services.addEventListener("click", function(){
  portfolio.classList.remove("active");
  services.classList.toggle("active");
});

portfolio.addEventListener("click", function(){
  services.classList.remove("active");
  portfolio.classList.toggle("active");
});

hamburger.addEventListener("click", function(){
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

document.addEventListener("click", function(e){
  if (
      e.target.matches(".services") ||
      !e.target.closest(".services")
    ) {
      services.classList.remove("active");
    }
  
  if (
      e.target.matches(".portfolio") ||
      !e.target.closest(".portfolio")
    ) {
      portfolio.classList.remove("active");
    }
});