/* =========================
   TYPING ANIMATION
========================= */

const typedText = document.getElementById("typedText");

const typingWords = [
    "Aspiring Software Engineer",
    "AI & Machine Learning Enthusiast",
    "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord =
        typingWords[wordIndex];

    if (!deleting) {

        typedText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1600
            );

            return;
        }

    } else {

        typedText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) %
                typingWords.length;
        }
    }


    const speed =
        deleting ? 45 : 85;

    setTimeout(
        typeEffect,
        speed
    );
}


typeEffect();



/* =========================
   MOBILE NAVBAR
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


menuBtn.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "open"
        );

    }
);


document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove(
                    "open"
                );

            }
        );

    });



/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(
    element =>
        revealObserver.observe(element)
);



/* =========================
   SKILL BAR ANIMATION
========================= */

const skillProgress =
    document.querySelectorAll(
        ".skill-progress"
    );


const skillObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    const width =
                        entry.target.dataset.width;

                    entry.target.style.width =
                        width;

                    skillObserver.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.3
        }
    );


skillProgress.forEach(
    bar =>
        skillObserver.observe(bar)
);



/* =========================
   PROJECT FILTER
========================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const filter =
                button.dataset.filter;


            filterButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            button.classList.add(
                "active"
            );


            projectCards.forEach(card => {

                if (
                    filter === "all" ||
                    card.classList.contains(
                        filter
                    )
                ) {

                    card.style.display =
                        "flex";

                    setTimeout(() => {

                        card.style.opacity =
                            "1";

                        card.style.transform =
                            "translateY(0)";

                    }, 20);

                } else {

                    card.style.opacity =
                        "0";

                    card.style.transform =
                        "translateY(20px)";

                    setTimeout(() => {

                        card.style.display =
                            "none";

                    }, 300);

                }

            });

        }
    );

});



/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >=
                sectionTop
            ) {

                currentSection =
                    section.id;
            }

        });


        navItems.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute(
                    "href"
                ) ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );
            }

        });

    }
);



/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar =
    document.querySelector(
        ".navbar"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 50
        ) {

            navbar.style.background =
                "rgba(15, 23, 42, 0.94)";

            navbar.style.boxShadow =
                "0 10px 30px rgba(0,0,0,0.15)";

        } else {

            navbar.style.background =
                "rgba(15, 23, 42, 0.72)";

            navbar.style.boxShadow =
                "none";
        }

    }
);



/* =========================
   SCROLL TO TOP
========================= */

const topBtn =
    document.getElementById(
        "topBtn"
    );


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            topBtn.style.display =
                "block";

        } else {

            topBtn.style.display =
                "none";
        }

    }
);


topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);





/* =========================
   PARTICLE BACKGROUND
========================= */

const canvas =
    document.getElementById(
        "particles"
    );

const ctx =
    canvas.getContext("2d");


let particles = [];


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;
}


resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);



/* Create particles */

function createParticles() {

    particles = [];

    const amount =
        Math.min(
            90,
            Math.floor(
                window.innerWidth / 15
            )
        );


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        particles.push({

            x:
                Math.random() *
                canvas.width,

            y:
                Math.random() *
                canvas.height,

            size:
                Math.random() * 2 + 1,

            speedX:
                (Math.random() - 0.5)
                * 0.4,

            speedY:
                (Math.random() - 0.5)
                * 0.4,

            opacity:
                Math.random() * 0.5 + 0.1

        });

    }

}


createParticles();


window.addEventListener(
    "resize",
    createParticles
);



/* Draw particles */

function drawParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(
        particle => {

            particle.x +=
                particle.speedX;

            particle.y +=
                particle.speedY;


            if (
                particle.x < 0 ||
                particle.x > canvas.width
            ) {

                particle.speedX *= -1;
            }


            if (
                particle.y < 0 ||
                particle.y > canvas.height
            ) {

                particle.speedY *= -1;
            }


            ctx.beginPath();

            ctx.arc(
                particle.x,
                particle.y,
                particle.size,
                0,
                Math.PI * 2
            );


            ctx.fillStyle =
                `rgba(167,139,250,${particle.opacity})`;

            ctx.fill();

        }
    );


    drawConnections();

    requestAnimationFrame(
        drawParticles
    );
}



/* Connect nearby particles */

function drawConnections() {

    for (
        let i = 0;
        i < particles.length;
        i++
    ) {

        for (
            let j = i + 1;
            j < particles.length;
            j++
        ) {

            const dx =
                particles[i].x -
                particles[j].x;

            const dy =
                particles[i].y -
                particles[j].y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (
                distance < 130
            ) {

                const opacity =
                    0.12 *
                    (1 - distance / 130);


                ctx.beginPath();

                ctx.moveTo(
                    particles[i].x,
                    particles[i].y
                );

                ctx.lineTo(
                    particles[j].x,
                    particles[j].y
                );


                ctx.strokeStyle =
                    `rgba(167,139,250,${opacity})`;

                ctx.lineWidth = 1;

                ctx.stroke();
            }

        }

    }

}


drawParticles();



/* =========================
   MOUSE GLOW
========================= */

let mouseX = 0;
let mouseY = 0;


document.addEventListener(
    "mousemove",
    event => {

        mouseX =
            event.clientX;

        mouseY =
            event.clientY;


        document.body.style.setProperty(
            "--mouse-x",
            `${mouseX}px`
        );


        document.body.style.setProperty(
            "--mouse-y",
            `${mouseY}px`
        );

    }
);