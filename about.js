var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation-id").style.top = "0";
  } else {
    document.getElementById("navigation-id").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}