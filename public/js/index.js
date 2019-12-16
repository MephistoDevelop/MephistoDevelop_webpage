function gotop() {
  var body = $("html, body");
  body.stop().animate({ scrollTop: 0 }, 500, "swing", function() {});
}

function changeDefOver(e) {
  e.target.classList.toggle("opacity-toggle");
}
var prevScrollpos = 0;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-main").style.top = "0px";
    document.getElementById("backtop").style.marginLeft = "230px";
  } else {
    document.getElementById("navbar-main").style.top = "-50px";
    document.getElementById("backtop").style.marginLeft = "180px";
  }
  prevScrollpos = currentScrollPos;
};
