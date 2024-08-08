let burger = document.querySelector('#burger');
let menu = document.querySelector('#menu');

burger.addEventListener('click', func);

function func() {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
}

//-------------------------------------------------

$(document).ready(function () {
   $('.slider').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
         {
            breakpoint: 1025,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
            }
         },
          {
            breakpoint: 769,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            }
         },
          {
            breakpoint: 481,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         }
      ]
   })
})

//---------------------------------------------------

let textCollection = document.querySelector('.collection__text');

$(document).ready(
   function () {
      $('.slick-prev').addClass('hidden');
      if (window.innerWidth > 1024) {
      textCollection.textContent = '1 из 3'
      } else if (window.innerWidth < 1025 && window.innerWidth > 768) {
         textCollection.textContent = '1 из 4'
      } else if (window.innerWidth < 769 && window.innerWidth > 480) {
         textCollection.textContent = '1 из 6'
      } else {
         textCollection.textContent = '1 из 12'
      }
   }
  
)



$('.slider').on('afterChange', function (event, slick, currentSlide) {
   
   

      if(currentSlide === 0) {
      $('.slick-prev').addClass('hidden');
   } else {
      $('.slick-prev').removeClass('hidden');
   
   }

   if (window.innerWidth > 1024) {
    
      if (currentSlide === 8) {
         $('.slick-next').addClass('hidden');
      } else {
         $('.slick-next').removeClass('hidden');
      }

      if (currentSlide < 4) {
         textCollection.textContent = '1 из 3'
      } else if (currentSlide >= 4 && currentSlide < 8) {
         textCollection.textContent = '2 из 3'
      } else if (currentSlide >= 8) {
         textCollection.textContent = '3 из 3'
      }
   } else if (window.innerWidth < 1025 && window.innerWidth > 768) {
     
      if (currentSlide === 9) {
         $('.slick-next').addClass('hidden');
      } else {
         $('.slick-next').removeClass('hidden');
      }

      if (currentSlide < 3) {
         textCollection.textContent = '1 из 4'
      } else if (currentSlide >= 3 && currentSlide < 6) {
         textCollection.textContent = '2 из 4'
      } else if (currentSlide >= 6 && currentSlide < 9) {
         textCollection.textContent = '3 из 4'
      } else if (currentSlide >= 9) {
         textCollection.textContent = '4 из 4'
      }
   } else if (window.innerWidth < 769 && window.innerWidth > 480) {
      if (currentSlide === 10) {
         $('.slick-next').addClass('hidden');
      } else {
         $('.slick-next').removeClass('hidden');
      }

      if (currentSlide < 2) {
         textCollection.textContent = '1 из 6'
      } else if (currentSlide >= 2 && currentSlide < 4) {
         textCollection.textContent = '2 из 6'
      } else if (currentSlide >= 4 && currentSlide < 6) {
         textCollection.textContent = '3 из 6'
      } else if (currentSlide >= 6 && currentSlide < 8) {
         textCollection.textContent = '4 из 6'
      } else if (currentSlide >= 8 && currentSlide < 10) {
         textCollection.textContent = '5 из 6'
      } else if (currentSlide >= 10) {
         textCollection.textContent = '6 из 6'
      }
   } else {
      if (currentSlide === 11) {
         $('.slick-next').addClass('hidden');
      } else {
         $('.slick-next').removeClass('hidden');
      }

      textCollection.textContent = `${currentSlide + 1} из 12` 
   }
  
    })
