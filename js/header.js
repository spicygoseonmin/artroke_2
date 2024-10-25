window.addEventListener("load", function () {
  // 로그인 상태에 따른 UI 업데이트
  const loginText = document.getElementById("loginText");
  const loginIcon = document.getElementById("loginIcon");
  const userInfoNickName = document.getElementById("userInfoNickName");
  const userInfoId = document.getElementById("userInfoId");
  const userInfoEmail = document.getElementById("userInfoEmail");
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
  const userInfoDelete = this.document.getElementById("userInfoDelete");
  const cateNomal = document.getElementById("cateNomal");
  const cateAllList = document.getElementById("cateAllList");
  const cateHard = this.document.getElementById("cateHard");
  const catelistHard = this.document.querySelectorAll(".catelistHard");
  const cateBar = document.getElementById("cateBar");
  const cateBarClick = document.getElementById("cateBarClick");
  const cateLeft = document.getElementById("cateLeft");
  const people = this.document.querySelector(".fa-solid fa-user")

  loginIcon.addEventListener("click", function () {
    // iconContainer의 display 상태를 토글합니다.
    if (iconContainer.style.display === "block") {
      iconContainer.style.display = "none";
    } else {
      iconContainer.style.display = "block";
    }
  });
  

  cateBar.addEventListener("click", function () {
    if (cateBarClick.style.display === "block") {
      cateBarClick.style.display = "none";
    } else {
      cateBarClick.style.display = "block";
    }
  });

  // cateLeft 클릭 시 cateBarClick 숨기기
  cateLeft.addEventListener("click", function () {
    cateBarClick.style.display = "none";
  });

  cateHard.addEventListener("click", function () {
    catelistHard.forEach((item) => {
      // console.log(item);
      if (item.style.display === "block") {
        item.style.display = "none";
      } else {
        item.style.display = "block";
      }
    });
  });

  cateNomal.addEventListener("click", function () {
    if (cateAllList.style.display === "block") {
      cateAllList.style.display = "none";
    } else {
      cateAllList.style.display = "block";
    }
  });

  userInfoDelete.addEventListener("click", function () {
    iconContainer.style.display = "none";
  });
  searchXmark.addEventListener("click", function () {
    if (searchDelete.style.display === "block") {
      searchDelete.style.display = "none";
      searchShow.style.display = "block";
    } else {
      searchShow.style.display = "block";
      searchDelete.style.display = "none";
    }
  });

  searchShow.addEventListener("click", function () {
    if (searchDelete.style.display === "block") {
      searchDelete.style.display = "none";
    } else {
      searchDelete.style.display = "block";
    }
  });

  myTeach.addEventListener("click", function () {
    if (teachList.style.display === "block") {
      teachList.style.display = "none";
    } else {
      teachList.style.display = "block";
    }
  });

  notice.addEventListener("click", function () {
    if (noticeNone.style.display === "block") {
      noticeNone.style.display = "none";
    } else {
      noticeNone.style.display = "block";
    }
  });

  loginText.addEventListener("click", function () {
    window.location.href = "login.html";
  });

  const userFind = JSON.parse(localStorage.getItem("userFind"));

  if (userFind) {
    loginText.style.display = "none";
    loginIcon.style.display = "block";

    userInfoNickName.textContent = `${userFind.usernickname} 님 환영합니다!`;
    userInfoId.textContent = `UserId : ${userFind.userName}`;
    userInfoEmail.textContent = `UserEmail : ${userFind.userEmail}`;
  } else {
    loginText.style.display = "inline-block";
    loginIcon.style.display = "none";
    const loginNickName = document.getElementById("loginNickName");
    if (loginNickName) loginNickName.style.display = "none";
  }

  logOut.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    localStorage.removeItem("userFind");

    loginText.style.display = "inline-block";
    loginIcon.style.display = "none";
    const loginNickName = document.getElementById("loginNickName");
    if (loginNickName) loginNickName.style.display = "none";
    userInfoNickName.textContent = "";
    userInfoId.textContent = "";
    userInfoEmail.textContent = "";
    iconContainer.style.display = "none";
    alert("로그아웃이 완료되었습니다.");
  });

  function applyResponsiveEffect() {
    if (window.innerWidth <= 768) {
      // 768px 이하일 때 userInfoSecond 보이기
      userInfo.style.display = "block";
      userInfoSecond.style.display = "block";
    } else {
      // 768px 이상일 때 userInfoSecond 숨기기
      userInfo.style.display = "none";
      userInfoSecond.style.display = "none";
    }
    if (window.innerWidth <= 768) {
      menu.classList.add("hidden");
    } else {
      menu.classList.remove("hidden");
    }
  }

  applyResponsiveEffect();
  window.addEventListener("resize", applyResponsiveEffect);
});

window.addEventListener("load", function () {
  const openCate = document.querySelector(".open-cate");
  const cateBox = document.querySelector(".cate-box");
  const cateBack = document.querySelector(".cate-background");

  openCate.addEventListener("click", function () {
    cateBox.classList.toggle("active");
    cateBack.classList.toggle("active");
    searchDelete.style.display = "none";
  });

  cateBack.addEventListener("click", function () {
    cateBack.classList.remove("active");
    cateBox.classList.remove("active");
  });

  const headerLogo = document.querySelector(".logo");
  headerLogo.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  const loginMove = document.getElementById("login-btn");
  loginMove.addEventListener("click", function () {
    window.location.href = "login.html";
  });
});
