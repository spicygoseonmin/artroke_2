window.addEventListener("load", function () {
  // data.json을 로딩, 연결시킨다.
  const xhttp = new XMLHttpRequest();
  //    console.log(xhttp);
  xhttp.onreadystatechange = function (e) {
    const req = e.target;
    // console.log(req);
    if (req.readyState === XMLHttpRequest.DONE) {
      const str = req.response;
      // console.log(str);
      //   json문자열로 변화 JSON.parse(str)
      let obj = JSON.parse(str);
      //   console.log(obj);
      // 실기강의
      PRACTICE_CLASS = obj.practiceClass;
      showPracticeClass();
      // // 일반강의
      NORMAL_CLASS = obj.normalClass;
      showNormalClass();
      // 강사 소개
      // 배너
      // BANNER = obj.banner;
      // showBanner()
      // 금주의 소식
      NEWS = obj.news;
      showNews();
      // 수강생 후기
      REVIEW = obj.review;
      showReview();
      // 공모전 소식
      CONTEST = obj.contest;
      showContest();
    }
  };
  xhttp.open("GET", "data.json");
  xhttp.send();
  //   ==================
  // 실기강의
  let PRACTICE_CLASS;
  let practiceClassTag = this.document.getElementById("data-practiceClass");
  // 실기 강의 화면 출력 기능
  function showPracticeClass() {
    let html = `
    <div class="sw-class PC">
    <div class="sw-class_wrapper t_sw-class_wrapper">
    `;
    PRACTICE_CLASS.forEach(function (item) {
      let tag = `
              <div class="swiper-slide">
        <a href="#" class="pop_class_info">
          <img src="${item.pic}" alt="" />
          <span class="rank">${item.rank}</span>
          <div class="mark"></div>
          <div class="class-txt-wrap">
            <div class="class-cate">${item.cate}›</div>
            <div class="class-title">
              ${item.title}
            </div>
            <div class="class-instructor-wrap">
              <div class="instructor-info">
                <div class="instructor-name">${item.instructor}</div>
                <div class="instructor-info-line"></div>
                <div class="instructor-level">${item.level}</div>
                <div class="instructor-info-line"></div>
                <div class="instructor-time">${item.time}</div>
              </div>
              <div class="class-price">
                <div class="price">${item.price}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
        `;
      html += tag;
    });
    html += `
    </div>
    </div>
    `;
    practiceClassTag.innerHTML = html;
    // const swClass = new Swiper(".PC", {
    //   breakpoints:{
    //     1232:{
    //       slidesPerView: 4,
    //       spaceBetween: 10,
    //       slidesPerGroup: 4,
    //     },
    //     768:{
    //       slidesPerView:2.8,
    //       spaceBetween: 10,
    //       slidesPerGroup: 2,
    //     },
    //     720:{
    //       slidesPerView:2.8,
    //       spaceBetween: 10,
    //       slidesPerGroup: 2,
    //     },
    //     600:{
    //       slidesPerView:2.5,
    //       spaceBetween: 10,
    //       slidesPerGroup: 2,
    //     },
    //     480:{
    //       slidesPerView:2.2,
    //       spaceBetween: 10,
    //       slidesPerGroup: 1,
    //     },
    //     420:{
    //       slidesPerView:1.8,
    //       spaceBetween: 10,
    //       slidesPerGroup: 1,
    //     },
    //     360:{
    //       slidesPerView:1.5,
    //       spaceBetween: 10,
    //       slidesPerGroup: 1,
    //     },
    //     320:{
    //       slidesPerView:1.5,
    //       spaceBetween: 10,
    //       slidesPerGroup: 1,
    //     },
    //   },
    //   navigation: {
    //     prevEl: ".practice-class .slide-prev",
    //     nextEl: ".practice-class .slide-next",
    //   },
    // });
    const mark = this.document.querySelectorAll(".PC .mark");
    mark.forEach(function (item, index) {
      // console.log(item);
      // console.log(index);
      item.addEventListener("click", function () {
        item.classList.toggle("active");
      });
    });
    const t_class_btn = document.getElementById("t_class_btn");
    const t_class_wrap = document.querySelector(".t_sw-class_wrapper");
    t_class_btn.addEventListener("click", function () {
      t_class_wrap.classList.add("active");
      t_class_btn.style.display = "none";
    });
  }
  // -------
  // 일반강의
  let NORMAL_CLASS;
  let normalClassTag = this.document.getElementById("data-normalClass");
  // 일반 강의 화면 출력 기능
  function showNormalClass() {
    let html = `
    <div class="sw-class NC">
    <div class="sw-class_wrapper c_sw-class_wrapper">
    `;
    NORMAL_CLASS.forEach(function (item) {
      let tag = `
              <div class="swiper-slide">
        <a href="#" class="pop_class_info">
          <img src="${item.pic}" alt="" />
          <span class="rank">${item.rank}</span>
          <div class="mark"></div>
          <div class="class-txt-wrap">
            <div class="class-cate">${item.cate}›</div>
            <div class="class-title">
              ${item.title}
            </div>
            <div class="class-instructor-wrap">
              <div class="instructor-info">
                <div class="instructor-name">${item.instructor}</div>
                <div class="instructor-info-line"></div>
                <div class="instructor-level">${item.level}</div>
                <div class="instructor-info-line"></div>
                <div class="instructor-time">${item.time}</div>
              </div>
              <div class="class-price">
                <div class="price">${item.price}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
        `;
      html += tag;
    });
    html += `
    </div>
    </div>
    `;
    normalClassTag.innerHTML = html;
    // const swClass = new Swiper(".NC", {
    //   breakpoints:{
    //     1232:{
    //       slidesPerView: 4,
    //       spaceBetween: 10,
    //       slidesPerGroup: 4,
    //     },
    //     768:{
    //       slidesPerView:2.8,
    //       spaceBetween: 10,
    //       slidesPerGroup: 2,
    //     },
    //     720:{
    //       slidesPerView:2.8,
    //       spaceBetween: 10,
    //       slidesPerGroup: 2,
    //     },
    //     600:{
    //       slidesPerView:2.5,
    //       spaceBetween: 10,
    //       slidesPerGroup: 2,
    //     },
    //     480:{
    //       slidesPerView:2.2,
    //       spaceBetween: 10,
    //       slidesPerGroup: 1,
    //     },
    //     420:{
    //       slidesPerView:1.8,
    //       spaceBetween: 10,
    //       slidesPerGroup: 1,
    //     },
    //     360:{
    //       slidesPerView:1.5,
    //       spaceBetween: 10,
    //       slidesPerGroup: 1,
    //     },
    //     320:{
    //       slidesPerView:1.5,
    //       spaceBetween: 10,
    //       slidesPerGroup: 1,
    //     },

    //   },
    //   navigation: {
    //     prevEl: ".normal-class .slide-prev",
    //     nextEl: ".normal-class .slide-next",
    //   },
    // });
    const mark = this.document.querySelectorAll(".NC .mark");
    mark.forEach(function (item, index) {
      // console.log(item);
      // console.log(index);
      item.addEventListener("click", function () {
        item.classList.toggle("active");
      });
    });
    const c_class_btn = document.getElementById("c_class_btn");
    const c_class_wrap = document.querySelector(".c_sw-class_wrapper");
    c_class_btn.addEventListener("click", function () {
      c_class_wrap.classList.add("active");
      c_class_btn.style.display = "none";
    });
  }
  // 강사 소개
  // 배너
  // let BANNER;
  // let bannerTag = this.document.getElementById("data-banner");
  // // 배너 화면 출력 기능
  // function showBanner(){
  //   let html = `
  //   <div class="swiper sw-banner">
  //   <div class="swiper-wrapper">
  //   `
  //   BANNER.forEach(function(item){
  //     let tag = `
  //     <div class="swiper-slide">
  //               <a href="${item.link}" class="banner-img">
  //                 <img src="${item.img}" alt="배너 이미지">
  //               </a>
  //             </div>
  //     `
  //     html += tag
  //   })
  //   html += `
  //   </div></div>
  //   `
  //   bannerTag.innerHTML = html;
  // }
  // 금주의 소식
  let NEWS;
  let newsTag = this.document.getElementById("data-news");
  // 금주의 소식 화면 출력 기능
  function showNews() {
    let html = ``;
    NEWS.forEach(function (item) {
      let tag = `
      <li>
                <h3>아트로크</h3>
                <div class="news-info">
                  <a href="#" class="news-title">${item.title}</a>
                  <p class="news-date">${item.date}</p>
                </div>
                <div class="news-more"><a href="#">알아보기</a></div>
              </li>
      `;
      html += tag;
    });
    newsTag.innerHTML = html;
    //
    const swBanner = new Swiper(".sw-banner", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5000,
      },
    });
  }
  // 수강생 후기
  let REVIEW;
  let reviewTag = this.document.getElementById("data-review");
  // 수강생 후기 화면 출력 기능
  function showReview() {
    let html = `
    <div class="swiper sw-review">
    <div class="swiper-wrapper">
    `;
    REVIEW.forEach(function (item) {
      let tag = `
        <div class="swiper-slide">
          <a href="#" class="review-wrap">
            <div class="review-img">
              <img src="${item.img}" alt="후기 이미지" />
              <div class="review-ev">
                <p class="review-user-name">${item.userName}</p>
                <img src="images/review/5stars.png" alt="별점" />
              </div>
            </div>
            <div class="review-txt-wrap">
              <div class="review-class">${item.class}</div>
              <div class="review-content">${item.content}</div>
            </div>
          </a>
        </div>
      `;
      html += tag;
    });
    html += `
    </div>
    </div>
    `;
    reviewTag.innerHTML = html;
    //
    const swReview = new Swiper(".sw-review", {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        prevEl: ".review .slide-prev",
        nextEl: ".review .slide-next",
      },
    });
  }
  // 공모전 소식
  let CONTEST;
  let contestTag = this.document.getElementById("data-contest");
  // 공모전 소식 화면 출력기능
  function showContest() {
    let html = `
    <div class="swiper sw-contest">
    <div class="swiper-wrapper">
    `;
    CONTEST.forEach(function (item) {
      // console.log(item);

      function calculateDDay(targetDate) {
        const today = new Date(); // 현재 날짜
        const target = new Date(targetDate); // 목표 날짜

        // 두 날짜 사이의 차이 (밀리초 단위)
        const difference = target - today;

        // 차이를 일(day) 단위로 변환
        const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
        // console.log(daysLeft);

        if (daysLeft > 0) {
          return `D-${daysLeft}`;
        } else if (daysLeft === 0) {
          return "D-Day";
        } else {
          return `D+${Math.abs(daysLeft)}`; // 날짜가 지났을 경우
        }
      }
      const targetDate = item.targetDate;
      // console.log(targetDate);
      // D-Day 계산
      const dDayText = calculateDDay(targetDate);

      let tag = `
      <div class="swiper-slide">
                  <a href="#" class="contests">
                    <div class="contest-img">
                      <img src="${item.img}" alt="공모전 이미지">
                    </div>
                    <div class="contest-txt-wrap">
                      <div class="contest-title">${item.title}</div>
                      <div class="contest-date-wrap">
                        <div class="contest-Dday">${dDayText}</div>
                        <div class="contest-date">${item.startDate}<br>~${item.endDate}</div>
                      </div>
                    </div>
                  </a>
                </div>
      `;
      html += tag;
    });
    html += `</div></div>`;
    contestTag.innerHTML = html;
    const swContest = new Swiper(".sw-contest", {
      breakpoints: {
        1231: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        720: {
          slidesPerView: 3.5,
          spaceBetween: 10,
        },
        660: {
          slidesPerView: 3.2,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 2.8,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2.3,
          spaceBetween: 10,
        },
        420: {
          slidesPerView: 1.8,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        // 320:{
        //   slidesPerView: 1.2,
        //   spaceBetween: 10,
        // }
      },
    });
  }

  //
  const swBbanner = new Swiper(".sw-Bbanner", {
    loop: true,
  });
  const swBmbanner = new Swiper(".sw-Bmbanner", {
    loop: true,
  });
});
//
