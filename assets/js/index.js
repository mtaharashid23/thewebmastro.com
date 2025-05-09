$(window).on('load', () => {
    $(window).scrollTop(0);

})
$(function () {
    $('[data-magnetic]').each(function () {
        new Magnetic(this);
    });
    // document.querySelector(".menuToggle").addEventListener("click", function () {

    //     document.querySelector("body").classList.toggle("isopen");
    // })
    sliderInit();
    portfolio();
    stepAnim();
    contactHeadingAnim();
    typeWritterAnim();
    headingAnim();
    tabSwitch();
    clique();
    formValidator()
    $('.contactBtn').on('mouseenter', function () {
        let video = $(this).find('video')
        video[0].play();
    })

    $(".clickbutton").click(function () {
        $('.floatingform-sec').toggleClass("show");
        $('.crossplus').toggleClass("rotate");
    });


    $(".outer-show").click(function () {
        $('body').toggleClass('show');
        $('.floatingform-sec').toggleClass('show');
        $('.overlayfloatingform').toggleClass('show');
    });
})

function sliderInit() {
// Client Logo Slider
    let clientLogoSlider = new Swiper(".clientLogoSlider", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            1366: {
                slidesPerView: 8,
                spaceBetween: 0
            },
            1199: {
                slidesPerView: 7,
                spaceBetween: 0
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 0
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 0
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            375: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });
// Package Slider
    let packageSlider = new Swiper(".packageSlider", {
        slidesPerView: 1,
        spaceBetween: 8,
        loop: true,
        // autoplay: {
        //     delay: 3500,
        //     disableOnInteraction: false,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1199: {
                slidesPerView: 4,
                spaceBetween: 32
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 32
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 16
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 12
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 8
            },
            375: {
                slidesPerView: 1,
                spaceBetween: 8
            },
        }
    });
// Testimonail Slider
    let testimonialSlider = new Swiper(".testimonialSlider", {
        slidesPerView: 1,
        spaceBetween: 32,
        effect: 'fade',
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },

    });
// Package Slider
    let serviceSlider = new Swiper(".offerWrapper", {
        slidesPerView: 5,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1366: {
                slidesPerView: 5,
            },
            1060: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            480: {
                slidesPerView: 2,
            },
            200: {
                slidesPerView: 2,
            }
            // 1199: {
            //     slidesPerView: 4,
            //     spaceBetween: 32
            // },
        }
    });
    let mySwiper = new Swiper('.widget-brands', {
        loop: true,
        speed: 1000,
        slidesPerView: 7,
        spaceBetween: 0,
        autoplay: {
            delay: 4000,
        },
        autoHeight: true,
        breakpoints: {
            1366: {
                slidesPerView: 6,
            },
            1060: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
            480: {
                slidesPerView: 2,
            },
            300: {
                slidesPerView: 2,
            },
            100: {
                slidesPerView: 1,
            }
        }
    });
}

function portfolio() {

    let portfolioSection = document.querySelector('.portfolioSec');
    let portfoliowrapper = document.querySelector('.portfoliowrapper');
    let portfoliowrapper1 = document.querySelector('.portfoliowrapper1');

    if (portfolioSection) {
        let horizontalTl = gsap.timeline({
            scrollTrigger: {
                trigger: portfolioSection,
                scrub: 1,
                end: () => "+=" + portfoliowrapper.offsetWidth + "px",
            }
        });
        ScrollTrigger.matchMedia({
            "(min-width: 992px)": function () {
                horizontalTl
                    .to(portfoliowrapper, {
                        xPercent: 0,
                        x: () => -(portfoliowrapper.offsetWidth - document.documentElement.clientWidth) + "px",
                        ease: "none",
                        duration: 1
                    }, "<")
                    .to(portfoliowrapper1, {
                        xPercent: 0,
                        x: () => (portfoliowrapper.offsetWidth - document.documentElement.clientWidth) + "px",
                        ease: "none",
                        duration: 1
                    }, "<")
            },
            "(max-width:991px)": function () {
                horizontalTl
                    .to(portfoliowrapper, {
                        xPercent: 0,
                        x: () => -20 + "%",
                        ease: "none",
                        duration: 1
                    }, "<")
                    .to(portfoliowrapper1, {
                        xPercent: 0,
                        x: () => "20%",
                        ease: "none",
                        duration: 1
                    }, "<")
            }

        })
    }
}

function stepAnim() {
    let cards = document.querySelectorAll('.processStepSection .processStepItem')

    cards.forEach((card) => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top 50%',
                toggleActions: 'play none none reverse'
            }
        })

        tl.from(card, {
            autoAlpha: 0,
            yPercent: 10
        })
    })
}

function contactHeadingAnim() {
    let contactHeading = new SplitType('.contactSec h1', {types: 'lines'})
    let lines = document.querySelectorAll('.contactSec h1 .line')

    lines.forEach((line) => {
        line.innerHTML += "<span class='overlay'></span>"
    })
    let overlay = document.querySelectorAll('.contactSec h1 .line .overlay')
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.contactSec h1',
            start: 'top 50%',
            toggleAction: "play none none none"
        }
    })
    tl.to(overlay, {
        scaleX: 0,
        stagger: 0.1,
        ease: Power3.easeOut
    })
}

function typeWritterAnim() {
    let heading = document.querySelector('.heroSec .content h1 span')
    if (heading) {
        let typed = new Typed(heading, {
            strings: ["Website Development.", "Logo Design.", "Ecommerce Solutions.", "Video Animation.", "Marketing Collateral.", "Digital Marketing.", "Creative Copywriting.", "Mobile Apps.", "SEO.", "CRM Solutions."],
            typeSpeed: 70,
            backSpeed: 10,
            showCursor: true,
            loop: true,
        });
    }
}

function headingAnim() {
    let headings = document.querySelectorAll('.secHeading')

    headings.forEach((heading) => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: heading,
                start: "top 80%",
                toggleActions: 'play none none reverse'
            }
        })

        tl.from(heading, {
            autoAlpha: 0,
            duration: 0.75,
            y: 120,
            ease: "power4.out",
        })
    })
}

function tabSwitch() {
    let tabs = document.querySelectorAll('.servicesItem .servicesTitle')

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach((tab) => {
                tab.parentNode.classList.remove('active')
            })
            console.log()
            tab.parentNode.classList.add('active')
        })
    })
}

function clique() {
    let items = document.querySelectorAll('.processWrapper .processList li')

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.ourProcessSec',
            start: 'top top',
        }
    })

    tl.from(items, {
        autoAlpha: 0,
        stagger: 0.2
    })
}

function formValidator() {



}

$(document).ready(function() {
    // Set a timeout of 30 seconds (30000 milliseconds)
    setTimeout(function() {
        $('#pricingModal').modal('show');
    }, 30000); // 30000 milliseconds = 30 seconds
});
