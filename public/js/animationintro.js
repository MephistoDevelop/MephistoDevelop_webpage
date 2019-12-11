window.onload = function() {
  //  Wrap every letter in a span
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

  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml2 .letter",
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70 * i
    })
    .add({
      targets: ".ml2",
      opacity: 0,
      duration: 100000,
      easing: "easeOutExpo",
      delay: 1000
    });

  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml3 .letter",
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70 * i
    })
    .add({
      targets: ".ml3",
      opacity: 0,
      duration: 100000,
      easing: "easeOutExpo",
      delay: 1000
    });
};
