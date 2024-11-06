window.addEventListener("load", function () {
  const champ_list = this.document.querySelectorAll(".champ_list > .inner > ul > li");
  const champ_wrap = new Waypoint({
    element: document.querySelector(".champ_wrap"),
    handler: function (direction) {
      console.log(direction);
      if (direction === "down") {
        champ_list.forEach(function (champ_lists) {
          champ_lists.classList.add("active_up");
        });
      } else {
        champ_list.forEach(function (champ_lists) {
          champ_lists.classList.remove("active_up");
        });
      }
    },
    offset: "50%",
  });
});
