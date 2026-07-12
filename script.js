const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (nav) {
        nav.classList.toggle("scrolled", window.scrollY > 50);
    }
});