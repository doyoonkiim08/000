// ====================
// 메뉴 버튼
// ====================

const menuButtons = document.querySelectorAll(".menu-button");


// ====================
// HOME 버튼
// ====================

const homeButtons = document.querySelectorAll(".home-button");


// ====================
// 모든 서브 페이지
// ====================

const subPages = document.querySelectorAll(".sub-page");


// ====================
// 메인 페이지
// ====================

const mainPage = document.querySelector("#mainPage");


// ====================
// 메뉴 버튼 클릭
// ====================

menuButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // 이동할 페이지 이름 가져오기
        const pageName = button.dataset.page;

        // 메인 화면 숨기기
        mainPage.style.display = "none";

        // 선택한 페이지 표시
        document.querySelector("#" + pageName).style.display = "block";

        // 화면 위쪽으로 이동
        window.scrollTo(0, 0);
    });

});


// ====================
// HOME 버튼 클릭
// ====================

homeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // 모든 서브 페이지 숨기기
        subPages.forEach(function(page) {
            page.style.display = "none";
        });

        // 메인 화면 표시
        mainPage.style.display = "flex";

        // 화면 위쪽으로 이동
        window.scrollTo(0, 0);
    });

});


// ====================
// 퀴즈 기능
// ====================

const quizOptions = document.querySelectorAll(".quiz-option");

quizOptions.forEach(function(option) {

    option.addEventListener("click", function() {

        // 현재 퀴즈 영역 찾기
        const quiz = option.closest(".quiz");

        const options = quiz.querySelectorAll(".quiz-option");
        const result = quiz.querySelector(".quiz-result");
        const explanation = quiz.querySelector(".quiz-explanation");


        // 기존 선택 색상 초기화
        options.forEach(function(button) {
            button.classList.remove("correct");
            button.classList.remove("wrong");
        });


        // 정답 여부 확인
        if (option.dataset.answer === "correct") {

            option.classList.add("correct");
            result.textContent = "정답입니다! 🎉";

        } else {

            option.classList.add("wrong");
            result.textContent = "오답입니다. 해설을 확인해보세요!";

        }


        // 해설 표시
        explanation.style.display = "block";
    });

});
