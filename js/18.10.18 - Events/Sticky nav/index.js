const nav = document.querySelector('#navigation');
let topOfNav = nav.offsetTop;
console.log(topOfNav);

function fixNav() {
    console.log('scroll',window.scrollY);
  if(window.scrollY >= topOfNav) {

      document.body.style.paddingTop = `${nav.offsetHeight}px`;
    nav.classList.add('fixed-nav');
  } else {
    nav.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);


function showScroll() {
  console.log(Window.scrollY);
}
window.addEventListener('scroll',showScroll);
