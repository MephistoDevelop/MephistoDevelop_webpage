function changeDefOver(e) {
  e.target.classList.toggle("opacity-toggle");
}
var prevScrollpos = 0;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-main").style.top = "0px";
  } else {
    document.getElementById("navbar-main").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};
