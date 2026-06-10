// 🧠 GARANTI DESIGN - WORKFLOW & STUDIO PRACTICE MODULE

let workflowInitialized = false;

export function initWorkflow() {
    console.log("🧠 Workflow motoru ateşlendi!");

    const workflowSahnesi = document.getElementById('isAkisiSayfasi');
    if (!workflowSahnesi) return;

    if (typeof gsap === 'undefined') return;

    const ustBlok = workflowSahnesi.querySelector('.about-ust-blok');
    const basliklar = workflowSahnesi.querySelectorAll('.about-seksiyon-baslik');
    const journeyKartlar = workflowSahnesi.querySelectorAll('.journey-step');
    const completeNode = workflowSahnesi.querySelector('.journey-complete-node');
    const completeOrb = workflowSahnesi.querySelector('.complete-orb');
    const yazilimKartlar = workflowSahnesi.querySelectorAll('.ilke-kart');
    const basaDon = workflowSahnesi.querySelector('#basaDonBtnPractice');

    if (basaDon && !basaDon.dataset.workflowBackReady) {
        basaDon.dataset.workflowBackReady = "true";

const workflowBasaDonKontrol = (scrollVal) => {
    if (
        !workflowSahnesi.classList.contains("sayfa-gizli") &&
        scrollVal > 20
    ) {
        basaDon.classList.add("nokta-aktif");
    } else {
        basaDon.classList.remove("nokta-aktif");
    }
};

if (typeof lenis !== "undefined") {
    lenis.on("scroll", (e) => {
        workflowBasaDonKontrol(e.scroll);
    });

    workflowBasaDonKontrol(0);

} else {
    window.addEventListener("scroll", () => {
        workflowBasaDonKontrol(window.scrollY);
    });

    workflowBasaDonKontrol(window.scrollY);
}

        workflowBasaDonKontrol();
    }

    if (!workflowInitialized) {
        gsap.set([ustBlok, basliklar, yazilimKartlar], {
            opacity: 0,
            y: 35
        });

        gsap.set(journeyKartlar, {
            opacity: 0,
            y: 28,
            scale: 0.96
        });

        if (completeNode) {
            gsap.set(completeNode, {
                opacity: 0,
                y: 30,
                scale: 0.92
            });
        }

        if (typeof ScrollTrigger !== 'undefined') {
            gsap.set("#isAkisiSayfasi .about-footer-yeni", {
                opacity: 0,
                y: 40
            });

            if (document.querySelector("#isAkisiSayfasi .about-footer-yeni")) {
                gsap.to("#isAkisiSayfasi .about-footer-yeni", {
                    scrollTrigger: {
                        trigger: "#isAkisiSayfasi .workflow-software-seksiyonu",
                        start: "bottom 95%",
                        toggleActions: "play none none none"
                    },
                    opacity: 1,
                    y: 0,
                    duration: 1.4,
                    ease: "power3.out"
                });
            }

            setTimeout(() => ScrollTrigger.refresh(), 500);
        }

        workflowInitialized = true;
    }

    const tl = gsap.timeline({
        defaults: {
            ease: "power3.out",
            overwrite: true
        }
    });

    tl.to(ustBlok, {
        opacity: 1,
        y: 0,
        duration: 0.9
    });

    tl.to(basliklar, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12
    }, "-=0.35");

    tl.to(journeyKartlar, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.35,
        stagger: 0.015
    }, "-=0.30");

    if (completeNode) {
        tl.to(completeNode, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85
        }, "-=0.45");
    }

    if (completeOrb) {
        tl.fromTo(completeOrb,
            {
                boxShadow: "0 0 0 rgba(204,164,106,0)"
            },
            {
                boxShadow: "0 0 34px rgba(204,164,106,0.18), inset 0 0 20px rgba(204,164,106,0.06)",
                duration: 1.1
            },
            "-=0.45"
        );
    }

    tl.to(yazilimKartlar, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.09
    }, "-=0.45");
}