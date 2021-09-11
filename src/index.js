import "./styles/index.scss";
import { gsap, ScrollTrigger } from "gsap/all";
import animate from './animation';

const getScreenOrientation = async () => {
    const prevOrientation = window._orientation;
    // const width = window.innerWidth;
    // const height = window.innerHeight;

    // console.log(width/7*4, height/7*3)

    const orientation =
        window.innerHeight > window.innerWidth ? "portrait" : "landscape";

    if (prevOrientation !== orientation) {
        document.documentElement.setAttribute("orientation", orientation);
        window._orientation = orientation;
        window.dispatchEvent(new CustomEvent("setorientation", { detail: { orientation } }));
    }
};

getScreenOrientation();

window.istouch = "ontouchstart" in window;

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
    const scrollDown = document.querySelector('.home .arrow-pointer');
    const aboutSection = document.querySelector('.about__ticker');

    scrollDown.addEventListener('click', () => {
        aboutSection.scrollIntoView({
            behavior: 'smooth'
        })
    })
    
});

    
if (window._orientation === 'landscape') {
    animate();
}

window.addEventListener('resize', () => {
    getScreenOrientation();
})
