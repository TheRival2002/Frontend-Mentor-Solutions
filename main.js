const mobileNav = document.querySelector(".mobile-nav");
const primaryNav = document.querySelector(".primary-navigation");

mobileNav.addEventListener("click", function(){
  primaryNav.hasAttribute("data-visible") 
  ?  mobileNav.setAttribute("aria-expanded", false)
  :  mobileNav.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
})