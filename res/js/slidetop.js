function reveal() {
  var reveals = document.querySelectorAll(".slide-top");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 90;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("slide-top-active");
    }
///	else {
///     reveals[i].classList.remove("slide-top-active");
///    }
  }
}

window.addEventListener("scroll", reveal);

// check scroll pos on load
reveal();