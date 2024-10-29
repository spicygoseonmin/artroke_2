window.addEventListener("load", function () {
  // data.json을 로딩, 연결시킨다.
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function (e) {
    const req = e.target;

    if (req.readyState === XMLHttpRequest.DONE) {
      const str = req.response;
      // console.log(str);
      //   json문자열로 변화 JSON.parse(str)
      let obj = JSON.parse(str);
      // console.log(obj)
      //   일반강의
      C_CLASS_LIST = obj.cclass;
      // 강의를 rank 순으로 정렬한 후 출력
      const sortedClasses = [...C_CLASS_LIST].sort((a, b) => a.rank - b.rank);
      // 일반강의 화면 배치
      show_C_class(sortedClasses);
    }
  };
  //   자료호출
  xhttp.open("GET", "class_data.json");
  xhttp.send();

  //일반강의 목록======================================
  let C_CLASS_LIST;
  let classList = this.document.getElementById("class_lists");

  // 일반강의 출력기능======================================
  function show_C_class(sortedClasses = C_CLASS_LIST) {
    let html = `
      <ul id="c-class_list_ul">
      `;
    sortedClasses.forEach(function (item) {
      const tag = `
              <li>
                  <div class="img_wrap">
                     <img src="images/main_ class_img/${item.url}" alt="${item.title}">
                      <div class="mark"></div>
                  </div>
                  <div class="text_wrap">
                      <div class="class-title">${item.title}</div>
                      <div class="instructor-info">
                          <div class="class-cate">${item.description}</div>
                          <div class="instructor-info-line"></div>
                          <div class="instructor-name">${item.teacher}</div>
                      </div>
                  </div>
              </li>
          `;
      html += tag;
    });
    html += `</ul>`;
    classList.innerHTML = html;
  }

  const btn_m = this.document.querySelectorAll(".m_js > li");
  btn_m.forEach(function (btn_ms, index) {
    btn_ms.addEventListener("click", function () {
      // 전체 버튼을 클릭한 경우 (index가 0이라고 가정)
      if (index === 0) {
        // 전체 강의 리스트를 다시 보여줌
        show_C_class(C_CLASS_LIST);
      } else {
        // 필터된 강의 리스트를 보여줌
        const changeClasses = C_CLASS_LIST.filter((a) => a.m_l === index);
        show_C_class(changeClasses);
      }
    });
  });
  const m_btn_m = this.document.querySelector(".m_m_js");
  const m_btn_m_op = this.document.querySelectorAll(".m_m_js > option");
  m_btn_m.addEventListener("change", function () {
    m_btn_m_op.forEach(function (op, index) {
      // 전체 버튼을 클릭한 경우 (index가 0이라고 가정)
      if (m_btn_m.value === index + "_o_menu") {
        if (m_btn_m.value === "all") {
          // 전체 강의 리스트를 다시 보여줌
          show_C_class(C_CLASS_LIST);
        } else {
          // 필터된 강의 리스트를 보여줌
          const changeClasses = C_CLASS_LIST.filter((a) => a.m_l === index);
          show_C_class(changeClasses);
        }
      }
    });
    if (m_btn_m.value === "all") {
      // 전체 강의 리스트를 다시 보여줌
      show_C_class(C_CLASS_LIST);
    }
  });

  // // 인기순 / 개강순 강의 나열
  const selectElement = document.querySelector(".p_or_o_select"); // <select> 요소 선택

  selectElement.addEventListener("change", function () {
    if (selectElement.value === "s_popular_num") {
      const sortedClasses = [...C_CLASS_LIST].sort((a, b) => a.rank - b.rank);
      show_C_class(sortedClasses);
    } else if (selectElement.value === "s_open_num") {
      const sortedClasses = [...C_CLASS_LIST].sort((a, b) => a.id - b.id);
      show_C_class(sortedClasses);
    }
  });

  // 강의 분야 클릭시 해당되는 강의 나타남=================================================================
  const menuList = document.querySelectorAll(".fixed_menu_wrap ul li");
  // console.log(menuList);
  menuList.forEach((menu) => {
    menu.addEventListener("click", function () {
      // 모든 메뉴에서 active 클래스 제거
      menuList.forEach((item) => item.classList.remove("active"));

      // 현재 클릭된 메뉴에 active 클래스 추가
      menu.classList.add("active");
    });
  });
});
