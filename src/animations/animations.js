import gsap from 'gsap'

export const tl = gsap.timeline();

export function bodyReset () {
    gsap.to("body", { duration: 0, css: { visibility: "visible"} })
}

export function overlayAnim (fn) {
    gsap.to("body", {duration: 0, css: { visibility: "visible"} })
    tl.from('.line span', 1.8, { 
            y: 100,
            ease: "power4.out",
            delay: 0,
            skewY: 7,
            stagger: {
                amount: 0.3
            } 
            
            })
            .to(".overlay-top", 1.6, {
                height: 0,
                ease: "expo.inOut",
                stagger: {
                    amount: 0.4
                }
            })
            .to(".overlay-bottom", 1.6, {
                width: 0,
                ease: "expo.inOut",
                delay: -.8,
                stagger: {
                    amount: 0.4
                }
            })
            .to(".intro-overlay", 0, { css: { display: "none"} })
            .from(".case-image img", 1.6, {
                scale: 1.4,
                ease: "expo.inOut",
                delay: -2,
                stagger: {
                    amount: 0.4
                },
                onComplete: fn
            })
}

export function menuAnimation (dimension) { 
    tl
    .to("nav", { duration: 0.01, css: { display: 'block' }})
    .to("body", { css: {overflow: 'hidden'} })
    .to(".App", {
        duration: 1,
        y: dimension.width <= 654 ? '70vh' : dimension.width <= 768 ? '55vh' : dimension.width <= 1600 ? '70vh' : dimension.height >= 999 ? '53vh' : '70vh',
        ease: 'expo.inOut'
    })
    .to(".hamburger-menu span", {
        duration: .6,
        delay: -1,
        scaleX: 0,
        transformOrigin: '50% 0',
        ease: 'expo.inOut'
    })
    .to("#Path_1", {
        duration: .4,
        delay: -.6,
        css: {
            strokeDashoffset: 10,
            strokeDasharray: 5
        }
    })
    .to("#Path_2", {
        duration: .4,
        delay: -.6,
        css: {
            strokeDashoffset: 10,
            strokeDasharray: 20
        }
    })
    .to("#Line_1", {
        duration: .4,
        delay: -.6,
        css: {
            strokeDashoffset: 40,
            strokeDasharray: 18
        }
    })
    .to("#circle", {
        duration: .6,
        delay: -.8,
        css: {
            strokeDashoffset: 0,
        }
    })
    .to(".hamburger-menu-close", {
        duration: .6,
        delay: -.8,
        css: {
            display: 'block',
        }
    })
}

export function closeMenu() {
     tl.to(".App", 1, {
        y: 0,
        ease: "expo.inOut"
    })
    .to("#circle", 0.6, {
      delay: -0.6,
      css: {
        strokeDashoffset: -193,
        strokeDasharray: 227
      }
    })
    .to("#Path_1", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 10
      }
    })
    .to("#Path_2", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 10,
        strokeDasharray: 10
      }
    })
    .to("#Line_1", 0.4, {
      delay: -0.6,
      css: {
        strokeDashoffset: 40,
        strokeDasharray: 40
      }
    })
    .to(".hamburger-menu span", 0.6, {
      delay: -0.6,
      scaleX: 1,
      transformOrigin: "50% 0%",
      ease: "expo.inOut"
    })
    .to(".hamburger-menu-close", 0, {
      delay: -0.1,
      css: { display: "none" }
    })
    .to("body", 0, { css: { overflow: "auto" } })
    .to("nav", 0, {
      css: { display: "none" }
    });
}