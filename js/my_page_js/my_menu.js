window.addEventListener("load", function () {
  const users = JSON.parse(localStorage.getItem("userFind")) || [];
  const log_nicknamr = document.querySelector(".log_nicknamr");

  const user_nickname_tag = `
  <div class="my_info_wrap">
  <div class="my_menu_user_profile"><img src="images/icon/o_profile.png" alt="기본_프로필_이미지"></div>
  <div class="my_menu_user_name"><h2>${users.usernickname}</h2>님 환영합니다.</div>
  </div>
  <div class="my_preference"><i class="fa-solid fa-gear"></i></div>
  `;
  log_nicknamr.innerHTML = user_nickname_tag;

  // 포인트 소식 슬라이드 구역
  const sw_point = new Swiper(".sw_point", {
    slidesPerView: 3.4, // 보여지는 슬라이드 개수
    spaceBetween: 16, // 슬라이드 간의 간격
  });

  function updateSwiperSpaceBetween_a() {
    if (window.innerWidth <= 768) {
      sw_point.params.slidesPerView = 2.3; // 너비가 560px 이하일 때 간격 7
      sw_point.params.spaceBetween = 10; // 너비가 560px 이하일 때 간격 7
    } else {
      sw_point.params.slidesPerView = 3.4; // 기본 간격 16
      sw_point.params.spaceBetween = 16; // 너비가 560px 이하일 때 간격 7
    }
    sw_point.update(); // 변경 사항 업데이트
  }
  function updateSwiperSpaceBetween_b() {
    if (window.innerWidth <= 420) {
      sw_point.params.slidesPerView = 1.3; // 너비가 560px 이하일 때 간격 7
      sw_point.params.spaceBetween = 8; // 너비가 560px 이하일 때 간격 7
    }
    sw_point.update(); // 변경 사항 업데이트
  }

  window.addEventListener("resize", updateSwiperSpaceBetween_a);
  updateSwiperSpaceBetween_a(); // 처음 로드될 때도 적용
  window.addEventListener("resize", updateSwiperSpaceBetween_b);
  updateSwiperSpaceBetween_b(); // 처음 로드될 때도 적용

  // 메뉴 클릭시 화면 나타남
  const my_menu = this.document.querySelectorAll(".my_menuList > li");
  const menu_page = this.document.querySelectorAll(".menu_page > .mp");

  //   로드시 활성화 메뉴랑 카드 index[0]
  my_menu[0].classList.add("active");
  menu_page[0].classList.add("active");

  my_menu.forEach(function (my_menus, index) {
    // console.log(menuItem);
    my_menus.addEventListener("click", function () {
      // //   클릭된 메뉴와 해당하는 카드를 비활성화
      my_menu.forEach(function (item) {
        // console.log(item);
        item.classList.remove("active");
      });
      menu_page.forEach(function (menu_pages) {
        menu_pages.classList.remove("active");
      });
      //   클릭된 메뉴와 해당하는 카드를 활성화
      my_menu[index].classList.add("active");
      menu_page[index].classList.add("active");
    });
  });

  // 과제 제출 유효성 검사
  const project_work_form = document.querySelectorAll(".project_work_form");
  project_work_form.forEach(function (project_work_forms) {
    const class_sd_submit = this.document.querySelector(".class_sd_submit");
    class_sd_submit.addEventListener("click", function () {
      if (this.innerHTML === `닫기`) {
        this.innerHTML = `제출하기`; // 원래 텍스트로 바꿔주세요 (예: "열기" 또는 "제출")
      } else {
        this.innerHTML = `닫기`;
      }
    });
    project_work_forms.addEventListener("submit", function (event) {
      event.preventDefault();
      // 사용자가 입력한 사용자명과 비밀번호를 가져온다
      const title = document.querySelector(".title");
      const memo = document.querySelector(".memo");
      const work = document.querySelector(".work");
      const s_p_title = title.value.trim();
      const s_p_memo = memo.value.trim();
      const s_p_img = work.value.trim();
      // console.log(username ,password);
      // 사용자명과 비밀번호의 유효성을 정규 표현식을 사용
      //   사용자명은 영문자와 숫자로만 이루어져야 합니다.하여 확인합니다.
      const subWorks = {
        s_p_title: s_p_title,
        s_p_memo: s_p_memo,
        s_p_img: s_p_img,
      };
      // console.log(newUser);//{username: 'ha12', password: '123456778'}
      // 로컬 스토리지에 사용자 정보를 저장합니다.
      // 이전에 로컬 스토리지에 저장된 사용자 정보를 가져오기 위해 localStorage.getItem("users")를 사용합니다.
      // 만약에 사용자 정보가 없다면 빈 배열 ([])를 기본 값으로 사용
      const usersWork = JSON.parse(localStorage.getItem("usersWork")) || [];
      // 새로운 사용자 객체 newUser 를 이전 사용자 정보에 배열에 (users)를 추가
      usersWork.push(subWorks);

      localStorage.setItem("usersWork", JSON.stringify(usersWork));
      alert("과제 제출이 완료 되었습니다.");
      const p_w_sub_btn = document.querySelector(".p_w_sub_btn");
      p_w_sub_btn.innerHTML = `과제 수정하기`;
      const closeForm = this.closest(".submit_project_work");
      closeForm.style.display = "none";
      const previousSibling = closeForm.previousElementSibling;
      const class_sd_submit = previousSibling.querySelector(".class_sd_submit");
      class_sd_submit.innerHTML = "수정하기";
      class_sd_submit.classList.add("color_done");
      const main_middle = previousSibling.previousElementSibling;
      const main_s_pt = main_middle.previousElementSibling;
      const class_title_span = main_s_pt.querySelector(".class_title > span");
      class_title_span.innerHTML = `과제제출 완료`;
      class_title_span.classList.add("color_done");
    });
  });
});
