window.addEventListener("load", function () {
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
      // const thumbnailList = document.querySelector(".img_thumbnail > .thumbnail_list");
      // work.addEventListener("change", function (e) {
      //   thumbnailList.innerHTML = ``;
      //   const files = work.files;

      //   for (let i = 0; i < files.length; i++) {
      //     const file = files[i];
      //     const reader = new FileReader();

      //     reader.onload = function (e) {
      //       // 썸네일 이미지를 생성하여 리스트에 추가
      //       const li = document.createElement("li");
      //       const img = document.createElement("img");
      //       img.src = e.target.result;
      //       // img.style.width = "100px"; // 썸네일 크기 지정
      //       // img.style.height = "100px"; // 썸네일 크기 지정
      //       li.appendChild(img);
      //       thumbnailList.appendChild(li);
      //     };
      //     reader.readAsDataURL(file);
      //   }
      // });

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
      // 사용자 정보 배열을 JSON 형식으로 문자열화하고,이를 로컬 스토리지에 users라는 키로 저장
      localStorage.setItem("usersWork", JSON.stringify(usersWork));
      // alert("가입이 완료 되었습니다. 로그인 페이지로 이동합니다.");
      // window.location.href = "login.html";
    });
  });
});
