$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        // autoplay: true,
        // autoplayTimeout: 1000,
        responsive: {
          0: {
              items: 2,
              margin: 32,
              loop: true,
              dots: false,

          },

          601: {
              items: 3,
              margin: 32,
              loop: true,
              dots: false,
          },

          1001: {
              items: 3,
              margin: 48,
              loop: true,
              dots: false,
          },
        }
    });
});

/* Video */
const videoBtn = document.querySelector("#video-btn");
const videoPreview = document.querySelector(".video__preview")
const videoWrapper = document.querySelector(".video")
const video = document.querySelector(".video__object")

videoWrapper.addEventListener("click", function () {
    if(video.paused) {
        videoPreview.classList.add("none");
        videoWrapper.classList.remove("video-overlay");
        videoBtn.classList.add("none")
        video.play();
    } else {
        videoWrapper.classList.add("video-overlay");
        videoBtn.classList.remove("none");
        video.pause();
    }
})

/* Mobile Navigation */
const openBtnNav = document.querySelector("#openMobileNav");
const closeBtnNav = document.querySelector("#closeMobileNav");
const mobileNav = document.querySelector("#mobileNav");
openBtnNav.onclick = function() {
    mobileNav.classList.remove("none");
    document.body.classList.add("on-scroll");
}

closeBtnNav.onclick = function() {
    mobileNav.classList.add("none");
    document.body.classList.remove("on-scroll");
}
