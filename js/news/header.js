window.addEventListener("load", function () {
  // 요소 선택
  const loginText = document.getElementById("loginText");
  const loginIcon = document.getElementById("loginIcon");
  const userInfoNickName = document.getElementById("userInfoNickName");
  const userInfoId = document.getElementById("userInfoId");
 
  const logOut = document.getElementById("logOut");
  const iconContainer = document.getElementById("iconContainer");
  const userInfo = document.getElementById("userInfo");
  const userInfoSecond = document.getElementById("userInfoSecond");
  const notice = document.getElementById("notice");
  const noticeNone = document.getElementById("noticeNone");
  const myTeach = document.getElementById("myTeach");
  const teachList = document.getElementById("teachList");
  const searchShow = document.getElementById("searchShow");
  const searchDelete = document.getElementById("searchDelete");
  const searchXmark = document.getElementById("searchXmark");
  const menu = document.querySelector(".menu");
  const userInfoDelete = document.getElementById("userInfoDelete");
  const cateNomal = document.getElementById("cateNomal");
  const cateAllList = document.getElementById("cateAllList");
  const cateHard = document.getElementById("cateHard");
  const catelistHard = document.querySelectorAll(".catelistHard");
  const cateBar = document.getElementById("cateBar");
  const cateBarClick = document.getElementById("cateBarClick");
  const cateLeft = document.getElementById("cateLeft");
  const openCate = document.querySelector(".open-cate");
  const cateBox = document.querySelector(".cate-box");
  const cateBack = document.querySelector(".cate-background");
  const floatingBtn = this.document.querySelector(".floating-btn");
  // 로그인 상태에 따른 UI 업데이트
  const userFind = JSON.parse(localStorage.getItem("userFind"));

 
  floatingBtn.addEventListener("click", function () {
    if (userFind) {
      window.location.href = "c_study_class.html";
    } else {
      window.location.href = "login.html";
    }
  });

  myTeach.addEventListener("click", function () {
    window.location.href = "my_menu.html";
  });
  if (userFind) {
    loginText.style.display = "none";
    loginIcon.style.display = "block";
    userInfoNickName.textContent = `${userFind.usernickname} 님 환영합니다!`;
    userInfoId.textContent = `아이디 : ${userFind.userName}`;
   
  } else {
    loginText.style.display = "inline-block";
    loginIcon.style.display = "none";
    const loginNickName = document.getElementById("loginNickName");
    if (loginNickName) loginNickName.style.display = "none";
  }

  // 로그인 및 로그아웃 이벤트
  loginIcon.addEventListener("click", function () {
    iconContainer.style.display = iconContainer.style.display === "block" ? "none" : "block";
  });

  userInfoDelete.addEventListener("click", function () {
    iconContainer.style.display = "none";
  });

  logOut.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("userFind");
    loginText.style.display = "inline-block";
    loginIcon.style.display = "none";
    userInfoNickName.textContent = "";
    userInfoId.textContent = "";
  
    iconContainer.style.display = "none";
    alert("로그아웃이 완료되었습니다.");
  });

  // 검색창 토글
  searchShow.addEventListener("click", function () {
    searchDelete.style.display = searchDelete.style.display === "block" ? "none" : "block";
  });

  searchXmark.addEventListener("click", function () {
    searchDelete.style.display = "none";
    searchShow.style.display = "block";
  });

  // 메뉴 토글
  myTeach.addEventListener("click", function () {
    teachList.style.display = teachList.style.display === "block" ? "none" : "block";
  });

  notice.addEventListener("click", function () {
    noticeNone.style.display = noticeNone.style.display === "block" ? "none" : "block";
  });

  cateHard.addEventListener("click", function () {
    catelistHard.forEach((item) => {
      item.style.display = item.style.display === "block" ? "none" : "block";
    });
  });

  cateNomal.addEventListener("click", function () {
    cateAllList.style.display = cateAllList.style.display === "block" ? "none" : "block";
  });

  // 삼각바 클릭 시 카테고리 바 토글 애니메이션
  cateBar.addEventListener("click", function () {
    cateBarClick.style.display = "block";
    cateBarClick.classList.add("slide-down");
    cateBarClick.classList.remove("slide-up");
  });

  // cateLeft 클릭 시 cateBarClick 숨기기 애니메이션
  cateLeft.addEventListener("click", function () {
    cateBarClick.classList.add("slide-up");
    cateBarClick.classList.remove("slide-down");
    cateBarClick.addEventListener("animationend", function handleSlideUp() {
      cateBarClick.style.display = "none";
      cateBarClick.classList.remove("slide-up");
      cateBarClick.removeEventListener("animationend", handleSlideUp);
    });
  });

  // // 카테고리 메뉴 토글
  // openCate.addEventListener("click", function () {
  //   cateBox.classList.toggle("active");
  //   cateBack.classList.toggle("active");
  //   searchDelete.style.display = "none";
  // });

  // cateBack.addEventListener("click", function () {
  //   cateBack.classList.remove("active");
  //   cateBox.classList.remove("active");
  // });

  // 반응형 적용
  function applyResponsiveEffect() {
    if (window.innerWidth <= 768) {
      userInfo.style.display = "block";
      userInfoSecond.style.display = "block";
      menu.classList.add("hidden");
      cateBar.style.display = "block"; // 768px 이하에서는 cateBar를 보이게
    } else {
      userInfo.style.display = "none";
      userInfoSecond.style.display = "none";
      menu.classList.remove("hidden");
      cateBar.style.display = "none"; // 768px 이상에서는 cateBar를 숨김
      cateBarClick.style.display = "none"; // 카테고리 메뉴도 함께 숨김
    }
  }
  //외부입력시에도 토글
  document.addEventListener("click", function (event) {
    const isClickInsideIconContainer = iconContainer.contains(event.target) || loginIcon.contains(event.target);
    const isClickInsideSearchDelete = searchDelete.contains(event.target) || searchShow.contains(event.target);
    const isClickInsideCateBarClick = cateBarClick.contains(event.target) || cateBar.contains(event.target);

    // 각 요소 외부 클릭 시 display: none 처리
    if (!isClickInsideIconContainer) {
      iconContainer.style.display = "none";
    }

    if (!isClickInsideSearchDelete) {
      searchDelete.style.display = "none";
    }

    if (!isClickInsideCateBarClick) {
      cateBarClick.style.display = "none";
    }
  });

  // 초기 실행 및 리사이즈 이벤트 추가
  applyResponsiveEffect();
  window.addEventListener("resize", applyResponsiveEffect);

  // 로고 클릭 시 메인 페이지로 이동
  const headerLogo = document.querySelector(".logo");
  headerLogo.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  // 로그인 버튼 클릭 시 로그인 페이지로 이동
  loginText.addEventListener("click", function () {
    window.location.href = "login.html";
  });

  const loginMove = document.getElementById("login-btn");
  loginMove.addEventListener("click", function () {
    window.location.href = "login.html";
  });
});
