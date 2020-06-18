const modalOverlay = document.querySelector('.modal-overlay');
const courses = document.querySelectorAll('.courses');

for (let course of courses){
    course.addEventListener("click", function(){
        const videoId = course.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src =`https://rocketseat.com.br/${videoId}`
    })
}

closeModal = document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})
arrow = document.querySelector(".material-icons").addEventListener("click", function(){
    window.history.back()
})