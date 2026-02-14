// PAGE SWITCH FUNCTIONS
function openLove() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
}

function openGift() {
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
}

function backToLove() {
    document.getElementById("page3").style.display = "none";
    document.getElementById("page2").style.display = "block";
}

/* NO BUTTON MOVE */
const noBtn = document.getElementById("noBtn");
if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * 200 + "px";
        noBtn.style.top = Math.random() * 200 + "px";
    });
}

/* BOOK IMAGE SLIDER */
let currentIndex = 0;
const images = document.querySelectorAll(".book-content img");

if (images.length > 0) {
    images[0].classList.add("active");
}

function toggleBook() {
    images[currentIndex].classList.remove("active");

    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    images[currentIndex].classList.add("active");
}
