const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

modalBtn.addEventListener("click", function () {
    console.log(modal.classList);
    modal.classList.add("open-modal");
})
closeBtn.addEventListener("click", function () {
    modal.classList.remove("open-modal");
})
