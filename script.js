const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.05,
    rootMargin: "0px 0px -10% 0px"
});

reveals.forEach(el => observer.observe(el));

const scrollHint = document.querySelector('.scroll-hint');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        scrollHint.style.opacity = '0';
    } else {
        scrollHint.style.opacity = '1';
    }
});

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');

window.addEventListener('scroll', ()=>{

    const navBottom = nav.getBoundingClientRect().bottom;

    if(navBottom < 0){
        hamburger.classList.remove('hidden-menu');
    } else{
        hamburger.classList.add('hidden-menu');
        mobileMenu.classList.remove('open');
    }

});

let velystelle = 0.5;

const sfondo = document.getElementById("sfondo");
let stelle = [];

function creoSfondo() {
    for (let i = 0; i < 100; i++) {
        const stella = document.createElement("div");
        stella.className = "stella";
        stella.style.position = "absolute";

        const dimensione = Math.random() * 2 + 1;

        stella.style.width = dimensione + "px";
        stella.style.height = dimensione + "px";

        stella.dimensioneOriginale = dimensione;

        stella.style.backgroundColor = "white";
        stella.style.left = Math.random() * window.innerWidth + "px";
        stella.style.top = Math.random() * window.innerHeight + "px";
        stella.style.borderRadius = "50%";

        sfondo.appendChild(stella);
        stelle.push(stella);
    }
}

creoSfondo();

setInterval(() => {
    stelle.forEach(stella => {

        const distanza = 2;

        let top = parseFloat(stella.style.top);

        if (stella.dimensioneOriginale > 2) {
            top += velystelle + distanza;
        } else {
            top += velystelle;
        }

        stella.style.top = top + "px";

        // 🔧 FIX 1: usare window.innerHeight invece di sfondo.offsetHeight
        if (top > window.innerHeight) {
            stella.style.top = "0px";
            stella.style.left = Math.random() * window.innerWidth + "px";
        }

    });

}, 50);