// DISABLE SCROLLING
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
function preventDefault(e) {
  e.preventDefault();
}
function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}
var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}
var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
// call this to Disable
function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}
// END OF DISABLE SCROLLING

// SCROLL NAVBAR
let bool = false;

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const scrolled = window.scrollY;
  if (!bool) {
    if (scrolled > 100) {
      navbar.setAttribute("class", "purple-background");
    } else {
      navbar.removeAttribute("class");
    }
  }
});
//  MOBILE NAVBAR
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".odkazy");

hamburger.addEventListener("click", () => {
  bool = !bool;
  const scrolled = window.scrollY;
  if (bool) {
    navbar.setAttribute("class", "purple-background");
  } else if (!bool && scrolled < 100) {
    navbar.removeAttribute("class");
  }
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

//MODAL
const modal = document.getElementById("simpleModal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

const openModal = (modalus) => {
  modalus.style.display = "block";
  disableScroll();
};
const closeModal = (modalus) => {
  console.log("clicked");
  modalus.style.display = "none";
  enableScroll();
};
const outsideClick = (e, modalus) => {
  if (e.target == modalus) {
    modalus.style.display = "none";
    enableScroll();
  }
};

openBtn.addEventListener("click", () => openModal(modal));
closeBtn.addEventListener("click", () => closeModal(modal));
window.addEventListener("click", (e) => outsideClick(e, modal));

const modal2 = document.getElementById("simpleModal-2");
const openBtn2 = document.getElementById("openBtn2");
const closeBtn2 = document.getElementById("closeBtn2");
openBtn2.addEventListener("click", () => openModal(modal2));
closeBtn2.addEventListener("click", () => closeModal(modal2));
window.addEventListener("click", (e) => outsideClick(e, modal2));

const modal3 = document.getElementById("simpleModal-3");
const openBtn3 = document.getElementById("openBtn3");
const closeBtn3 = document.getElementById("closeBtn3");
openBtn3.addEventListener("click", () => openModal(modal3));
closeBtn3.addEventListener("click", () => closeModal(modal3));
window.addEventListener("click", (e) => outsideClick(e, modal3));

const modal4 = document.getElementById("simpleModal-4");
const openBtn4 = document.getElementById("openBtn4");
const closeBtn4 = document.getElementById("closeBtn4");
openBtn4.addEventListener("click", () => openModal(modal4));
closeBtn4.addEventListener("click", () => closeModal(modal4));
window.addEventListener("click", (e) => outsideClick(e, modal4));

const modal5 = document.getElementById("simpleModal-5");
const openBtn5 = document.getElementById("openBtn5");
const closeBtn5 = document.getElementById("closeBtn5");
openBtn5.addEventListener("click", () => openModal(modal5));
closeBtn5.addEventListener("click", () => closeModal(modal5));
window.addEventListener("click", (e) => outsideClick(e, modal5));

const modal6 = document.getElementById("simpleModal-6");
const openBtn6 = document.getElementById("openBtn6");
const closeBtn6 = document.getElementById("closeBtn6");
openBtn6.addEventListener("click", () => openModal(modal6));
closeBtn6.addEventListener("click", () => closeModal(modal6));
window.addEventListener("click", (e) => outsideClick(e, modal6));
