function containerCart() {
    var containerCart = document.querySelector('.containerCart');
    if (containerCart.style.display === 'block') {
      containerCart.style.display = 'none';
    } else {
      containerCart.style.display = 'block';
    }
  }
  
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    reveals.forEach((reveal) => {
      var windowHeight = window.innerHeight;
      var elementTop = reveal.getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add("active");
      } else {
        reveal.classList.remove("active");
      }
    });
  }
  
  window?.addEventListener("scroll", reveal);
  