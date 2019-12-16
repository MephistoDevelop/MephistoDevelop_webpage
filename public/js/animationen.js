window.onload = function() {
  this.animate_text3();
  this.animate_text4();
};

function animate_text3() {
  var textWrapper3 = document.querySelector(".ml4");

  textWrapper3.innerHTML = textWrapper3.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline({ loop: false }).add({
    targets: ".ml4 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i
  });
}

function animate_text4() {
  var textWrapper4 = document.querySelector(".ml5");

  textWrapper4.innerHTML = textWrapper4.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline({ loop: false }).add({
    targets: ".ml5 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i
  });
}
