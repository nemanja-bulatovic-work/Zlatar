var next1 = document.querySelector('#next1');
var next2 = document.querySelector('#next2');
var next3 = document.querySelector('#next3');
var prev1 = document.querySelector('#prev1');
var prev2 = document.querySelector('#prev2');
var prev3 = document.querySelector('#prev3');

function nextSlide(currentNum){
    var slides = document.querySelectorAll('.slide' + currentNum)
    var bullets = document.querySelectorAll('.bullet' + currentNum);
    var current = document.querySelector('.current' + currentNum);
    var btnCurrent = document.querySelector('.btn-current' + currentNum);
    
    current.classList.remove('current' + currentNum);
    btnCurrent.classList.remove('btn-current' + currentNum);
   
    if (current.nextElementSibling ) {
      current.nextElementSibling.classList.add('current' + currentNum);
      btnCurrent.nextElementSibling.classList.add('btn-current' + currentNum);
    } else {
      slides[0].classList.add('current' + currentNum);
      bullets[0].classList.add('btn-current' + currentNum);
    }
    setTimeout(function() { return current.classList.remove('current' + currentNum )});
  };
  
  function prevSlide(currentNum){
    var slides = document.querySelectorAll('.slide' + currentNum)
    var bullets = document.querySelectorAll('.bullet' + currentNum);
    var current = document.querySelector('.current' + currentNum);
    var btnCurrent = document.querySelector('.btn-current' + currentNum);
   
    current.classList.remove('current' + currentNum);
    btnCurrent.classList.remove('btn-current' + currentNum);
    
    if (current.previousElementSibling ) {
      current.previousElementSibling.classList.add('current' + currentNum);
      btnCurrent.previousElementSibling.classList.add('btn-current' + currentNum);
    } else {
      slides[slides.length - 1].classList.add('current' + currentNum);
      bullets[bullets.length - 1].classList.add('btn-current' + currentNum);
    }
    setTimeout(function() { return current.classList.remove('current' + currentNum)});
  };

next1.addEventListener('click', function(e) {
    nextSlide('1');
  });
  
  prev1.addEventListener('click', function(e){
    prevSlide('1');
  });
  

  next2.addEventListener('click', function(e) {
    nextSlide('2');
  });
  
  prev2.addEventListener('click', function(e){
    prevSlide('2');
  });

  next3.addEventListener('click', function(e) {
    nextSlide('3');
  });
  
  prev3.addEventListener('click', function(e){
    prevSlide('3');
  });
  