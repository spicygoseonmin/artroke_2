function previewImage(input) {
  // 현재 input 요소가 포함된 폼의 thumbnail_list 선택
  const thumbnailList = input.closest(".project_work_form").querySelector(".thumbnail_list");
  thumbnailList.innerHTML = ""; // 기존 썸네일 지우기

  const files = input.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = function (e) {
      const listItem = document.createElement("li");
      const img = document.createElement("img");
      img.src = e.target.result; // 읽어온 이미지를 소스로 설정
      img.alt = file.name; // 이미지에 alt 텍스트 설정
      listItem.appendChild(img);
      thumbnailList.appendChild(listItem); // 리스트에 이미지 추가
    };

    reader.readAsDataURL(file); // 파일을 데이터 URL로 읽기
  }
}
