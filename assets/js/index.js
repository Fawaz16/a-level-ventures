const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            console.log(entry.target.textContent)
        } else {
            entry.target.classList.remove('show');
            console.log(entry.target.textContent)
        }
    });
});

const hiddenElements = document.querySelectorAll(".customAnimation");
hiddenElements.forEach((el)=> observer.observe(el));