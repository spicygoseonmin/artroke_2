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
      // console.log(obj);
      // 실시간 전체글
      COMMU_NOW = obj.now;
      showCommuNow();
      //이번주 인기글
      COMMU_WEEK = obj.week;
      showCommuWeek();
      //   소묘
      COMMU_DRAWING = obj.drawing;
      showCommuDrawing();
      // 수채화
      COMMU_WATER = obj.watercolorPainting;
      showCommuWater();
      // 유화
      COMMU_OIL = obj.oilPainting;
      showCommuOil();
      // 아크릴화
      COMMU_ACRYLIC = obj.acrylicization;
      showCommuAcrylic();
    }
  };
  xhttp.open("GET", "community.json");
  xhttp.send();
  //실시간 전체글
  let COMMU_NOW;
  let commuNowTag = this.document.getElementById("data-commuNow");
  function showCommuNow() {
    let html = ``;
    COMMU_NOW.forEach(function (item) {
      //   console.log(item);
      let tag = `
    <li>
                <div class="commu-title-wrap">
                  <p class="commu-cate">${item.cate}</p>
                  <p class="commu-title"><a href="#">${item.title}</a></p>
                </div>
                <div class="commu-icon">
                  <p class="commu-chat"><i class="fa-regular fa-comment-dots"></i> ${item.chat}</p>
                  <p class="commu-view"><i class="fa-regular fa-eye"></i> ${item.view}</p>
                </div>
              </li>
    `;
      html += tag;
    });
    commuNowTag.innerHTML = html;
  }
  //이번주 인기글
  let COMMU_WEEK;
  let commuWeekTag = this.document.getElementById("data-commuWeek");
  function showCommuWeek() {
    let html = ``;
    COMMU_WEEK.forEach(function (item) {
      let tag = `
        <li>
                <div class="commu-title-wrap">
                  <p class="commu-cate">${item.cate}</p>
                  <p class="commu-title"><a href="#">${item.title}</a></p>
                </div>
                <div class="commu-icon">
                  <p class="commu-chat"><i class="fa-regular fa-comment-dots"></i> ${item.chat}</p>
                  <p class="commu-view"><i class="fa-regular fa-eye"></i> ${item.view}</p>
                </div>
              </li>
        `;
      html += tag;
    });
    commuWeekTag.innerHTML = html;
  }
  //   카테고리 메뉴
  const menu = document.querySelector(".community-menu");
  const prevButton = document.querySelector(".scroll-button.prev");
  const nextButton = document.querySelector(".scroll-button.next");

  prevButton.addEventListener("click", () => {
    menu.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  });

  nextButton.addEventListener("click", () => {
    menu.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  });

  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", function () {
      document.querySelector(".menu-item.active").classList.remove("active");
      this.classList.add("active");
    });
  });
  // 소묘
  let COMMU_DRAWING;
  let commuDrawingTag = this.document.getElementById("data-commuDrawing");
  function showCommuDrawing() {
    let html = "";
    COMMU_DRAWING.forEach(function (item) {
      let tag = `
        <li>
                <div class="commu-title-wrap">
                  <p class="commu-cate">${item.cate}</p>
                  <p class="commu-title"><a href="#">${item.title}</a></p>
                </div>
                <div class="commu-icon">
                  <p class="commu-chat"><i class="fa-regular fa-comment-dots"></i> ${item.chat}</p>
                  <p class="commu-view"><i class="fa-regular fa-eye"></i> ${item.view}</p>
                </div>
              </li>
        `;
      html += tag;
    });
    commuDrawingTag.innerHTML = html;
  }
  // 수채화
  let COMMU_WATER;
  let commuWaterTag = this.document.getElementById("data-commuWater");
  function showCommuWater() {
    let html = "";
    COMMU_WATER.forEach(function (item) {
      let tag = `
          <li>
                  <div class="commu-title-wrap">
                    <p class="commu-cate">${item.cate}</p>
                    <p class="commu-title"><a href="#">${item.title}</a></p>
                  </div>
                  <div class="commu-icon">
                    <p class="commu-chat"><i class="fa-regular fa-comment-dots"></i> ${item.chat}</p>
                    <p class="commu-view"><i class="fa-regular fa-eye"></i> ${item.view}</p>
                  </div>
                </li>
          `;
      html += tag;
    });
    commuWaterTag.innerHTML = html;
  }
  // 유화
  let COMMU_OIL;
  let commuOilTag = this.document.getElementById("data-commuOil")
  function showCommuOil(){
    let html = ""
    COMMU_OIL.forEach(function(item){
      let tag = `
      <li>
                <div class="commu-title-wrap">
                  <p class="commu-cate">${item.cate}</p>
                  <p class="commu-title"><a href="#">${item.title}</a></p>
                </div>
                <div class="commu-icon">
                  <p class="commu-chat"><i class="fa-regular fa-comment-dots"></i> ${item.chat}</p>
                  <p class="commu-view"><i class="fa-regular fa-eye"></i> ${item.view}</p>
                </div>
              </li>
      `
      html +=tag
    })
    commuOilTag.innerHTML = html;
  }
  // 아크릴화
  let COMMU_ACRYLIC;
  let commuAcrylicTag = this.document.getElementById("data-commuAcrylic")
  function showCommuAcrylic(){
    let html = ""
    COMMU_ACRYLIC.forEach(function(item){
      let tag = `
      <li>
                <div class="commu-title-wrap">
                  <p class="commu-cate">${item.cate}</p>
                  <p class="commu-title"><a href="#">${item.title}</a></p>
                </div>
                <div class="commu-icon">
                  <p class="commu-chat"><i class="fa-regular fa-comment-dots"></i> ${item.chat}</p>
                  <p class="commu-view"><i class="fa-regular fa-eye"></i> ${item.view}</p>
                </div>
              </li>
      `
      html +=tag
    })
    commuAcrylicTag.innerHTML = html;
  }
});
