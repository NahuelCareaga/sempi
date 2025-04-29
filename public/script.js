const headerEL = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 30){
        headerEL.classList.add("header-scrolled"); 
    } else if(window.scrollY <= 50){
        headerEL.classList.remove("header-scrolled"); 
    }
});