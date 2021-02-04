// 3 elements: body, .social-media__box, .overview__box

function myFunction() {
    const element = document.body;
    const bgPattern = document.querySelector(".bg-pattern");
    
    bgPattern.classList.toggle("dark-mode");
    element.classList.toggle("dark-mode");
    
}