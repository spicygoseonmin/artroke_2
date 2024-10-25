window.addEventListener("load", function () {
  const loginText = document.getElementById("login"); // "로그인" 텍스트가 있는 요소
  const loginIcon = document.getElementById("logoImg"); // 아이콘이 있는 요소
  const loginForm = this.document.getElementById("login-form");
 
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userFind = users.find((user) => user.userName === userId && user.userPassWord === password);
    if (userFind) {
      // 로그인시 로컬스토리지에 사용자정보 저장
      localStorage.setItem("userFind", JSON.stringify(userFind));
      alert(`로그인이 성공되었습니다. 메인페이지로 넘어갑니다.`);

      window.location.href = "index.html";
    } else {
      alert("로그인 정보가 일치하지 않습니다. 다시 확인바랍니다.");
      loginForm.reset();
    }
    
  });
  const signUpBtn = document.getElementById("signUpBtn");
  signUpBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "sign_up.html";
  });
  const logo = this.document.querySelector(".logo")
  loginIcon.addEventListener("click", function () {
    window.location.href = "index.html";
  });
  const logoImg = this.document.getElementById("logoImg");
  logoImg.addEventListener("click", function () {
    window.location.href = "index.html";
  });
});

