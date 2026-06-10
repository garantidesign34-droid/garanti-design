// 📞 GARANTI DESIGN - CONTACT MODULE (FINAL BRONZE PIN & GLOBAL SOCIAL ENGINE + FOOTER ANIMATION)

let myMap = null;
let markerGroup = null;
let contactMapRetryCount = 0;

export function initContact() {
    console.log("📞 Contact bronz pin motoru ateşlendi, ofisler kilitlendi!");

    const mapContainer = document.getElementById('premiumMap');
    if (!mapContainer) return;

if (typeof L === 'undefined') {
    contactMapRetryCount++;

    if (contactMapRetryCount > 20) {
        console.warn("Leaflet yüklenemedi, harita başlatılamadı.");
        return;
    }

    setTimeout(initContact, 150);
    return;
}

contactMapRetryCount = 0;

    // 🛡️ ADIM 1: FLICKER KALKANI & INITIAL ANIMATION STATES
    // Sosyal medya barı ve alt footer dahil tüm elementleri daha sayfa açılmadan gizleyip tabana çekiyoruz panpa
    if (typeof gsap !== 'undefined') {
        gsap.set([
            ".c-bilgi-kart", 
            ".contact-sag-blok", 
            ".contact-sol-blok .contact-baslik-alani > *", 
            ".contact-global-sosyal-bar",
            "#iletisimSayfasi .about-footer-yeni" // Yeni eklenen footer emniyet kilidi
        ], { 
            opacity: 0,
            y: 30
        });
    }

    setTimeout(() => {
        // 🧹 FULL RESET
        if (myMap) {
            try { myMap.remove(); } catch(e) {}
            myMap = null;
        }

        mapContainer.innerHTML = "";

        const locations = [
            {
                name: "GARANTI DESIGN - İSTANBUL",
                desc: "Eyüpsultan Mah. Zulal Sk. No:10/D A220 Sancaktepe, İstanbul",
                coords: [40.9856, 29.2464]
            },
            {
                name: "GARANTI DESIGN - DÜZCE",
                desc: "Camikebir Mah. Mehmet Gösterişli Sk. No:1 Kat:1 Daire:6 Merkez, Düzce",
                coords: [40.8415, 31.1593]
            }
        ];

        myMap = L.map('premiumMap', {
            center: [40.9136, 30.2029],
            zoom: 6,
            zoomControl: false,
            attributionControl: false,
            scrollWheelZoom: false
        });

        L.tileLayer('https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 20
        }).addTo(myMap);

        markerGroup = L.layerGroup().addTo(myMap);

        // 🎯 BRONZ PİN SİSTEMİ (ÇAPALAR)
        locations.forEach(loc => {
            const bronzPin = L.divIcon({
                className: 'premium-pin-box',
                html: '<div class="premium-pin-core"></div>',
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });

            const marker = L.marker(loc.coords, {
                icon: bronzPin,
                interactive: true
            });

            marker.bindPopup(`
                <div class="premium-popup-card">
                    <h4 style="color:#cca46a; font-family:inherit; font-weight:700; margin:0 0 4px 0; font-size:13px; letter-spacing:1px;">${loc.name}</h4>
                    <p style="color:#ffffff; font-size:11px; line-height:1.4; margin:0; opacity:0.8;">${loc.desc}</p>
                </div>
            `, {
                closeButton: false,
                autoClose: true,
                className: "premium-map-popup"
            });

            marker.addTo(markerGroup);
        });

        // 🧠 FIT BOUNDS
        setTimeout(() => {
            myMap.invalidateSize();
            myMap.fitBounds(
                locations.map(l => l.coords),
                { padding: [150, 150] }
            );
        }, 800);

    }, 400);

    // ==========================================================================
    // ✍️ FORM VE GSAP ANİMASYONLARI
    // ==========================================================================
    const formInputs = document.querySelectorAll('.contact-premium-form input, .contact-premium-form textarea');
    formInputs.forEach(input => {
        if (input.value.trim() !== "") input.parentElement.classList.add('is-focused');
        input.addEventListener('focus', () => input.parentElement.classList.add('is-focused'));
        input.addEventListener('blur', () => {
            if (input.value.trim() === "") input.parentElement.classList.remove('is-focused');
        });
    });

  

    // 🚀 3. ADIM: SİNEMATİK GSAP TETİKLEME MOTORU
    if (typeof gsap !== 'undefined') {

        // Sol Blok: Başlık, Manifesto ve İletişim Kartları Girişi
        gsap.fromTo(
            ".contact-sol-blok .contact-baslik-alani > *, .contact-sol-blok .contact-manifesto-metin, .c-bilgi-kart",
            {
                opacity: 0,
                x: -40
            },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                stagger: 0.12,
                ease: "power4.out",
                delay: 0.2
            }
        );

        // Sağ Blok: Premium Brief Formu Girişi
        gsap.fromTo(
            ".contact-sag-blok",
            {
                opacity: 0,
                y: 50,
                scale: 0.98
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.4,
                ease: "power3.out",
                delay: 0.4
            }
        );

        // 🎯 GENİŞ SOSYAL MEDYA BARININ GELECEĞE DOĞRU SÜZÜLMESİ
        gsap.fromTo(
            ".contact-global-sosyal-bar",
            {
                opacity: 0,
                y: 30
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                delay: 0.6
            }
        );

        // Alt Taban Leaflet Harita Girişi
        gsap.fromTo(
            ".contact-harita-bolumu",
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1.5,
                ease: "power3.out",
                delay: 0.8
            }
        );

        // 🎯 YENİ ENTEGRASYON: CONTACT SAYFASI FOOTER SİNEMATİK GİRİŞİ
        // Harita oturduktan hemen sonra en alttaki lüks footer da aşağıdan yukarıya pürüzsüzce süzülür panpa
        gsap.fromTo(
            "#iletisimSayfasi .about-footer-yeni",
            {
                opacity: 0,
                y: 40
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.4,
                ease: "power3.out",
                delay: 1.0 // Kusursuz bir basamaklama ritmi için delay süresini optimize ettim kanka
            }
        );
    }
}