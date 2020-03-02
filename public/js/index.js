function gotop() {
  var body = $('html, body');
  body.stop().animate({ scrollTop: 0 }, 800, 'swing', function() {});
}
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
function changeDefOver(e) {
  e.target.classList.toggle('opacity-toggle');
}
var prevScrollpos = 0;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos && currentScrollPos <= 10) {
    document.getElementById('navbar-main').style.top = '0px';
    document.getElementById('backtop').style.marginLeft = '270px';
  } else {
    document.getElementById('navbar-main').style.top = '-100px';
    document.getElementById('backtop').style.marginLeft = '200px';
  }
  prevScrollpos = currentScrollPos;
};
