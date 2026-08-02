/*====================================
HISNAILSDOPE
Luxury Website Effects
====================================*/


// ================================
// Fade-In Animation
// ================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

sections.forEach(section=>{

    observer.observe(section);

});


// ================================
// Navbar Background on Scroll
// ================================

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        nav.style.background = "rgba(255,255,255,.97)";
        nav.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

    }else{

        nav.style.background = "rgba(255,255,255,.88)";
        nav.style.boxShadow = "0 5px 25px rgba(0,0,0,.06)";

    }

});


// ================================
// Hero Parallax Effect
// ================================

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    hero.style.backgroundPositionY =
        window.scrollY * 0.35 + "px";

});


// ================================
// Gallery Hover Glow
// ================================

const galleryItems = document.querySelectorAll(".gallery .item");

galleryItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.boxShadow =
        "0 18px 40px rgba(230,141,173,.35)";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.boxShadow =
        "0 12px 30px rgba(0,0,0,.08)";

    });

});


// ================================
// Button Click Animation
// ================================

const buttons = document.querySelectorAll(
".bookButton, .primaryButton, .secondaryButton, .contactButtons a, .socialButtons a"
);

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        button.style.transform = "scale(.96)";

        setTimeout(()=>{

            button.style.transform = "";

        },150);

    });

});


// ================================
// Smooth Anchor Scrolling
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ================================
// Floating Gallery Effect
// ================================

galleryItems.forEach(item=>{

    item.addEventListener("mousemove",(e)=>{

        const rect = item.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        item.style.transform =
        `rotateX(${(y-160)/35}deg)
         rotateY(${-(x-160)/35}deg)
         scale(1.03)`;

    });

    item.addEventListener("mouseleave",()=>{

        item.style.transform =
        "rotateX(0deg) rotateY(0deg) scale(1)";

    });

});


// ================================
// Cursor Glow
// ================================

const glow = document.createElement("div");

glow.className = "cursorGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


// ================================
// Loading Animation
// ================================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


// ================================
// Console Signature
// ================================

console.log("✨ HisNailsDope website loaded successfully.");
