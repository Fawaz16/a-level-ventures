const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll(".customAnimation");
hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementsByClassName("navbar")[0];
    const carouselBtn = document.getElementsByClassName("carousel-btn");
    for(let btn of carouselBtn){
        btn.style.top = navbar.offsetHeight + "px";
    }
})

window.onresize = () => {
    const navbar = document.getElementsByClassName("navbar")[0];
    const carouselBtn = document.getElementsByClassName("carousel-btn");
    for(let btn of carouselBtn){
        btn.style.top = navbar.offsetHeight + "px";
    }
}