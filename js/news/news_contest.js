window.addEventListener("load", function () {
  const menu = document.querySelectorAll(".con_menu_list > li");
  const lists = document.querySelectorAll(".con_news_list > div");
  //   console.log(menuItems);
  // console.log(cards);

  //   로드시 활성화 메뉴랑 카드 index[0]
  //
  menu[0].classList.add("active");
  lists[0].classList.add("active");

  menu.forEach(function (menus, index) {
    // console.log(menuItem);
    menus.addEventListener("click", function () {
      // //   클릭된 메뉴와 해당하는 카드를 비활성화
      menu.forEach(function (item) {
        // console.log(item);
        item.classList.remove("active");
      });
      lists.forEach(function (list) {
        console.log(list);
        list.classList.remove("active");
      });
      //   클릭된 메뉴와 해당하는 카드를 활성화
      menu[index].classList.add("active");
      lists[index].classList.add("active");
    });
  });
});
//누르면 다른거 다 보이기
//다른거 누르면 클래스명으로 직관해서 작용하게
