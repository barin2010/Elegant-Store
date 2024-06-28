function mobileNav() {
  const openNavBtn = document.querySelector("#mobile-nav-btn");
  const nav = document.querySelector(".mobile-nav");
  const closeNavBtn = document.querySelector("#close-mobile-nav");
  const mobileNavFade = document.querySelector("#mobile-nav-fade");

  openNavBtn.onclick = function () {
    nav.classList.add("mobile-nav--open");
    mobileNavFade.classList.add("mobile-nav-fade--open");
    document.body.classList.toggle("no-scroll");
  };

  closeNavBtn.onclick = function () {
    nav.classList.remove("mobile-nav--open");
    mobileNavFade.classList.remove("mobile-nav-fade--open");
    document.body.classList.toggle("no-scroll");
  };
}

export default mobileNav;
