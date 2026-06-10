// 👤 GARANTI DESIGN - ABOUT MODULE (SU DOLUMU & SİNEMATİK METİN ANİMASYONLARI V3 + FOOTER ENGINE)

export function initAbout() {
    console.log("👤 About master lüks sürüm motor ateşlendi, kanka!");

    const cubukSeksiyonu = document.querySelector(".about-cubuk-seksiyonu");
    const basaDonBtn = document.getElementById("basaDonBtn");
    
    // 🔝 BAŞA DÖN MOTORU
if (basaDonBtn && !basaDonBtn.dataset.aboutBackReady) {

    basaDonBtn.dataset.aboutBackReady = "true";

    basaDonBtn.addEventListener("click", () => {
        if (typeof lenis !== 'undefined') lenis.scrollTo(0, { duration: 1.5 });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
    });

        // Görünürlük Kalkanı
        const scrollDinleyici = (scrollVal) => {
            if (scrollVal > 300) basaDonBtn.classList.add("nokta-aktif");
            else basaDonBtn.classList.remove("nokta-aktif");
        };

        if (typeof lenis !== 'undefined') lenis.on('scroll', (e) => scrollDinleyici(e.scroll));
        else window.addEventListener("scroll", () => scrollDinleyici(window.scrollY));
    }

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        // Eski triggerları temizle
        ScrollTrigger.getAll().forEach(st => {
            if (st.trigger && st.trigger.classList.contains('about-sahne')) st.kill();
        });

        // 🛡️ INITIAL STATE FOR FOOTER (Flicker Önleyici Kilit)
        // Sayfa ilk yüklendiğinde footer'ı görünmez ve hafif aşağıda konumlandırıyoruz kanka
        gsap.set("#aboutSayfasi .about-footer-yeni", { opacity: 0, y: 40 });

        // 1. Üst blok sinematik giriş
        gsap.from(".about-ust-blok .about-baslik-alani > *, .about-ust-blok .about-ana-yazi p", {
            opacity: 0, y: 40, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.3
        });

        // 2. Seksiyon Başlıkları & İzgaralar
        document.querySelectorAll(".about-seksiyon-baslik, .about-grafik-izgara").forEach(seksiyon => {
            gsap.from(seksiyon, {
                scrollTrigger: { trigger: seksiyon, start: "top 85%" },
                opacity: 0, y: 30, duration: 1, ease: "power3.out"
            });
        });

        // 3. 🏗️ HİZMETLER (Grafik Kartları Şelale Animasyonu)
        if (document.querySelector(".grafik-kart")) {
            gsap.set(".grafik-kart", { opacity: 1 });
            gsap.from(".grafik-kart", {
                scrollTrigger: { trigger: ".about-grafik-izgara", start: "top 80%" },
                opacity: 0, y: 50, duration: 1, stagger: 0.1, ease: "power4.out"
            });
        }

        // 4. 🌊 SU DOLUMU VE CANLI SAYICI MOTORU
        if (cubukSeksiyonu) {
            ScrollTrigger.create({
                trigger: cubukSeksiyonu,
                start: "top 80%",
                once: true, // Bir kez çalışması yeterli kanka
                onEnter: () => {
                    document.querySelectorAll(".cubuk-grup").forEach((grup) => {
                        const yuzdeElementi = grup.querySelector(".yuzde-degeri");
                        const ilerlemeBari = grup.querySelector(".cubuk-ilerleme");
                        if (!yuzdeElementi || !ilerlemeBari) return;

                        const hedef = parseInt(yuzdeElementi.getAttribute("data-hedef"));
                        const genislik = grup.getAttribute("data-genislik") || "75%"; // CSS yerine data-attribute daha güvenli kanka

                        gsap.to(ilerlemeBari, { width: genislik, duration: 2.2, ease: "power2.out" });
                        
                        gsap.to({ val: 0 }, {
                            val: hedef,
                            duration: 2.2,
                            onUpdate: function() { yuzdeElementi.innerText = `${Math.floor(this.targets()[0].val)}+`; }
                        });
                    });
                }
            });
        }

        // 🎯 5. FOOTER SİNEMATİK GEÇİŞ MOTORU (YENİ ENTEGRASYON)
        // Kullanıcı sayfanın en altına, yani ilkeler alanına ulaştığında footer yağ gibi akarak gelir
        if (document.querySelector("#aboutSayfasi .about-footer-yeni")) {
            gsap.to("#aboutSayfasi .about-footer-yeni", {
                scrollTrigger: {
                    trigger: ".about-ilkeler-seksiyonu", 
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
}