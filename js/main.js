var elOpenNav = document.querySelector('.site-header');
var elOpenToggle = document.querySelector('.js-site-header__btn');

elOpenToggle.addEventListener('click', function (){
  elOpenNav.classList.toggle('sitenav--open');
});