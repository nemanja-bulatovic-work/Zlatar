var bullets = document.querySelectorAll('.bullet');
var slides = document.querySelectorAll('.slide');
var next = document.querySelector('#next');
var prev = document.querySelector('#prev');
var auto = true; 
var intervalTime = 4000;
var slideInterval;

function nextSlide(){
 
    var current = document.querySelector('.current');
    var btnCurrent = document.querySelector('.btn-current');
    
    current.classList.remove('current');
    btnCurrent.classList.remove('btn-current');
   
    if (current.nextElementSibling && btnCurrent.nextElementSibling) {
      current.nextElementSibling.classList.add('current');
      btnCurrent.nextElementSibling.classList.add('btn-current');
    } else {
      slides[0].classList.add('current');
      bullets[0].classList.add('btn-current');
    }
    setTimeout(function() { return current.classList.remove('current')});
  };
  
  function prevSlide(){
   
    var current = document.querySelector('.current');
    var btnCurrent = document.querySelector('.btn-current');
   
    current.classList.remove('current');
    btnCurrent.classList.remove('btn-current');
    
    if (current.previousElementSibling && btnCurrent) {
      current.previousElementSibling.classList.add('current');
      btnCurrent.previousElementSibling.classList.add('btn-current');
    } else {
      slides[slides.length - 1].classList.add('current');
      bullets[bullets.length - 1].classList.add('btn-current');
    }
    setTimeout(function() { return current.classList.remove('current')});
  };
  
  
  next.addEventListener('click', function(e) {
    nextSlide();
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  });
  
  prev.addEventListener('click', function(e){
    prevSlide();
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  });
  
  if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
  }