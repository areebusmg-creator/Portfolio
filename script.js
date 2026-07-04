window.addEventListener("load",function(){

setTimeout(function(){

document.getElementById("loader").style.opacity="0";

setTimeout(function(){
document.getElementById("loader").style.display="none";
},1000);

},3000);

});
const images = document.querySelectorAll(".project-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.getElementById("close");

images.forEach(image => {

    image.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = image.src;
    });

});

close.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if(e.target === lightbox){
        lightbox.style.display = "none";
    }
});
const reveals = document.querySelectorAll(".reveal");

function revealSection(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSection);
revealSection();
const words = [
    "GRAPHIC DESIGNER",
    "VISUAL STORYTELLER",
    "BRANDING DESIGNER",
    "SOCIAL MEDIA DESIGNER"
    
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = words[wordIndex];

    if(!isDeleting){
        typing.textContent = current.substring(0, charIndex++);
    }else{
        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = 80;

    if(!isDeleting && charIndex === current.length + 1){
        speed = 1500;
        isDeleting = true;
    }
    else if(isDeleting && charIndex === 0){
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.dataset.target;
            const isPercent = target === 100;
            let count = 0;

            const update = ()=>{

                count += Math.ceil(target/40);

                if(count >= target){
                    counter.innerHTML = isPercent ? target + "%" : target + "+";
                }else{
                    counter.innerHTML = count;
                    requestAnimationFrame(update);
                }

            };

            update();
            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter=>observer.observe(counter));

const sections = document.querySelectorAll("header, section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});
const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        projects.forEach(project => {

            if(filter === "all" || project.classList.contains(filter)){
                project.style.display = "block";
            }else{
                project.style.display = "none";
            }

        });

    });

});
const search = document.getElementById("search");

search.addEventListener("keyup", ()=>{

    const value = search.value.toLowerCase();

    document.querySelectorAll(".project-card").forEach(card=>{

        const title = card.innerText.toLowerCase();

        if(title.includes(value)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});