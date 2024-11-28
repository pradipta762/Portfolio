const mobNavbarOpenBtn = document.querySelector("#open-mob-nav")
const mobNavbarCloseBtn = document.querySelector("#close-mob-nav")
const mobMenu = document.querySelector(".mob-nav")
const changeToLightMode = document.querySelector("#change-to-light")
const changeToDarkMode = document.querySelector("#change-to-dark")

// --------------------- Mobile Navigation ---------------------

mobNavbarOpenBtn.addEventListener("click", function() {
  mobNavbarCloseBtn.classList.remove("hidden");
  mobNavbarOpenBtn.classList.add("hidden");
  mobMenu.classList.add("visible")
}, false);

mobNavbarCloseBtn.addEventListener("click", function() {
  mobNavbarOpenBtn.classList.remove("hidden");
  mobNavbarCloseBtn.classList.add("hidden");
  mobMenu.classList.remove("visible")
}, false);

// --------------------- Dark - Light Mode change ---------------------

changeToLightMode.addEventListener("click", function() {
  document.body.classList.add("change-mode")
  changeToDarkMode.classList.remove("hidden")
  changeToLightMode.classList.add("hidden")
}, false)

changeToDarkMode.addEventListener("click", function() {
  document.body.classList.remove("change-mode")
  changeToDarkMode.classList.add("hidden")
  changeToLightMode.classList.remove("hidden")
}, false)