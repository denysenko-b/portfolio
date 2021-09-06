import { gsap } from "gsap/all";

export default () => {

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
                    trigger: text,
                    // start: 'top'
                    endTrigger: "top",
                },
            });
            gsap.to(text, {
                x: odd ? -x : x,
                scrollTrigger: {
                    scrub: 2,

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

            const speed = window.innerWidth / 1.5;

            gsap.to(container, {
                x: reverse ? speed : -speed,
                scrollTrigger: {
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

    // const characteristicsTrigger = document.querySelector(
    //     ".characteristics__ticker"
    // );

    const { height: chContainerHeight } = document
        .querySelector(".characteristics")
        .getBoundingClientRect();

    Array.from(document.getElementsByClassName("characteristics__key")).forEach(
        (item) => {
            const list = Array.from(item.getElementsByTagName("li"));
            const title = item.querySelector("h2 span");
            const pointer = item.querySelector(".arrow-pointer");

            const scrollTrigger = {
                scrub: 1,
                trigger: item,
                end: "-" + chContainerHeight / 3,
            };

            gsap.from(pointer, {
                xPercent: -300,
                scrollTrigger,
            });
            gsap.from(title, {
                duration: 7,
                opacity: 0,
                yPercent: 100,
                scrollTrigger,
            });

            const tm = gsap.timeline({ scrollTrigger });

            list.forEach((li, id) => {
                const offset = 100;

                tm.from(li, 2, {
                    x: offset,
                    opacity: 0,
                });
            });

            // gsap.from(pointer, {
            //     translateX: "-300%",
            //     scrollTrigger: {
            //         scrub: 1,
            //         trigger: characteristicsTrigger,
            //     },
            // });

            // gsap.from(title, {
            //     opacity: 0,
            //     yPercent: 100,
            //     scrollTrigger: {
            //         scrub: 1,
            //         trigger: characteristicsTrigger,
            //     },
            // });

            // list.forEach((li, id) => {
            //     const offset =
            //         ((list.length - id + 1) * window.innerHeight * -1) /
            //         (4 * list.length);
            //     // const {height} = li.getBoundingClientRect();

            //     gsap.from(li, {
            //         x: -offset,
            //         opacity: 0,
            //         scrollTrigger: {
            //             scrub: 1,
            //             trigger: item,
            //             end: "+300",
            //         },
            //     });
            // });
        }
    );

    const moreWorksItem = 'more-works__item';
    const moreWorksTrigger = document.querySelector('.more-works__ticker');

    Array.from(document.getElementsByClassName(moreWorksItem))
        .forEach(item => {
            const title = item.querySelector(`.${moreWorksItem}__title`);
            const logo = item.querySelector(`.${moreWorksItem}__icon`);
            const count = item.querySelector(`.${moreWorksItem}__count`);
            const type = item.querySelector(`.${moreWorksItem}__type`);
            const pointer = item.querySelector('.arrow-pointer');

            const {height} = item.getBoundingClientRect();

            const scrollTrigger =  {
                trigger: item,
                scrub: 2,
                end: '-'+window.innerHeight/2
            }

            gsap.from(title, {
                xPercent: 50,
                opacity: 0,
                scrollTrigger
            })

            gsap.from(logo, {
                xPercent: -50,
                opacity: 0,
                scrollTrigger
            })

            gsap.from(count, {
                opacity: 0,
                y: 50,
                scrollTrigger
            })

            gsap.from(type, {
                opacity: 0,
                y: 50,
                scrollTrigger
            })

            // delete scrollTrigger.end;

            // scrollTrigger.endTrigger = moreWorksTrigger;

            gsap.from(pointer, {
                opacity: 0,
                scrollTrigger
            })
        })

    const footerTrigger = document.querySelector("footer");

    Array.from(
        document.querySelectorAll("footer p * > *:not(.arrow-pointer)")
    ).forEach((item, id) => {
        const {height} = item.getBoundingClientRect();

        gsap.from(item, {
            yPercent: 100,
            scrollTrigger: {
                scrub: 2,
                trigger: item,
                end: '-' + window.innerHeight,
            },
        });
    });
    gsap.from("footer .arrow-pointer",
        {
            opacity: 0,
            yPercent: 100,
            scrollTrigger: {
                scrub: 1,
                trigger: footerTrigger,
                end: '-100'
            }
        },
    );
}
