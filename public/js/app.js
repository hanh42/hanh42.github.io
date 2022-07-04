
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


let x = document.querySelector('.navbar');
$(Document).ready(function(){
$('.navbar-toggler-icon').click(function(){
  $('.card_mobile-screen').slideToggle();
})
})


//mobile-slideUp | slidedown

let btn2 = document.querySelector('.item2-mobile2.btn2x');
btn2.style.display ='none';
let btn1 =  document.querySelector('.item2-mobile2.btn1x');
let para = document.querySelector('.p1');
para .style.display = 'none';
$(document).ready(function(){

  $(".btn2x").click(function(){
    $(".p1").slideDown();
    btn1.style.display = 'block';
    btn2.style.display = 'none';
    btn1.style.color = 'yellow'
  });
  
  $(".btn1x").click(function(){
    $(".p1").slideUp();
    btn2.style.display = 'block';
    btn1.style.display = 'none';
    btn2.style.color = 'yellow'
  });
});

let btn4 = document.querySelector('.item2-mobile2.btn4x');
btn4.style.display ='none';
let btn3 =  document.querySelector('.item2-mobile2.btn3x');
let para2 = document.querySelector('.p2');
para2.style.display = 'none';
$(document).ready(function(){
  $(".btn3x").click(function(){
    $(".p2").slideUp();
    btn4.style.display = 'block';
    btn3.style.display = 'none';
    btn4.style.color = 'yellow'
  });

  $(".btn4x").click(function(){
    $(".p2").slideDown();
    btn3.style.display = 'block';
    btn4.style.display = 'none';
    btn3.style.color = 'yellow'
  });
});

let btn6 = document.querySelector('.item2-mobile2.btn6x');
btn6.style.display ='none';
let btn5 =  document.querySelector('.item2-mobile2.btn5x');
let para3 = document.querySelector('.p3');
para3.style.display = 'none';
$(document).ready(function(){
  $(".btn5x").click(function(){
    $(".p3").slideUp();
    btn6.style.display = 'block';
    btn5.style.display = 'none';
    btn6.style.color = 'yellow'
  });

  $(".btn6x").click(function(){
    $(".p3").slideDown();
    btn5.style.display = 'block';
    btn6.style.display = 'none';
    btn5.style.color = 'yellow'
  });
});

let btn8 = document.querySelector('.item2-mobile2.btn8x');
btn8.style.display ='none';
let btn7 =  document.querySelector('.item2-mobile2.btn7x');
let para4 = document.querySelector('.p4');
para4.style.display = 'none';
$(document).ready(function(){
  $(".btn7x").click(function(){
    $(".p4").slideUp();
    btn8.style.display = 'block';
    btn7.style.display = 'none';
    btn8.style.color = 'yellow'
  });

  $(".btn8x").click(function(){
    $(".p4").slideDown();
    btn7.style.display = 'block';
    btn8.style.display = 'none';
    btn7.style.color = 'yellow'
  });
});

let btn10 = document.querySelector('.item2-mobile2.btn10x');
btn10.style.display ='none';
let btn9 =  document.querySelector('.item2-mobile2.btn9x');
let para5 = document.querySelector('.p5');
para5.style.display = 'none';
$(document).ready(function(){
  $(".btn9x").click(function(){
    $(".p5").slideUp();
    btn10.style.display = 'block';
    btn9.style.display = 'none';
    btn10.style.color = 'yellow'
  });

  $(".btn10x").click(function(){
    $(".p5").slideDown();
    btn9.style.display = 'block';
    btn10.style.display = 'none';
    btn9.style.color = 'yellow'
  });
});


let btn12 = document.querySelector('.item2-mobile2.btn12x');
btn12.style.display ='none';
let btn11 =  document.querySelector('.item2-mobile2.btn11x');
let para6 = document.querySelector('.p6');
para6.style.display = 'none';
$(document).ready(function(){
  $(".btn11x").click(function(){
    $(".p6").slideUp();
    btn12.style.display = 'block';
    btn11.style.display = 'none';
    btn12.style.color = 'yellow'
  });

  $(".btn12x").click(function(){
    $(".p6").slideDown();
    btn11.style.display = 'block';
    btn12.style.display = 'none';
    btn11.style.color = 'yellow'
  });
});



//carousel
$('.owl-carousel').owlCarousel({
  stagePadding: 0,
  loop:true,
  margin:30,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      700:{
          items:2
      },
      1200:{
          items:3
      }
  }
})



