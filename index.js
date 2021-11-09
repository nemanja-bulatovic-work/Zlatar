var navigation = document.querySelector('.navigation-list');
var burger = document.querySelector('.navigation-burger');
var navigationLinks = document.querySelectorAll('.navigation-list-item');

var header = document.querySelector('.header');



function fixedHeader() {
  window.addEventListener('scroll', () => {
    console.log('ffeef')
      if(window.scrollY > 120){
          header.classList.add('fixed-header')
      }
       if(window.scrollY <= 0 ){
          header.classList.remove('fixed-header')
      }
  })
};

function navigationSlide() {
  burger.addEventListener('click', () => {
      document.getElementsByTagName('body')[0].classList.toggle('hidden')
      navigation.classList.toggle('navigation-list-active');
      burger.classList.toggle('toggle');
      navigationLinks.forEach((link, index) => {
          if(link.style.animation){
              link.style.animation= ``
          }else{
              link.style.animation= `navigationLinkFade 0.3s forwards ${index / 7 + 0.2}s`
          }
      });
  });
};

navigationSlide();
fixedHeader();