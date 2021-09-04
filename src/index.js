import "./styles/index.scss";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
    const homeTitleTimeline = gsap.timeline();

    const homeTitleItems = Array.from(
        document.querySelectorAll(".home__title > span > span")
    );

    homeTitleTimeline
        .from(homeTitleItems[0], {
            yPercent: 100,
        })
        .from(
            homeTitleItems[1],
            {
                yPercent: 100,
            },
            0.15
        )
        .from(
            homeTitleItems[2],
            {
                yPercent: 100,
            },
            0.3
        )
        .from(
            ".home .arrow-pointer",
            {
                xPercent: -300,
            },
            0.2
        )
        .from(
            ".home__about",
            {
                y: 100,
                opacity: 0,
            },
            0.2
        );

    gsap.to(".home__title > span:nth-child(1)", {
        x: window.innerWidth / 2,
        scrollTrigger: {
            scrub: 1,
            end: "+" + window.innerHeight,
        },
    });
    gsap.to(".home__title > span:nth-child(2)", {
        x: -window.innerWidth / 3,
        scrollTrigger: {
            scrub: 1,
            end: "+" + window.innerHeight,
        },
    });
    gsap.to(".home__title > span:nth-child(3)", {
        x: 100,
        scrollTrigger: {
            scrub: 1,
            end: "+" + window.innerHeight,
        },
    });

    gsap.to(".home__about p", {
        x: -100,
        opacity: 0,
        scrollTrigger: {
            scrub: 1,
            end: "+" + window.innerHeight / 5,
        },
    });

    const aboutTrigger = document.querySelector(".about__ticker");

    Array.from(document.getElementsByClassName("about__text")).forEach(
        (text, id) => {
            const odd = id % 2 !== 0;
            const x = window.innerWidth / 4;

            gsap.from(text, {
                y: 200,
                opacity: 0,
                scrollTrigger: {
                    scrub: 1,
                    // markers: true,
                    trigger: text,
                    // start: 'top'
                    endTrigger: "top",
                },
            });
            gsap.to(text, {
                x: odd ? -x : x,
                scrollTrigger: {
                    scrub: 2,

                    markers: true,
                    trigger: text,
                    start: "top +" + window.innerHeight / 4,
                    end: "+500",
                },
            });
        }
    );

    Array.from(document.getElementsByClassName("my-works__item")).forEach(
        (tickerItem) => {
            const container = tickerItem.children[0];
            const ticker = container.children[0];
            const reverse = ticker.classList.contains("reverse");

            const { height } = ticker.getBoundingClientRect();

            gsap.to(container, {
                x: reverse ? window.innerWidth * 2 : -window.innerWidth * 2,
                scrollTrigger: {
                    // markers: true,
                    scrub: 3,
                    trigger: container,
                    end: "+" + height * 1.5,
                    onEnter: () => {
                        ticker.classList.toggle("active", true);
                    },
                    onEnterBack: () => {
                        ticker.classList.toggle("active", true);
                    },
                    onLeave: () => {
                        ticker.classList.toggle("active", false);
                    },
                    onLeaveBack: () => {
                        ticker.classList.toggle("active", false);
                    },
                },
            });
        }
    );

    const characteristicsTrigger = document.querySelector(
        ".characteristics__ticker"
    );

    Array.from(document.getElementsByClassName("characteristics__key")).forEach(
        (item) => {
            const list = Array.from(item.getElementsByTagName("li"));
            const title = item.querySelector("h2 span");
            const pointer = item.querySelector(".arrow-pointer");

            gsap.from(pointer, {
                translateX: "-300%",
                scrollTrigger: {
                    scrub: 1,
                    trigger: characteristicsTrigger,
                },
            });

            gsap.from(title, {
                opacity: 0,
                yPercent: 100,
                scrollTrigger: {
                    scrub: 1,
                    trigger: characteristicsTrigger,
                },
            });

            list.forEach((li, id) => {
                const offset =
                    ((list.length - id + 1) * window.innerHeight) /
                    (4 * list.length);
                // const {height} = li.getBoundingClientRect();

                gsap.from(li, {
                    x: -offset,
                    opacity: 0,
                    scrollTrigger: {
                        scrub: 1,
                        trigger: characteristicsTrigger,
                        end: "+300",
                    },
                });
            });
        }
    );
});
