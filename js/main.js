  // 메인
  $('h2').click(function(){
    alert('페이지가 없습니다.');
  });

  // Swiper
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 40,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


    // WHATS NEW
    var swiper = new Swiper(".what-swiper", {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: ".what-next",
        prevEl: ".what-prev",
      },
    });

    // MAKE IT YOURS
     var swiper = new Swiper(".makeIt", {
       slidesPerView: 6,
       spaceBetween: 40,
       slidesPerGroup: 1,
       loopFillGroupWithBlank: true,
       navigation: {
         nextEl: ".makeIt-next",
         prevEl: ".makeIt-prev",
       },
    });


    //BEAUTY PICK
    //큰박스
    var swiper = new Swiper(".beautyBig", {
      spaceBetween: 40,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".beauty-next",
        prevEl: ".beauty-prev",
      },
    });


    $('.newsBox01_ul a').click(function(e){
         var selected02 = '.' + $(this).attr('data-tab');
         $('.New2-12 ul').not(selected02).hide();
         $(selected02).fadeIn();
         $(this).addClass('active').siblings().removeClass('active')
    });
   
    // WDNA STYLE 
    $('.tabs-nav a').click(function(e){
         var selected = '.' + $(this).attr('data-tab');
         $('.wdnaStyle_box .wdnaStyle_box01 li').not(selected).hide();
         $(selected).fadeIn();
         $(this).addClass('active').siblings().removeClass('active');
    });

     let horizontalBar = document.getElementById("horizontal-underline");
     let horizontalMenus = document.querySelectorAll(".tabs-nav a");
      function horizontalIndicator(e) {
        horizontalBar.style.left = e.offsetLeft + "px";
        horizontalBar.style.width = e.offsetWidth + "px";
        horizontalBar.style.top = e.offsetTop + e.offsetHeight + "px";
      }
      
      horizontalMenus.forEach((menu) =>
        menu.addEventListener("click", (e) =>
          horizontalIndicator(e.currentTarget)
        )
      );

    

     
     