function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  document.getElementById('scrollButton').addEventListener('click', function() {
          window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth'
          });
      });


      const swiper = new Swiper(".swiper", {
        spaceBetween: 20,
          slidesPerView: 1,
          pagination: {
          el: '.swiper-pagination',
          },
          breakpoints:{
        0:{
            slidesPerView:1,
        },
        520:{
            slidesPerView:2,
        },
        950:{
            slidesPerView:3,
        },
    },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    document.getElementById("prevBtn").addEventListener("click", () => swiper.slidePrev());
      document.getElementById("nextBtn").addEventListener("click", () => swiper.slideNext());
