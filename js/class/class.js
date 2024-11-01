window.addEventListener("load", function () {
  const sw_class_mainimg = new Swiper(".sw-main-img", {
    loop: true,
    slidesPerView: 1.8, // 보여지는 슬라이드 개수
    centeredSlides: true,
    spaceBetween: 16, // 슬라이드 간의 간격
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  function updateSwiperSpaceBetween_a() {
    if (window.innerWidth <= 768) {
      sw_class_mainimg.params.spaceBetween = 7; // 너비가 560px 이하일 때 간격 7
    } else {
      sw_class_mainimg.params.spaceBetween = 16; // 기본 간격 16
    }
    sw_class_mainimg.update(); // 변경 사항 업데이트
  }
  function updateSwiperSpaceBetween_b() {
    if (window.innerWidth <= 420) {
      sw_class_mainimg.params.spaceBetween = 5; // 너비가 560px 이하일 때 간격 7
    }
    sw_class_mainimg.update(); // 변경 사항 업데이트
  }

  window.addEventListener("resize", updateSwiperSpaceBetween_a);
  updateSwiperSpaceBetween_a(); // 처음 로드될 때도 적용
  window.addEventListener("resize", updateSwiperSpaceBetween_b);
  updateSwiperSpaceBetween_b(); // 처음 로드될 때도 적용
});
