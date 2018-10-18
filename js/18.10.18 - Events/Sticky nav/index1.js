const nav = document.querySelector('.nav');
let topNav = nav.offsetTop;
console.log(topNav);



function showScroll() {
    if (window.scrollY >= topNav) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }
  }
  window.addEventListener('scroll',showScroll);