// ================= AOS ANIMATION =================

AOS.init({
    duration: 1000,
    once: true
});


// ================= MOBILE NAVBAR =================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// ================= CLOSE MENU ON CLICK =================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ================= TYPING EFFECT =================

const typingText = document.getElementById("typing");

const words = [
    "Software Developer",
    "MSc Computing Science Student",
    "Android Developer",
    "QA Automation Enthusiast",
    "Machine Learning Explorer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// ================= ACTIVE NAVBAR =================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active-link");
        }

    });

});


// ================= NAVBAR SCROLL EFFECT =================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 8px 25px rgba(0,0,0,0.35)";

    } else {

        navbar.style.boxShadow =
            "0 8px 30px rgba(0,0,0,0.25)";
    }

});


// ================= PROJECT CARD EFFECT =================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.transform = `
            perspective(1000px)
            rotateX(${(y - rect.height / 2) / 25}deg)
            rotateY(${-(x - rect.width / 2) / 25}deg)
            translateY(-8px)
        `;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
        `;
    });

});


// ================= DARK / LIGHT MODE =================

const themeToggle = document.getElementById("themeToggle");

// Load Saved Mode

if (localStorage.getItem("mode") === "light") {

    document.body.classList.add("light-mode");

    themeToggle.innerHTML = "☀️";

} else {

    themeToggle.innerHTML = "🌙";
}

// Toggle Theme

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    // Light Mode

    if (document.body.classList.contains("light-mode")) {

        themeToggle.innerHTML = "☀️";

        localStorage.setItem("mode", "light");

    }

    // Dark Mode

    else {

        themeToggle.innerHTML = "🌙";

        localStorage.setItem("mode", "dark");
    }

});


// ================= SCROLL TO TOP BUTTON =================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.classList.add("scroll-top");

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.classList.add("show-scroll");

    } else {

        scrollBtn.classList.remove("show-scroll");
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================= FLOATING PARTICLES =================

function createParticle() {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    document.body.appendChild(particle);

    const size = Math.random() * 6 + 2;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left =
        Math.random() * innerWidth + "px";

    particle.style.animationDuration =
        Math.random() * 10 + 5 + "s";

    setTimeout(() => {

        particle.remove();

    }, 15000);
}

setInterval(createParticle, 500);