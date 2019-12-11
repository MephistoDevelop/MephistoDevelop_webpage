window.onload = function() {
  var textWrapper = document.querySelector(".ml2");
  var textWrapper2 = document.querySelector(".ml3");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  textWrapper2.innerHTML = textWrapper2.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline({ loop: false }).add({
    targets: ".ml2 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i
  });

  anime.timeline({ loop: false }).add({
    targets: ".ml3 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i
  });
};
