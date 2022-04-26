// method 1
// traaversing the dom

// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");

//     })
// })



// method 2
// using selectors inside the element
const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");


    btn.addEventListener("click", function () {
        // for closing other and showing only one 
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })
// for showing the text
        question.classList.toggle("show-text");
    })
})