// animações
AOS.init();

// faq
var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// menu mobile
let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

  document.body.style.overflow = show ? "hidden" : "initial"
  menuSection.classList.toggle("on", show)
  show = !show;
})


// scroll to top
var backTop = document.getElementById("up-arrow");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    backTop.classList.add("active");
  } else {
    backTop.classList.remove("active")
  }

}
