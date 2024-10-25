$(function(){
    $(".sctList ul > li .class_sd_submit").click(function(){
        // 클릭된 버튼의 부모 li 안에 있는 .submit_project_work만 토글
        $(this).closest("li").find(".submit_project_work").slideToggle();
        
        // 버튼의 텍스트를 "닫기"로 변경하고, 다시 클릭하면 원래 텍스트로 복원
        if ($(this).text() === "닫기") {
            $(this).text("과제 제출하기");  // 원래 텍스트로 바꿔주세요 (예: "열기" 또는 "제출")
        } else {
            $(this).text("닫기");
        }
    });
});
