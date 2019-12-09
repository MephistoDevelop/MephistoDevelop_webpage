window.onload = function() {
  var text2 = document.getElementById("texto");
  var newDom = "";
  var newDom2 = "";
  var animationDelay = 6;
  for (let i = 0; i < text.innerText.length; i++) {
    newDom +=
      '<span class="char">' +
      (text.innerText[i] == " " ? "&nbsp;" : text.innerText[i]) +
      "</span>";
  }
  for (let i = 0; i < text2.innerText.length; i++) {
    newDom2 +=
      '<span class="char">' +
      (text2.innerText[i] == " " ? "&nbsp;" : text2.innerText[i]) +
      "</span>";
  }

  text.innerHTML = newDom;
  text2.innerHTML = newDom2;
  var length = text.children.length;

  for (let i = 0; i < length; i++) {
    text.children[i].style["animation-delay"] = animationDelay * i + "ms";
  }
};
