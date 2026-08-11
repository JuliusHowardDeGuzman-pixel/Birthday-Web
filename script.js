/* =========================================================
   MAVES KATE BIRTHDAY WEBSITE
   Romantic Interactive JavaScript ❤️
========================================================= */


/* =========================
   ELEMENTS
========================= */

const heartsContainer =
    document.querySelector(".hearts-container");

const heartSymbols = [
    "❤️",
    "💗",
    "💕",
    "💖",
    "💘",
    "💝"
];


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    if (!heartsContainer) return;

    const heart =
        document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 25 + 12 + "px";

    heart.style.opacity =
        Math.random() * 0.5 + 0.35;

    const duration =
        Math.random() * 6 + 5;

    heart.style.animationDuration =
        duration + "s";

    heart.style.animationDelay =
        Math.random() * 1 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, (duration + 1) * 1000);
}


/* Create hearts continuously */

setInterval(createHeart, 450);


/* =========================
   STAR PARTICLES
========================= */

function createParticles() {

    const fragment =
        document.createDocumentFragment();

    for (let i = 0; i < 100; i++) {

        const particle =
            document.createElement("div");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.top =
            Math.random() * 100 + "vh";

        particle.style.animationDelay =
            Math.random() * 3 + "s";

        particle.style.opacity =
            Math.random() * 0.7 + 0.2;

        fragment.appendChild(particle);
    }

    document.body.appendChild(fragment);
}

createParticles();


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   SCROLL PROGRESS
========================= */

const scrollProgress =
    document.querySelector(".scroll-progress");


function updateScrollProgress() {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percentage =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;

    if (scrollProgress) {

        scrollProgress.style.width =
            percentage + "%";

    }
}


window.addEventListener(
    "scroll",
    updateScrollProgress,
    { passive: true }
);

updateScrollProgress();


/* =========================
   HERO MOUSE GLOW
========================= */

const hero =
    document.querySelector(".hero");

const heroContent =
    document.querySelector(".hero-content");


if (hero && heroContent) {

    hero.addEventListener(
        "mousemove",
        function(event) {

            const rect =
                hero.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const moveX =
                (x / rect.width - 0.5) * 10;

            const moveY =
                (y / rect.height - 0.5) * 10;

            heroContent.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        }
    );


    hero.addEventListener(
        "mouseleave",
        function() {

            heroContent.style.transform =
                "translate(0, 0)";

        }
    );
}


/* =========================
   SURPRISE BUTTON
========================= */

function startSurprise() {

    const message =
        document.getElementById("message");


    /* Scroll to letter */

    if (message) {

        message.scrollIntoView({
            behavior: "smooth"
        });

    }


    /* Heart explosion */

    createHeartExplosion();


    /* Sparkle explosion */

    createSparkleBurst();


    /* Start music */

    playMusic();


    /* Button feedback */

    const button =
        document.querySelector(".love-button");

    if (button) {

        button.classList.add(
            "button-clicked"
        );

        setTimeout(() => {

            button.classList.remove(
                "button-clicked"
            );

        }, 600);
    }
}


/* =========================
   HEART EXPLOSION
========================= */

function createHeartExplosion() {

    for (let i = 0; i < 40; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.innerHTML =
                heartSymbols[
                    Math.floor(
                        Math.random() *
                        heartSymbols.length
                    )
                ];

            heart.style.position =
                "fixed";

            heart.style.left =
                "50%";

            heart.style.top =
                "50%";

            heart.style.zIndex =
                "9999";

            heart.style.pointerEvents =
                "none";

            heart.style.fontSize =
                Math.random() * 30 + 15 + "px";


            document.body.appendChild(
                heart
            );


            const x =
                (Math.random() - 0.5) *
                800;

            const y =
                (Math.random() - 0.5) *
                600;


            heart.animate(
                [
                    {
                        transform:
                            "translate(-50%, -50%) scale(0)",
                        opacity: 1
                    },

                    {
                        transform:
                            `translate(${x}px, ${y}px) scale(1.5)`,
                        opacity: 0
                    }
                ],
                {
                    duration: 1500,
                    easing: "ease-out",
                    fill: "forwards"
                }
            );


            setTimeout(() => {

                heart.remove();

            }, 1500);

        }, i * 25);
    }
}


/* =========================
   EXTRA HEART BURST
========================= */

function createHeartBurst() {

    const colors = [
        "❤️",
        "💗",
        "💖",
        "💕",
        "💘",
        "💝"
    ];

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        heart.style.position =
            "fixed";

        heart.style.left =
            "50%";

        heart.style.top =
            "50%";

        heart.style.zIndex =
            "9999";

        heart.style.pointerEvents =
            "none";

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";


        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            Math.random() * 400 + 150;

        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;


        document.body.appendChild(
            heart
        );


        heart.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(${x}px, ${y}px) scale(1.4)`,
                    opacity: 0
                }
            ],
            {
                duration: 1800,
                easing:
                    "cubic-bezier(.17,.67,.3,1.3)",
                fill: "forwards"
            }
        );


        setTimeout(() => {

            heart.remove();

        }, 1800);
    }
}


/* =========================
   SPARKLE BURST
========================= */

function createSparkleBurst() {

    const sparkles = [
        "✨",
        "✦",
        "✧",
        "💫"
    ];

    for (let i = 0; i < 20; i++) {

        setTimeout(() => {

            const sparkle =
                document.createElement("div");

            sparkle.innerHTML =
                sparkles[
                    Math.floor(
                        Math.random() *
                        sparkles.length
                    )
                ];

            sparkle.style.position =
                "fixed";

            sparkle.style.left =
                "50%";

            sparkle.style.top =
                "50%";

            sparkle.style.zIndex =
                "9999";

            sparkle.style.pointerEvents =
                "none";

            sparkle.style.fontSize =
                Math.random() * 20 + 12 + "px";


            document.body.appendChild(
                sparkle
            );


            const angle =
                Math.random() *
                Math.PI *
                2;

            const distance =
                Math.random() *
                350 + 100;

            const x =
                Math.cos(angle) *
                distance;

            const y =
                Math.sin(angle) *
                distance;


            sparkle.animate(
                [
                    {
                        transform:
                            "translate(-50%, -50%) scale(0)",
                        opacity: 1
                    },

                    {
                        transform:
                            `translate(${x}px, ${y}px) scale(1.5)`,
                        opacity: 0
                    }
                ],
                {
                    duration: 1400,
                    easing: "ease-out",
                    fill: "forwards"
                }
            );


            setTimeout(() => {

                sparkle.remove();

            }, 1400);

        }, i * 35);
    }
}

/* =========================
   CLICK HEART EFFECT
========================= */

document.addEventListener(
    "click",
    function(event) {

        /* Don't create another heart
           when clicking decorative particles */

        if (
            event.target.closest(
                ".photo-card"
            )
        ) {
            return;
        }

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position =
            "fixed";

        heart.style.left =
            event.clientX + "px";

        heart.style.top =
            event.clientY + "px";

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex =
            "9999";

        heart.style.fontSize =
            Math.random() * 10 + 16 + "px";


        document.body.appendChild(
            heart
        );

        heart.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },

                {
                    transform:
                        "translate(-50%, -120px) scale(1.5)",
                    opacity: 0
                }
            ],
            {
                duration: 1000,
                easing: "ease-out",
                fill: "forwards"
            }
        );


        setTimeout(() => {

            heart.remove();

        }, 1000);

    }
);

/* =========================
   PHOTO ERROR HANDLER
========================= */

document
    .querySelectorAll(".photo-card img")
    .forEach(img => {

        img.addEventListener(
            "error",
            function() {

                this.style.display =
                    "none";


                const placeholder =
                    document.createElement(
                        "div"
                    );

                placeholder.style.height =
                    "350px";

                placeholder.style.display =
                    "flex";

                placeholder.style.alignItems =
                    "center";

                placeholder.style.justifyContent =
                    "center";

                placeholder.style.fontSize =
                    "60px";

                placeholder.innerHTML =
                    "❤️";


                this.parentElement.insertBefore(
                    placeholder,
                    this
                );

            }
        );

    });

/* =========================
   PHOTO TILT EFFECT
========================= */

document
    .querySelectorAll(".photo-card")
    .forEach(card => {

        card.addEventListener(
            "mousemove",
            function(event) {

                if (
                    window.innerWidth <= 800
                ) {
                    return;
                }


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                    centerY) *
                    -3;

                const rotateY =
                    ((x - centerX) /
                    centerX) *
                    3;


                card.style.transform =
                    `translateY(-12px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;
            }
        );


        card.addEventListener(
            "mouseleave",
            function() {

                card.style.transform =
                    "";

            }
        );

    });

/* =========================
   BACKGROUND MUSIC
========================= */

const music =
    document.getElementById(
        "backgroundMusic"
    );

function playMusic() {

    if (!music) return;

    music.volume = 0.35;

    music.play().catch(() => {});

}

/* Start music after first interaction */

if (music) {

    document.addEventListener(
        "click",
        function() {

            playMusic();

        },
        {
            once: true
        }
    );

}

/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
    "❤️ Happy Birthday, My Baby! Maves Kate! ❤️"
);

console.log(
    "Made with love especially for you."
);