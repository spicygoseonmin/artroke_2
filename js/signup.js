window.addEventListener("load", function () {
  const signForm = document.getElementById("sign-form");
  const checkNicknameBtn = document.getElementById("checkNicknameBtn");
  const userNickNameInput = document.getElementById("userNickName");
  let isNicknameAvailable = false;  // 닉네임 중복 체크 결과를 저장하는 플래그

  // 유효성 검사 정규식
  const userNicknameRegex = /^[a-z0-9_-가-힣]{5,8}$/;

  // 닉네임 중복 체크
  checkNicknameBtn.addEventListener("click", function () {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const inputNickname = userNickNameInput.value.trim();

    // 닉네임 유효성 검사 먼저 실행
    if (!userNicknameRegex.test(inputNickname)) {
      alert("닉네임은 5자 이상 8자 이하로 입력해 주세요.");
      return;
    }

    if (!inputNickname) {
      alert("닉네임을 입력하세요.");
      return;
    }

    const isDuplicate = users.some(user => user.usernickname === inputNickname);

    if (isDuplicate) {
      alert("이미 사용 중인 닉네임입니다.");
      isNicknameAvailable = false;  // 중복된 경우 사용 불가
    } else {
      alert("사용 가능한 닉네임입니다.");
      isNicknameAvailable = true;  // 중복되지 않은 경우 사용 가능
    }
  });

  // 폼 제출 시 유효성 검사 및 회원가입 처리
  signForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // 사용자 입력 값들
    const userNameInput = document.getElementById("userId");
    const userPassWordInput = document.getElementById("userPassWord");
    const userEmailInput = document.getElementById("userEmail");
    const userPhoneNumberInput = document.getElementById("userNumber");

    const userName = userNameInput.value.trim();
    const userPassWord = userPassWordInput.value.trim();
    const userEmail = userEmailInput.value.trim();
    const userPhoneNumber = userPhoneNumberInput.value.trim();
    const userNickname = userNickNameInput.value.trim();

    // 유효성 검사 정규식
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /^.{6,10}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneNumberRegex = /^\d{11}$/;

    // 유효성 검사
    if (!usernameRegex.test(userName)) {
      alert("아이디는 영문자와 숫자로만 이루어져야 합니다.");
      return;
    }
    if (!passwordRegex.test(userPassWord)) {
      alert("비밀번호는 최소 6자 이상 10자 미만이어야 합니다.");
      return;
    }
    if (!emailRegex.test(userEmail)) {
      alert("이메일 양식이 틀립니다. 다시 확인해 주세요.");
      return;
    }
    if (!phoneNumberRegex.test(userPhoneNumber)) {
      alert("전화번호는 11자리를 입력해 주세요.");
      return;
    }
    if (!userNicknameRegex.test(userNickname)) {
      alert("닉네임은 5자 이상 8자 이하로 입력해 주세요.");
      return;
    }

    // 닉네임 중복 체크 여부 확인
    if (!isNicknameAvailable) {
      alert("닉네임 중복 체크를 해주세요.");
      return;
    }

    // 필수 체크박스 검사
    const checkKey = document.querySelectorAll(".checkbox");
    let allChecked = true;

    checkKey.forEach(function (item) {
      if (!item.checked) {
        allChecked = false;
      }
    });

    if (!allChecked) {
      alert("필수 항목에 모두 동의해야 합니다.");
      return;
    }

    // 사용자 정보 저장
    const newUser = {
      userName: userName,
      userPassWord: userPassWord,
      userEmail: userEmail,
      userPhoneNumber: userPhoneNumber,
      usernickname: userNickname,
    };

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
    window.location.href = "login.html";
  });

  // 전체 동의 체크박스
  const checkAll = document.getElementById("checkBoxAll");
  const chkArr = document.querySelectorAll(".checkbox");

  checkAll.addEventListener("change", function () {
    chkArr.forEach(function (item) {
      item.checked = checkAll.checked;
    });
  });

  const logoImg = document.getElementById("logoImg");
  logoImg.addEventListener("click", function () {
    window.location.href = "index.html";
  });
});
