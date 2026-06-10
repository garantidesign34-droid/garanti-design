
import './modules/projects.js';
import { initContact } from './modules/contact.js';
import { initHome } from './modules/home.js';
import { initAbout } from './modules/about.js';
import { initWorkflow } from './modules/workflow.js'; // 🧠 MASTER INTEGRATION: BAĞIMSIZ WORKFLOW MOTORU ENJEKTE EDİLDİ

// Global Elementler
const preloader = document.getElementById('preloader');
const perde = document.getElementById('gecisPerdesi');
const homeSayfasi = document.getElementById('homeSayfasi');
const aboutSayfasi = document.getElementById('aboutSayfasi');
const isAkisiSayfasi = document.getElementById('isAkisiSayfasi'); // 🧠 YENİ ODALIK KATMAN
const iletisimSayfasi = document.getElementById('iletisimSayfasi');
const projectsSayfasi = document.getElementById('projectsSayfasi');

// --- ⏳ İLK GİRİŞ PRELOADER VE BAŞLANGIÇ --- 
window.addEventListener('load', () => { 
    // Ana sayfa modülünü ilk açılışta ateşle
    initHome();

    // İlk açılışta sahnelerin çakışmasını önlemek için emniyet kilidi
    if (homeSayfasi) homeSayfasi.classList.remove('sayfa-gizli');
    if (aboutSayfasi) aboutSayfasi.classList.add('sayfa-gizli');
    if (isAkisiSayfasi) isAkisiSayfasi.classList.add('sayfa-gizli'); 
    if (iletisimSayfasi) iletisimSayfasi.classList.add('sayfa-gizli');

    setTimeout(() => { 
        if(preloader) preloader.classList.add('gizle'); 

        setTimeout(() => { 
            document.body.classList.add('site-yuklendi');

            // 🚨 MASTER FIX: Animasyon bitince preloader'ı DOM'dan tamamen kazıyoruz.
            // Böylece hem fare tekerleğinin hem de mobil parmağın önündeki o hayalet duvar kalkıyor!
            if(preloader) {
                preloader.style.setProperty('display', 'none', 'important');
                preloader.style.setProperty('pointer-events', 'none', 'important');
            }

            if (window.innerWidth <= 900 && typeof ScrollTrigger !== "undefined") {
                setTimeout(() => {
                    ScrollTrigger.clearScrollMemory();
                    ScrollTrigger.refresh();
                }, 1200); 
            }

        }, 50); 
    }, 800);
});
// --- 🎬 G-D YANSIMALI SİNEMATİK SAYFA GEÇİŞ SİSTEMİ (0.25 SANİYE) ---

// --- 🎬 G-D YANSIMALI SİNEMATİK SAYFA GEÇİŞ SİSTEMİ (0.25 SANİYE) ---
export function sinematikSayfaGecisi(gosterilecekSayfa, aktifLinkId, modulTetikleyici) {
    if (!perde || !gosterilecekSayfa) return;
    
    document.querySelectorAll('.mega-menu').forEach(menu => {
        menu.classList.remove('aktif-menu');
    });

    document.querySelectorAll('.menu-ok').forEach(ok => {
        ok.style.transform = 'rotate(0deg)';
        ok.style.color = 'rgba(255,255,255,.55)';
    });

    perde.classList.add('perde-aktif');

    setTimeout(() => {
        if(homeSayfasi) homeSayfasi.classList.add('sayfa-gizli');
        if(aboutSayfasi) aboutSayfasi.classList.add('sayfa-gizli');
        if(projectsSayfasi) projectsSayfasi.classList.add('sayfa-gizli');
        if(isAkisiSayfasi) isAkisiSayfasi.classList.add('sayfa-gizli'); // 🧠 GİZLEME KALKANI
        if(iletisimSayfasi) iletisimSayfasi.classList.add('sayfa-gizli');

        document.querySelectorAll('.nav-linkler a').forEach(link => link.classList.remove('aktif'));
        
        // Mega menülerin içinden tıklandığında üst ana Stüdyo butonunu aktif tutma sigortası kanka
        if (aktifLinkId === 'm-hakkimizda' || aktifLinkId === 'm-is-akisi') {
            const studioBtn = document.getElementById('studioBtn');
            if(studioBtn) studioBtn.classList.add('aktif');
        } else {
            const aktifLink = document.getElementById(aktifLinkId);
            if(aktifLink) aktifLink.classList.add('aktif');
        }
        

        // 🚨 KAPSAMLI SCROLL SERBEST BIRAKMA KALKANI - DÜZELTİLDİ
        if (
            gosterilecekSayfa.id === 'aboutSayfasi' ||
            gosterilecekSayfa.id === 'isAkisiSayfasi' ||
            gosterilecekSayfa.id === 'projectsSayfasi' ||
            gosterilecekSayfa.id === 'iletisimSayfasi'
            
        ) {
            document.body.style.overflowY = "auto";
            document.documentElement.style.overflowY = "auto";

            gosterilecekSayfa.style.removeProperty("overflow-y");
            gosterilecekSayfa.style.removeProperty("height");
        } else {
            if (window.innerWidth > 900) {
                document.body.style.overflowY = "hidden";
            } else {
                document.body.style.overflowY = "auto";
            }
        }
        

        // 🚨 MODÜLLERİN GELMESİNİ SAĞLAYAN KRİTİK GÖRÜNÜRLÜK ENJEKSİYONU
        gosterilecekSayfa.classList.remove('sayfa-gizli');

        if (modulTetikleyici) modulTetikleyici();
        
        setTimeout(() => {
            perde.classList.remove('perde-aktif');
            if (typeof ScrollTrigger !== "undefined") {
                ScrollTrigger.refresh();
            }
        }, 350);

    }, 250);
} // <--- FONKSİYON BURADA SAĞLIKLI BİR ŞEKİLDE KAPANDI!

// Menü Tıklama Yönetimi
document.addEventListener('click', (e) => {
    if (e.target.closest("#themeToggle")) return;

    const studioBtn = document.getElementById('studioBtn');
    const studioMegaMenu = document.getElementById('studioMegaMenu');
    const okStudio = studioBtn?.querySelector('.menu-ok');

    const projelerBtn = document.getElementById('projelerBtn');
    const megaMenu = document.getElementById('megaMenu');
    const ok = projelerBtn?.querySelector('.menu-ok');

    // 🧠 1. STUDIO MEGA MENU AÇMA/KAPAMA MOTORU
    if (studioBtn && (e.target === studioBtn || studioBtn.contains(e.target))) {
        e.preventDefault();

        if (megaMenu) megaMenu.classList.remove('aktif-menu');
        if (ok) {
            ok.style.transform = 'rotate(0deg)';
            ok.style.color = 'rgba(255,255,255,.55)';
        }

        if (studioMegaMenu) {
            studioMegaMenu.classList.toggle('aktif-menu');

            if (okStudio) {
                if (studioMegaMenu.classList.contains('aktif-menu')) {
                    okStudio.style.transform = 'rotate(45deg)';
                    okStudio.style.color = '#cca46a';
                } else {
                    okStudio.style.transform = 'rotate(0deg)';
                    okStudio.style.color = 'rgba(255,255,255,.55)';
                }
            }
        }
        return;
    }

    // 🧠 2. PROJELER MEGA MENU TETİKLEYİCİSİ
    if (projelerBtn && (e.target === projelerBtn || projelerBtn.contains(e.target))) {
        e.preventDefault();
        // Eğer Stüdyo menüsü açıksa onu kapat kanka
        if (studioMegaMenu) studioMegaMenu.classList.remove('aktif-menu');
        if (okStudio) { okStudio.style.transform = 'rotate(0deg)'; okStudio.style.color = '#a3a3a3'; }
        
        if (megaMenu) {
            megaMenu.classList.toggle('aktif-menu');
            if (ok) {
                if (megaMenu.classList.contains('aktif-menu')) { ok.style.transform = 'rotate(45deg)'; ok.style.color = '#cca46a'; } 
                else { ok.style.transform = 'rotate(0deg)'; ok.style.color = '#a3a3a3'; }
            }
        }
        return;
    }

    // 🧠 3. DIŞARI TIKLANINCA İKİ PANELİ DE KAPATMA GÜVENLİK SİGORTASI
    if (studioMegaMenu && megaMenu && studioBtn && projelerBtn && !studioBtn.contains(e.target) && !studioMegaMenu.contains(e.target) && !projelerBtn.contains(e.target) && !megaMenu.contains(e.target)) {
        studioMegaMenu.classList.remove('aktif-menu');
        megaMenu.classList.remove('aktif-menu');
        if (okStudio) { okStudio.style.transform = 'rotate(0deg)'; okStudio.style.color = '#a3a3a3'; }
        if (ok) { ok.style.transform = 'rotate(0deg)'; ok.style.color = '#a3a3a3'; }
    }

    // 🧠 4. LÜKS MEGA KUTU TIKLAMALARI VE SAYFA GECIS KÖPRÜSÜ
    const megaKutu = e.target.closest('.mega-kutu');
    if (megaKutu && megaKutu.dataset.projectFilter) {
        e.preventDefault();

        document.querySelectorAll('.project-tab').forEach(tab => {
            tab.classList.remove('aktif-tab');

            if (tab.dataset.project === megaKutu.dataset.projectFilter) {
                tab.classList.add('aktif-tab');
            }
        });

        sinematikSayfaGecisi(projectsSayfasi, 'projelerBtn', () => {
            if (window.initProjects) {
                window.initProjects(megaKutu.dataset.projectFilter);
            }
        });
        return;
    }

    if (megaKutu) {
        if (megaKutu.id === 'm-hakkimizda' || megaKutu.id === 'm-is-akisi') {
            e.preventDefault();
            if (studioMegaMenu) studioMegaMenu.classList.remove('aktif-menu');
            if (okStudio) { okStudio.style.transform = 'rotate(0deg)'; okStudio.style.color = '#a3a3a3'; }

            if (megaKutu.id === 'm-hakkimizda') {
                sinematikSayfaGecisi(aboutSayfasi, 'm-hakkimizda', initAbout);
            }
            if (megaKutu.id === 'm-is-akisi') {
                // 🧠 VE KUSURSUZ YENİ MODÜLER İŞ AKIŞI MOTORUNUN ATEŞLENME ANI!
                sinematikSayfaGecisi(isAkisiSayfasi, 'm-is-akisi', initWorkflow);
            }
            return;
        }
    }

    const link = e.target.closest('a');
    if (!link) return;
    
    if (link.id === 'm-anasayfa' || link.id === 'm-logo') {
        e.preventDefault();
        if (studioMegaMenu) studioMegaMenu.classList.remove('aktif-menu');
        if (megaMenu) megaMenu.classList.remove('aktif-menu');
        if (okStudio) { okStudio.style.transform = 'rotate(0deg)'; okStudio.style.color = '#a3a3a3'; }
        if (ok) { ok.style.transform = 'rotate(0deg)'; ok.style.color = '#a3a3a3'; }
        sinematikSayfaGecisi(homeSayfasi, 'm-anasayfa', initHome);
    }

    if (link.id === 'm-iletisim') {
        e.preventDefault();
        if (studioMegaMenu) studioMegaMenu.classList.remove('aktif-menu');
        if (megaMenu) megaMenu.classList.remove('aktif-menu');
        if (okStudio) { okStudio.style.transform = 'rotate(0deg)'; okStudio.style.color = '#a3a3a3'; }
        if (ok) { ok.style.transform = 'rotate(0deg)'; ok.style.color = '#a3a3a3'; }
        sinematikSayfaGecisi(iletisimSayfasi, 'm-iletisim', initContact);
    }
});

// --- 👑 MOUSE HAREKET KODLARI --- 
const nokta = document.getElementById('mouseNokta'); 
const halka = document.getElementById('mouseHalka'); 
let mouseX = 0, mouseY = 0, halkaX = 0, halkaY = 0; 

document.addEventListener('mousemove', (e) => { 
    if(nokta) { nokta.style.left = e.clientX + 'px'; nokta.style.top = e.clientY + 'px'; }
    mouseX = e.clientX; mouseY = e.clientY; 
}); 

function halkaAnimasyon() { 
    halkaX += (mouseX - halkaX) * 0.15; halkaY += (mouseY - halkaY) * 0.15; 
    if(halka) { halka.style.left = halkaX + 'px'; halka.style.top = halkaY + 'px'; }
    requestAnimationFrame(halkaAnimasyon); 
} 
halkaAnimasyon();

// --- 👑 MOUSE HAREKET VE HOVER ETKİLEŞİM MOTORU (MOBİL FRENCİLİ) --- 
if (window.innerWidth > 900) {
    const nokta = document.getElementById('mouseNokta'); 
    const halka = document.getElementById('mouseHalka'); 
    let mouseX = 0, mouseY = 0, halkaX = 0, halkaY = 0; 

    document.addEventListener('mousemove', (e) => { 
        if(nokta) { nokta.style.left = e.clientX + 'px'; nokta.style.top = e.clientY + 'px'; }
        mouseX = e.clientX; mouseY = e.clientY; 
    }); 

    function halkaAnimasyon() { 
        halkaX += (mouseX - halkaX) * 0.15; halkaY += (mouseY - halkaY) * 0.15; 
        if(halka) { halka.style.left = halkaX + 'px'; halka.style.top = halkaY + 'px'; }
        requestAnimationFrame(halkaAnimasyon); 
    } 
    halkaAnimasyon();

    // 💧 Reaksiyon balonları - Sadece masaüstünde DOM'u yorsun, mobilde kilit yapmasın
    const efekteBagliElemanlar = document.querySelectorAll('.f-sosyal-link, .yasal-link, .mega-kutu, .lang-btn, #studioBtn'); 
    efekteBagliElemanlar.forEach(link => { 
        if(!link) return;
        link.addEventListener('mouseenter', function() { 
            for (let i = 0; i < 5; i++) { 
                const drop = document.createElement('span'); drop.classList.add('liquid-drop');
                const boyut = Math.random() * 6 + 5; drop.style.width = boyut + 'px'; drop.style.height = boyut + 'px'; 
                const fırlamaX = (Math.random() - 0.5) * 90 + 'px'; const fırlamaY = (Math.random() - 0.5) * 90 + 'px'; 
                drop.style.setProperty('--x', fırlamaX); drop.style.setProperty('--y', fırlamaY); 
                this.appendChild(drop); setTimeout(() => { drop.remove(); }, 700); 
            } 
        }); 
    }); 
}

const hoverElemanlari = document.querySelectorAll(
    'a, button, #projelerBtn, .f-sosyal-link, .yasal-link, .mega-kutu, .lang-btn, .logo-alani, #studioBtn, #projectsSayfasi .f-sosyal-link, #projectsSayfasi .yasal-link'
);
hoverElemanlari.forEach(eleman => { 
    eleman.addEventListener('mouseenter', () => { if(halka) halka.classList.add('hoverda'); }); 
    eleman.addEventListener('mouseleave', () => { if(halka) halka.classList.remove('hoverda'); }); 
});

// --- 🔤 MASTER DİL SÖZLÜĞÜ ---
window.dilVerisi = {
    tr: { 
        anasayfa: '<i class="fa-solid fa-house"></i> Ana Sayfa', 
        studioAna: 'Stüdyo',
        megaAboutBaslik: 'Hakkımızda',
        megaAboutYazi: 'Garanti Design kurumsal manifestomuz, felsefemiz ve başarı tablomuz',
        megaFlowBaslik: 'İş Akışı',
        megaFlowYazi: 'İlk aşamadan başlayıp proje teslimine kadar uzanan süreç pratiğimiz',
        projeler: 'Projeler', 
        iletisim: '<i class="fa-solid fa-phone"></i> İletişim', 
        megaMimariBaslik: 'Mimari & Peyzaj Projeleri', 
        megaMimariYazi: 'Dış cephe, çevre düzenlemesi ve büyük ölçekli projelerimiz',
        megaIcBaslik: 'İç Mimari Projeleri', 
        megaIcYazi: 'Otel, ofis ve konutlar için detaylı iç mimari projeler',
        megaProductBaslik: 'Ürün Tasarımı',
        megaProductYazi: 'Özel tasarım ürünler ve konsept geliştirme çalışmaları',
        heroAnaBaslik: 'GELECEĞİ GÖRSELLEŞTİRİYORUZ', 
        heroAltBaslik: 'Mimari Render, Peyzaj ve İç Mekan Animasyon Stüdyosu', 
        btnInceleyin: 'Projelerimizi İnceleyin', 
        btnUlasin: 'Bize Ulaşın', 
        telif: '&copy; 2016 Garanti Design. Tüm Hakları Saklıdır.', 
        yasalSartlar: 'Şartlar ve Koşullar', 
        yasalGizlilik: 'Gizlilik Politikası', 
        yasalCerez: 'Çerez Politikası', 
        aboutİlkelerBaslik: 'İLKELERİMİZ',
        ilkeT1: 'Detaylar',
        ilkeD1: 'Her milimetrede en yüksek kaliteyi hedefleyen titiz ve kusursuz çizgi mimarisi.',
        ilkeT2: 'Özen',
        ilkeD2: 'Tasarımlarımıza ve iş ortaklarımızın vizyonuna elit segmentte gösterilen sarsılmaz sadakat.',
        ilkeT3: 'Hızlı Çözümler',
        ilkeD3: 'Zamanın değerini bilerek, estetikten ödün vermeden üretilen yüksek donanımlı projeler.',
        ilkeT4: 'İletişim',
        ilkeD4: 'Fikirlerin şeffafça paylaşıldığı, kesintisiz ve güvene dayalı global çözüm ortaklığı.',
        aboutManifestoEtiket: 'KURUMSAL MANİFESTO',
        aboutAnaBaslik: 'DUYGULARI MİMARİYE DÖNÜŞTÜRÜYORUZ',
        aboutYazi1: 'Garanti Design, küresel vizyonu ve yenilikçi bakış açısıyla, fikirleri en realistic ve en anlaşılır şekilde hayata geçiren high segment bir tasarım, mühendislik ve danışmanlık kolektifidir. Kurulduğumuz 2016 yılından bu yana, ulusal ve uluslararası ölçekte imza attığımız nitelikli projelerle; teknik doğruluğu, estetik üstünlüğü ve yaratıcı yaklaşımları tek bir potada eritiyoruz.',
        aboutYazi2: 'Ana uzmanlık alanımız olan milimetrik detay çizimleri, profesyonel render hizmetleri ve sinematik 3D animasyonların ötesinde; müteahhitlik hizmetleri, proje danışmanlığı, stratejik proje satışı ve high segment ticari çözümlerimizle (araç galerisi ve rent a car ağı) iş ortaklarımıza uçtan uca sürdürülebilir bir ekosistem sunuyoruz. Güven, kalite ve titiz çalışma anlayışımızla, her alanda sınırları zorlayan güçlü bir çözüm ortağıyız.',
        aboutTrackBaslik: 'STÜDYO BAŞARI TABLOSU',
        aboutNetworkBaslik: 'MARKA ORTAKLARIMIZ',
        aboutCoreBaslik: 'HİZMETLERİMİZ',
        bar1: 'Sektörel Deneyim Süresi (Yıl)',
        bar2: 'Tamamlanan Render & Animasyon',
        bar3: 'Tamamlanan Uygulama Projesi',
        bar4: 'Erişim (Hizmet Verilen Şehir)',
        coreT1: 'Detay Çizimler',
        coreD1: 'Teknik doğruluk ve uluslararası standartlarda milimetrik uygulama ve detay projeleri.',
        coreT2: 'Profesyonel 3D Modelleme',
        coreD2: 'Tasarımlarınızın her kıvrımını donanım ivmeli katı modelleme teknolojileriyle dijitale aktarma.',
        coreT3: 'Render Hizmetleri',
        coreD3: 'Işığın, dokunun ve malzemenin foto-gerçekçi matematiksel hesaplamalarla master seviye sunumu.',
        coreT4: '3D Animasyon',
        coreD4: 'Kamera fiziği ve akıcı çevre dinamikleriyle bezeli sinematik walkthrough şovları.',
        coreT5: 'Archviz Teknolojisi & Sanal Gerçeklik',
        coreD5: 'Büyük ölçekli mimari konseptlerin, peyzaj alanlarının ve sanal gerçeklik (VR) simülasyonlarının lüks görselleştirme sanatı.',
        coreT6: 'Uygulama Projeleri',
        coreD6: 'Şantiyede hatasız işleyecek, mühendislik ve mimari süreçleri birleştiren uygulama kalkanı.',
        basaDon: 'BAŞA DÖN',
        cEtiket: 'STÜDYO AĞLARI',
        cAnaBaslik: 'FORMU DEĞİL FİKRİ PAYLAŞ',
        cManifesto: 'Fikirlerinizi foto-gerçekçi matematiksel hesaplamalar ve sinematik çevre dinamikleriyle dünyaya sunmaya hazırız. Global mimari animasyon kolektifimizle projenize değer katın.',
        lblIsim: 'ADINIZ SOYADINIZ',
        lblEmail: 'E-POSTA ADRESİNİZ',
        lblKonu: 'TELEFON NUMARANIZ',
        lblMesaj: 'PROJE ÖZETİ & DETAYLARI',
        btnGonder: 'BRIEF GÖNDER',
        hEtiket: 'STÜDYO LOKASYONLARI',
        cKartTelBaslik: 'TELEFON',
        cKartMailBaslik: 'E-MAIL',
        cKartIstBaslik: 'İSTANBUL OFİS',
        cKartIstAdres: 'Eyüpsultan Mah. Zulal Sk. No:10/D A220 Sancaktepe,İstanbul',
        cKartDuzceBaslik: 'DÜZCE OFİS',
        cKartDuzceAdres: 'Camikebir Mah. Mehmet Gösterişli Sk. No:1 Kat:1 Daire:6 Merkez,Düzce',
        cGlobalSosyalYazi: 'KANALLARIMIZLA BAĞLANTI KURUN',
        workflowEtiket: 'METODOLOJİ & ZAMAN ÇİZELGESİ',
        workflowBaslik: 'FİKRİ GERÇEĞE DÖNÜŞTÜRÜYORUZ',
        projectsEtiket: "SEÇİLMİŞ PROJELER",
        projectsBaslik: "PROJELERİMİZ",
        projectsAciklama: "Garanti Design tarafından geliştirilen mimari, iç mimari ve ürün tasarımı çalışmaları.",
        projectsTabArchitecture: "MİMARİ & PEYZAJ",
        projectsTabInterior: "İÇ MİMARİ",
        projectsTabProduct: "ÜRÜN TASARIMI",
        workflowManifesto: 'Her Garanti Design projesi; analiz, modelleme, malzeme zekâsı, sinematik ışık, revizyon disiplini ve nihai teslim aşamalarından geçer. İş akışımız ham mimari veriyi güçlü, anlaşılır ve duygusal etkiye sahip görsel deneyimlere dönüştürür.',
        journeyBaslik: 'MÜŞTERİ YOLCULUĞU',
        qualityBaslik: 'KALİTE KONTROL SİSTEMİ',
        toolkitBaslik: 'STÜDYO ARAÇ SETİ',
        projectComplete: 'PROJE TAMAMLANDI',
        qc1t: 'Doğruluk',
        qc1d: 'Her görsel karar mimari ölçek, malzeme mantığı ve proje referanslarına göre kontrol edilir.',
        qc2t: 'Görsel Netlik',
        qc2d: 'Nihai görsel, projenin atmosferini korurken tasarımı açık şekilde anlatmalıdır.',
        qc3t: 'Revizyon Akışı',
        qc3d: 'Geri bildirimler yapılandırılmış inceleme süreciyle değerlendirilir ve uygulanır.',
        qc4t: 'Son Rötuş',
        qc4d: 'Renk, kontrast, kadraj ve detay dengesi teslim öncesi rafine edilir.',
    },
    en: { 
        anasayfa: '<i class="fa-solid fa-house"></i> Home', 
        studioAna: 'Studio',
        megaAboutBaslik: 'About Us',
        megaAboutYazi: 'Garanti Design corporate manifesto, philosophy, and achievements',
        megaFlowBaslik: 'Workflow',
        megaFlowYazi: 'Our process practice from initial stages through project delivery',
        projeler: 'Projects', 
        iletisim: '<i class="fa-solid fa-phone"></i> Contact', 
        megaMimariBaslik: 'Architectural & Landscape Projects', 
        megaMimariYazi: 'Our exterior design, landscape design, and large-scale projects', 
        megaIcBaslik: 'Interior Design Projects', 
        megaIcYazi: 'Detailed interior design projects for hotels, offices, and residential spaces', 
        megaProductBaslik: 'Product Design',
        megaProductYazi: 'Custom-designed products and concept development studies',
        heroAnaBaslik: 'WE VISUALIZE THE FUTURE', 
        heroAltBaslik: 'Architectural Rendering, Landscape & Interior Animation Studio', 
        btnInceleyin: 'Explore Our Projects', 
        btnUlasin: 'Contact Us', 
        telif: '&copy; 2016 Garanti Design. All Rights Reserved.', 
        yasalSartlar: 'Terms and Conditions', 
        yasalGizlilik: 'Privacy Policy', 
        yasalCerez: 'Cookie Policy', 
        aboutİlkelerBaslik: 'OUR PRINCIPLES',
        ilkeT1: 'Details',
        ilkeD1: 'Meticulous and flawless line architecture aiming for the highest quality in every millimeter.',
        ilkeT2: 'Precision & Care',
        ilkeD2: 'Unwavering loyalty shown at the elite segment to our designs and the vision of our business partners.',
        ilkeT3: 'Highly Equipped Projects',
        ilkeD3: 'Highly equipped projects produced without compromising aesthetics, knowing the value of time.',
        ilkeT4: 'Communication',
        ilkeD4: 'Continuous and trust-based global solution partnership where ideas are shared transparently.',
        aboutManifestoEtiket: 'CORPORATE MANIFESTO',
        aboutAnaBaslik: 'WE ARCHITECT EMOTIONS',
        aboutYazi1: 'Garanti Design is a high-end design, engineering, and consultancy collective that brings ideas to life in the most realistic and comprehensible way through a global vision and innovative perspective. Since our establishment in 2016, we have combined technical accuracy, aesthetic superiority, and creative approaches into a single pot with qualified projects we have signed on national and international scales.',
        aboutYazi2: 'Beyond our main expertise in millimetric detail drawings, professional rendering services, and cinematic 3D animations; we offer an end-to-end sustainable ecosystem to our business partners with contracting services, project consultancy, strategic project sales, and premium commercial solutions (car gallery and rent a car network). We are a strong solution partner that pushes the boundaries in every field with our understanding of trust, quality, and meticulous work.',
        aboutTrackBaslik: 'STUDIO TRACK RECORD',
        aboutNetworkBaslik: 'BRAND PARTNERS',
        aboutCoreBaslik: 'OUR SERVICES',
        bar1: 'Years of Industry Experience',
        bar2: 'Completed Renders & Animations',
        bar3: 'Completed Execution Projects',
        bar4: 'Global Reach (Countries Served)',
        coreT1: 'Detail Drawings',
        coreD1: 'Millimetric execution and detail projects in technical accuracy and international standards.',
        coreT2: 'Professional 3D Modeling',
        coreD2: 'Transferring every curve of your designs to digital with hardware-accelerated solid modeling technologies.',
        coreT3: 'Rendering Services',
        coreD3: 'Master-level presentation of light, texture, and material with photo-realistic mathematical calculations.',
        coreT4: '3D Animation',
        coreD4: 'Cinematic walkthrough shows adorned with camera physics and fluid environmental dynamics.',
        coreT5: 'Archviz Technology & Virtual Reality',
        coreD5: 'The luxury visualization art of large-scale architectural concepts, landscape areas, and virtual reality (VR) simulations.',
        coreT6: 'Execution Projects',
        coreD6: 'An execution shield combining engineering and architectural processes that will work flawlessly on construction sites.',
        basaDon: 'BACK TO TOP',
        cEtiket: 'STUDIO NETWORK',
        cAnaBaslik: "SHARE YOUR IDEA NOT THE FORM",
        cManifesto: 'We are ready to present your ideas to the world with photo-realistic mathematical calculations and cinematic environmental dynamics. Add value to your project with our global architectural animation collective.',
        lblIsim: 'YOUR NAME',
        lblEmail: 'YOUR E-MAIL',
        lblKonu: 'YOUR PHONE NUMBER',
        lblMesaj: 'PROJECT BRIEF & DETAILS',
        btnGonder: 'SEND BRIEF',
        hEtiket: 'STUDIO LOCATIONS',
        cKartTelBaslik: 'PHONE',
        cKartMailBaslik: 'E-MAIL',
        cKartIstBaslik: 'ISTANBUL OFFICE',
        cKartIstAdres: 'Eyupsultan Mah. Zulal St. No:10/D A220 Sancaktepe, Istanbul',
        cKartDuzceBaslik: 'DUZCE OFFICE',
        cKartDuzceAdres: 'Camikebir Mah. Mehmet Gosterisli St. No:1 Fl:1 Apt:6 Center, Duzce',
        cGlobalSosyalYazi: 'CONNECT WITH OUR CHANNELS',
        workflowEtiket: 'METHODOLOGY & TIMELINE',
        workflowBaslik: 'CRAFTING REALITY FROM SKETCH',
        projectsEtiket: "SELECTED WORKS",
        projectsBaslik: "OUR PROJECTS",
        projectsAciklama: "Architectural, Interior and Product Design works developed by Garanti Design.",
        projectsTabArchitecture: "ARCHITECTURAL & LANDSCAPE",
        projectsTabInterior: "INTERIOR DESIGN",
        projectsTabProduct: "PRODUCT DESIGN",
        workflowManifesto: 'Every Garanti Design project moves through a precise production pipeline: analysis, modeling, material intelligence, cinematic lighting, review discipline and final delivery. Our workflow transforms raw architectural data into clear, realistic and emotionally powerful visual experiences.',
        journeyBaslik: 'CLIENT JOURNEY',
        qualityBaslik: 'QUALITY CONTROL SYSTEM',
        toolkitBaslik: 'STUDIO TOOLKIT',
        projectComplete: 'PROJECT COMPLETE',
        qc1t: 'Accuracy',
        qc1d: 'Every visual decision is checked against architectural scale, material logic and project references.',
        qc2t: 'Visual Clarity',
        qc2d: 'The final image must explain the design clearly while protecting the atmosphere of the project.',
        qc3t: 'Revision Flow',
        qc3d: 'Feedback is organized, interpreted and applied through a structured review process.',
        qc4t: 'Final Polish',
        qc4d: 'Color, contrast, framing and detail balance are refined before the final delivery package.',
    }
};

// --- 🚨 RECO MASTER DİL MOTORU ---
window.dilDegistir = function(dil, e) {
    window.aktifDil = dil;

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active-lang'));
    
    if(e && e.currentTarget) {
        e.currentTarget.classList.add('active-lang');
    } else {
        const hedefBtn = document.getElementById(`btn-lang-${dil}`);
        if(hedefBtn) hedefBtn.classList.add('active-lang');
    }

    const projectsEtiket = document.getElementById("projects-etiket");
    if(projectsEtiket) projectsEtiket.innerText = window.dilVerisi[dil].projectsEtiket;

    const projectsBaslik = document.getElementById("projects-baslik");
    if(projectsBaslik) projectsBaslik.innerText = window.dilVerisi[dil].projectsBaslik;

    const projectsAciklama = document.getElementById("projects-aciklama");
    if(projectsAciklama) projectsAciklama.innerText = window.dilVerisi[dil].projectsAciklama;

    const projectsTabArchitecture = document.getElementById("projects-tab-architecture");
    if(projectsTabArchitecture) projectsTabArchitecture.innerText = window.dilVerisi[dil].projectsTabArchitecture;

    const projectsTabInterior = document.getElementById("projects-tab-interior");
    if(projectsTabInterior) projectsTabInterior.innerText = window.dilVerisi[dil].projectsTabInterior;

    const projectsTabProduct = document.getElementById("projects-tab-product");
    if(projectsTabProduct) projectsTabProduct.innerText = window.dilVerisi[dil].projectsTabProduct;

    const tumBasaDonMetinleri = document.querySelectorAll('#basaDonBtn .basa-don-metin, #basaDonBtnProjects .basa-don-metin, #basaDonBtnContact .basa-don-metin, #basaDonBtnPractice .basa-don-metin');
    tumBasaDonMetinleri.forEach(element => {
        element.textContent = window.dilVerisi[dil].basaDon;
    });

    const mStudioAna = document.getElementById('m-studio-ana'); if(mStudioAna) mStudioAna.innerText = window.dilVerisi[dil].studioAna;
    const megaAboutBaslik = document.getElementById('mega-about-baslik'); if(megaAboutBaslik) megaAboutBaslik.innerText = window.dilVerisi[dil].megaAboutBaslik;
    const megaAboutYazi = document.getElementById('mega-about-yazi'); if(megaAboutYazi) megaAboutYazi.innerText = window.dilVerisi[dil].megaAboutYazi;
    const megaFlowBaslik = document.getElementById('mega-flow-baslik'); if(megaFlowBaslik) megaFlowBaslik.innerText = window.dilVerisi[dil].megaFlowBaslik;
    const megaFlowYazi = document.getElementById('mega-flow-yazi'); if(megaFlowYazi) megaFlowYazi.innerText = window.dilVerisi[dil].megaFlowYazi;
    
    const journeyTR = [
        ['İlk Temas', 'Müşteri ilk temasını kurar, proje fikri dinlenir.'],
        ['Keşif & Brief', 'Beklentiler, hedefler ve proje kapsamı netleştirilir.'],
        ['Teknik Analiz', 'Planlar, çizimler ve mevcut proje verileri incelenir.'],
        ['Tasarım Geliştirme', 'Modelleme, malzeme dili ve görsel atmosfer geliştirilir.'],
        ['Önizleme Sunumu', 'İlk önizleme müşteriyle paylaşılır ve değerlendirilir.'],
        ['Revizyon & Final', 'Geri bildirimler uygulanır ve final üretim tamamlanır.'],
        ['Teslim & Destek', 'Final dosyalar teslim edilir, gerekli destek sağlanır.']
    ];

    const journeyEN = [
        ['Initial Contact', 'The client makes first contact and the project idea is reviewed.'],
        ['Discovery & Brief', 'Expectations, goals and project scope are clarified.'],
        ['Technical Analysis', 'Plans, drawings and existing project data are reviewed.'],
        ['Design Development', 'Modeling, material language and visual atmosphere are developed.'],
        ['Preview Presentation', 'The first preview is shared with the client and reviewed.'],
        ['Revision & Final', 'Feedback is applied and final production is completed.'],
        ['Delivery & Support', 'Final files are delivered and support is provided.']
    ];

    const journeyData = dil === 'tr' ? journeyTR : journeyEN;

    document.querySelectorAll('#isAkisiSayfasi .journey-step').forEach((step, i) => {
        const h4 = step.querySelector('h4');
        const p = step.querySelector('p');
        if(h4 && journeyData[i]) h4.innerText = journeyData[i][0];
        if(p && journeyData[i]) p.innerText = journeyData[i][1];
    });

    const completeTitle = document.querySelector('#isAkisiSayfasi .journey-complete-node span');
    if(completeTitle) completeTitle.innerText = window.dilVerisi[dil].projectComplete;

    const completeText = document.querySelector('#isAkisiSayfasi .journey-complete-node p');
    if(completeText) {
        completeText.innerText = dil === 'tr'
            ? 'Titizlik, netlik ve sunuma hazır görsel kaliteyle teslim edildi.'
            : 'Delivered with precision, clarity and presentation-ready visual quality.';
    }

    const qualityTitle = document.querySelector('#isAkisiSayfasi .workflow-quality .about-seksiyon-baslik');
    if(qualityTitle) qualityTitle.innerText = window.dilVerisi[dil].qualityBaslik;

    const workflowQcKartlar = document.querySelectorAll('#isAkisiSayfasi .workflow-quality .ilke-kart');

    if(workflowQcKartlar.length >= 4) {
        workflowQcKartlar[0].querySelector('h4').innerText = window.dilVerisi[dil].qc1t;
        workflowQcKartlar[0].querySelector('p').innerText = window.dilVerisi[dil].qc1d;
        workflowQcKartlar[1].querySelector('h4').innerText = window.dilVerisi[dil].qc2t;
        workflowQcKartlar[1].querySelector('p').innerText = window.dilVerisi[dil].qc2d;
        workflowQcKartlar[2].querySelector('h4').innerText = window.dilVerisi[dil].qc3t;
        workflowQcKartlar[2].querySelector('p').innerText = window.dilVerisi[dil].qc3d;
        workflowQcKartlar[3].querySelector('h4').innerText = window.dilVerisi[dil].qc4t;
        workflowQcKartlar[3].querySelector('p').innerText = window.dilVerisi[dil].qc4d;
    }

    const toolkitTR = [
        'Mimari Modelleme', 'Teknik Çizim', 'Konsept Modelleme', 'Fotogerçekçi Render',
        'Gelişmiş Render', 'Gerçek Zamanlı Görselleştirme', 'Varlık Geliştirme', 'BIM Koordinasyonu',
        'Dijital Heykel', 'Sinematik Deneyim', 'Post Prodüksiyon', 'Grafik Rafine',
        'Video Kurgu', 'Kumaş Simülasyonu', 'Hızlı Görselleştirme', 'Yüzey Detaylandırma'
    ];

    const toolkitEN = [
        'Architectural Modeling', 'Technical Drawing', 'Concept Modeling', 'Photoreal Rendering',
        'Advanced Rendering', 'Real-Time Visualization', 'Asset Development', 'BIM Coordination',
        'Digital Sculpting', 'Cinematic Experience', 'Post Production', 'Graphic Refinement',
        'Video Editing', 'Fabric Simulation', 'Fast Visualization', 'Surface Detailing'
    ];

    const toolkitData = dil === 'tr' ? toolkitTR : toolkitEN;

    document.querySelectorAll('#isAkisiSayfasi .toolkit-item small').forEach((item, i) => {
        item.innerText = toolkitData[i % toolkitData.length];
    });

    const iBaslik = document.querySelector(".about-ilkeler-seksiyonu .about-seksiyon-baslik"); 
    if(iBaslik) iBaslik.innerText = window.dilVerisi[dil].aboutİlkelerBaslik;

    const ilkeKartlar = document.querySelectorAll('.ilke-kart');
    if(ilkeKartlar.length >= 4) {
        if(ilkeKartlar[0].querySelector('h4')) ilkeKartlar[0].querySelector('h4').innerText = window.dilVerisi[dil].ilkeT1;
        if(ilkeKartlar[0].querySelector('p')) ilkeKartlar[0].querySelector('p').innerText = window.dilVerisi[dil].ilkeD1;
        if(ilkeKartlar[1].querySelector('h4')) ilkeKartlar[1].querySelector('h4').innerText = window.dilVerisi[dil].ilkeT2;
        if(ilkeKartlar[1].querySelector('p')) ilkeKartlar[1].querySelector('p').innerText = window.dilVerisi[dil].ilkeD2;
        if(ilkeKartlar[2].querySelector('h4')) ilkeKartlar[2].querySelector('h4').innerText = window.dilVerisi[dil].ilkeT3;
        if(ilkeKartlar[2].querySelector('p')) ilkeKartlar[2].querySelector('p').innerText = window.dilVerisi[dil].ilkeD3;
        if(ilkeKartlar[3].querySelector('h4')) ilkeKartlar[3].querySelector('h4').innerText = window.dilVerisi[dil].ilkeT4;
        if(ilkeKartlar[3].querySelector('p')) ilkeKartlar[3].querySelector('p').innerText = window.dilVerisi[dil].ilkeD4;
    }
    
    const mAnasayfa = document.getElementById('m-anasayfa'); if(mAnasayfa) mAnasayfa.innerHTML = window.dilVerisi[dil].anasayfa;
    const mProjeler = document.getElementById('m-projeler'); if(mProjeler) mProjeler.innerText = window.dilVerisi[dil].projeler;
    const mIletisim = document.getElementById('m-iletisim'); if(mIletisim) mIletisim.innerHTML = window.dilVerisi[dil].iletisim;
    
    const mMimariBaslik = document.getElementById('mega-mimari-baslik'); if(mMimariBaslik) mMimariBaslik.innerText = window.dilVerisi[dil].megaMimariBaslik;
    const mMimariYazi = document.getElementById('mega-mimari-yazi'); if(mMimariYazi) mMimariYazi.innerText = window.dilVerisi[dil].megaMimariYazi;
    const mIcBaslik = document.getElementById('mega-ic-baslik'); if(mIcBaslik) mIcBaslik.innerText = window.dilVerisi[dil].megaIcBaslik;
    const mIcYazi = document.getElementById('mega-ic-yazi'); if(mIcYazi) mIcYazi.innerText = window.dilVerisi[dil].megaIcYazi;
    
    const mProductBaslik = document.getElementById('mega-product-baslik'); if(mProductBaslik) mProductBaslik.innerText = window.dilVerisi[dil].megaProductBaslik;
    const mProductYazi = document.getElementById('mega-product-yazi'); if(mProductYazi) mProductYazi.innerText = window.dilVerisi[dil].megaProductYazi;
    
    const hBaslik = document.getElementById('hero-ana-baslik'); if(hBaslik) hBaslik.innerText = window.dilVerisi[dil].heroAnaBaslik;
    const hAltBaslik = document.getElementById('hero-alt-baslik'); if(hAltBaslik) hAltBaslik.innerText = window.dilVerisi[dil].heroAltBaslik;
    const bInceleyin = document.getElementById('btn-inceleyin'); if(bInceleyin) bInceleyin.innerText = window.dilVerisi[dil].btnInceleyin;
    const bUlasin = document.getElementById('btn-ulasin'); if(bUlasin) bUlasin.innerText = window.dilVerisi[dil].btnUlasin;
    
    const aEtiket = document.querySelector('.about-ust-etiket'); if(aEtiket) aEtiket.innerText = window.dilVerisi[dil].aboutManifestoEtiket;
    const aBaslik = document.querySelector('.about-baslik-alani h2'); if(aBaslik) aBaslik.innerText = window.dilVerisi[dil].aboutAnaBaslik;
    const aP1 = document.querySelector('.about-ana-yazi p:nth-child(1)'); if(aP1) aP1.innerText = window.dilVerisi[dil].aboutYazi1;
    const aP2 = document.querySelector('.about-ana-yazi p:nth-child(2)'); if(aP2) aP2.innerText = window.dilVerisi[dil].aboutYazi2;
    
    const sBasliklar = document.querySelectorAll('.about-seksiyon-baslik');
    if(sBasliklar.length >= 3) {
        if(sBasliklar[0]) sBasliklar[0].innerText = window.dilVerisi[dil].aboutTrackBaslik;
        if(sBasliklar[1]) sBasliklar[1].innerText = window.dilVerisi[dil].aboutNetworkBaslik; 
        if(sBasliklar[2]) sBasliklar[2].innerText = window.dilVerisi[dil].aboutCoreBaslik;    
    }
    
    const bIsimleri = document.querySelectorAll('.cubuk-ust-bilgi span:nth-child(1)');
    if(bIsimleri.length >= 4) {
        if(bIsimleri[0]) bIsimleri[0].innerText = window.dilVerisi[dil].bar1;
        if(bIsimleri[1]) bIsimleri[1].innerText = window.dilVerisi[dil].bar2;
        if(bIsimleri[2]) bIsimleri[2].innerText = window.dilVerisi[dil].bar3;
        if(bIsimleri[3]) bIsimleri[3].innerText = window.dilVerisi[dil].bar4;
    }

    const kartlar = document.querySelectorAll('.grafik-kart');
    if(kartlar.length >= 6) {
        if(kartlar[0].querySelector('h4')) kartlar[0].querySelector('h4').innerText = window.dilVerisi[dil].coreT1;
        if(kartlar[0].querySelector('p')) kartlar[0].querySelector('p').innerText = window.dilVerisi[dil].coreD1;
        if(kartlar[1].querySelector('h4')) kartlar[1].querySelector('h4').innerText = window.dilVerisi[dil].coreT2;
        if(kartlar[1].querySelector('p')) kartlar[1].querySelector('p').innerText = window.dilVerisi[dil].coreD2;
        if(kartlar[2].querySelector('h4')) kartlar[2].querySelector('h4').innerText = window.dilVerisi[dil].coreT3;
        if(kartlar[2].querySelector('p')) kartlar[2].querySelector('p').innerText = window.dilVerisi[dil].coreD3;
        if(kartlar[3].querySelector('h4')) kartlar[3].querySelector('h4').innerText = window.dilVerisi[dil].coreT4;
        if(kartlar[3].querySelector('p')) kartlar[3].querySelector('p').innerText = window.dilVerisi[dil].coreD4;
        if(kartlar[4].querySelector('h4')) kartlar[4].querySelector('h4').innerText = window.dilVerisi[dil].coreT5;
        if(kartlar[4].querySelector('p')) kartlar[4].querySelector('p').innerText = window.dilVerisi[dil].coreD5;
        if(kartlar[5].querySelector('h4')) kartlar[5].querySelector('h4').innerText = window.dilVerisi[dil].coreT6;
        if(kartlar[5].querySelector('p')) kartlar[5].querySelector('p').innerText = window.dilVerisi[dil].coreD6;
    }
    
    const cEtiket = document.getElementById('c-etiket'); if(cEtiket) cEtiket.innerText = window.dilVerisi[dil].cEtiket;
    const cAnaBaslik = document.getElementById('c-ana-baslik'); if(cAnaBaslik) cAnaBaslik.innerText = window.dilVerisi[dil].cAnaBaslik;
    const cManifesto = document.getElementById('c-manifesto'); if(cManifesto) cManifesto.innerText = window.dilVerisi[dil].cManifesto;
    
    const cKartTel = document.getElementById('c-kart-tel-baslik'); if(cKartTel) cKartTel.innerText = window.dilVerisi[dil].cKartTelBaslik;
    const cKartMail = document.getElementById('c-kart-mail-baslik'); if(cKartMail) cKartMail.innerText = window.dilVerisi[dil].cKartMailBaslik;
    const cKartIstB = document.getElementById('c-kart-ist-baslik'); if(cKartIstB) cKartIstB.innerText = window.dilVerisi[dil].cKartIstBaslik;
    const cKartIstA = document.getElementById('c-kart-ist-adres'); if(cKartIstA) cKartIstA.innerText = window.dilVerisi[dil].cKartIstAdres;
    const cKartDuzceB = document.getElementById('c-kart-duzce-baslik'); if(cKartDuzceB) cKartDuzceB.innerText = window.dilVerisi[dil].cKartDuzceBaslik;
    const cKartDuzceA = document.getElementById('c-kart-duzce-adres'); if(cKartDuzceA) cKartDuzceA.innerText = window.dilVerisi[dil].cKartDuzceAdres;

    const lblIsim = document.getElementById('lbl-isim'); if(lblIsim) lblIsim.innerText = window.dilVerisi[dil].lblIsim;
    const lblEmail = document.getElementById('lbl-email'); if(lblEmail) lblEmail.innerText = window.dilVerisi[dil].lblEmail;
    const lblKonu = document.getElementById('lbl-konu'); if(lblKonu) lblKonu.innerText = window.dilVerisi[dil].lblKonu;
    const lblMesaj = document.getElementById('lbl-mesaj'); if(lblMesaj) lblMesaj.innerText = window.dilVerisi[dil].lblMesaj;
    const btnGonder = document.getElementById('btn-gonder-metin'); if(btnGonder) btnGonder.innerText = window.dilVerisi[dil].btnGonder;
    
    const fTelif = document.getElementById('footer-telif'); if(fTelif) fTelif.innerHTML = window.dilVerisi[dil].telif; 
    const fTelifAbout = document.getElementById('footer-telif-about'); if(fTelifAbout) fTelifAbout.innerHTML = window.dilVerisi[dil].telif;
    const fTelifContact = document.getElementById('footer-telif-contact'); if(fTelifContact) fTelifContact.innerHTML = window.dilVerisi[dil].telif;
    const fTelifProjects = document.getElementById('footer-telif-projects'); if(fTelifProjects) fTelifProjects.innerHTML = window.dilVerisi[dil].telif;

    document.querySelectorAll('.yasal-link span').forEach(span => {
        if (span.id === 'yasal-sartlar' || span.id === 'yasal-sartlar-about' || span.id === 'yasal-sartlar-contact' || span.id === 'yasal-sartlar-practice' || span.id === 'yasal-sartlar-projects') span.innerText = window.dilVerisi[dil].yasalSartlar;
        if (span.id === 'yasal-gizlilik' || span.id === 'yasal-gizlilik-about' || span.id === 'yasal-gizlilik-contact' || span.id === 'yasal-gizlilik-practice' || span.id === 'yasal-gizlilik-projects') span.innerText = window.dilVerisi[dil].yasalGizlilik;
        if (span.id === 'yasal-cerez' || span.id === 'yasal-cerez-about' || span.id === 'yasal-cerez-contact' || span.id === 'yasal-cerez-practice' || span.id === 'yasal-cerez-projects') span.innerText = window.dilVerisi[dil].yasalCerez;
    });
    
    const cGlobalSosyalEtiket = document.querySelector('.c-global-sosyal-etiket'); if(cGlobalSosyalEtiket) cGlobalSosyalEtiket.innerText = window.dilVerisi[dil].cGlobalSosyalYazi;
    const fTelifPractice = document.getElementById('footer-telif-practice'); if(fTelifPractice) fTelifPractice.innerHTML = window.dilVerisi[dil].telif;

    const pracEtiket = document.getElementById('prac-ust-etiket'); if(pracEtiket) pracEtiket.innerText = window.dilVerisi[dil].workflowEtiket;
    const pracBaslik = document.getElementById('prac-ana-baslik'); if(pracBaslik) pracBaslik.innerText = window.dilVerisi[dil].workflowBaslik;
    const pracManifesto = document.getElementById('prac-manifesto-metin'); if(pracManifesto) pracManifesto.innerText = window.dilVerisi[dil].workflowManifesto;
    const pracSurec = document.getElementById('prac-surec-baslik'); if(pracSurec) pracSurec.innerText = window.dilVerisi[dil].journeyBaslik;
    const pracYazilim = document.getElementById('prac-yazilim-baslik'); if(pracYazilim) pracYazilim.innerText = window.dilVerisi[dil].toolkitBaslik;

    if (window.projectsDilGuncelle) {
        window.projectsDilGuncelle(dil);
    }
};

// --- ✅ İLK AÇILIŞ DİL KİLİDİ: VARSAYILAN TÜRKÇE ---
if (window.dilDegistir) {
    window.dilDegistir('tr', null);
}

// ==========================================================================
// 🌊 LENIS ULTRA SMOOTH SCROLL MOTORU (DESKTOP AKTİF, MOBİL NATURAL)
// ==========================================================================
// ==========================================================================
// 🌊 LENIS ULTRA SMOOTH SCROLL MOTORU (DESKTOP AKTİF, MOBİL TAMAMEN PASİF)
// ==========================================================================
const mobilCihaz = window.innerWidth <= 900;

if (!mobilCihaz) {
    // 💻 MASAÜSTÜ: Sitenin o ipek gibi akan, lüks ve asil sinematik motoru aynen devrede!
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true, // Fare tekerleği masaüstünde pürüzsüz aksın
        wheelMultiplier: 1,
        smoothTouch: false, // Dokunmatik ekranlı laptoplarda çakışmayı önler
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
} else {
    // 📱 MOBİL: Telefonu tamamen rahat bırakıyoruz. Tarayıcı kendi orijinal akışına dönüyor.
    if (typeof ScrollTrigger !== "undefined") {
        // Mobilde ScrollTrigger'ın her resim yüklenmesinde telefonu kilitlemesini engelliyoruz
        ScrollTrigger.config({ 
            limitCallbacks: true,
            autoRefreshEvents: "visibilitychange,DOMContentLoaded" 
        });
        
        // Ağır animasyon tetikleyicilerini mobilde optimize et
        ScrollTrigger.normalizeScroll(false); // Mobil yerel scroll'u asla sabote etme emri
    }
}
// ==========================================================================
// 🎬 GSAP SİNERJİ VE DESTEK ALANI
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 900) return;

    if (document.querySelector(".ilke-kart")) {
        gsap.from(".ilke-kart", {
            scrollTrigger: {
                trigger: ".about-ilkeler-seksiyonu", 
                start: "top 80%", 
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50, 
            duration: 1.2, 
            stagger: 0.2, 
            ease: "power4.out" 
        });
    }

    const logoSeritAlani = document.querySelector(".ortaklar-akici-serit");
    if (logoSeritAlani && typeof gsap !== 'undefined') {
        const logoAkisAnimasyonu = gsap.to(logoSeritAlani, {
            xPercent: -50, 
            repeat: -1,    
            duration: 20,  
            ease: "none"   
        });

        logoSeritAlani.addEventListener("mouseenter", () => {
            gsap.to(logoAkisAnimasyonu, { timeScale: 0, duration: 0.6, ease: "power2.out" });
        });

        logoSeritAlani.addEventListener("mouseleave", () => {
            gsap.to(logoAkisAnimasyonu, { timeScale: 1, duration: 0.6, ease: "power2.inOut" });
        });
    }

    const cubukSeksiyonu = document.querySelector(".about-cubuk-seksiyonu");
    if (cubukSeksiyonu && typeof gsap !== 'undefined') {
        ScrollTrigger.create({
            trigger: cubukSeksiyonu,
            start: "top 75%", 
            toggleActions: "play none none none",
            onEnter: () => {
                document.querySelectorAll(".cubuk-konteyner .cubuk-grup").forEach((grup) => {
                    const yuzdeElementi = grup.querySelector(".yuzde-degeri");
                    const ilerlemeBari = grup.querySelector(".cubuk-ilerleme");
                    if (!yuzdeElementi || !ilerlemeBari) return;

                    const inlineStyle = ilerlemeBari.getAttribute("style") || "";
                    const genislikEslenmesi = inlineStyle.match(/--cubuk-genislik:\s*([0-9\.]+)%/);
                    const hedefYuzde = genislikEslenmesi ? parseFloat(genislikEslenmesi[1]) : 75;
                    const safTavanRakam = parseInt(yuzdeElementi.getAttribute("data-hedef")) || 100;

                    gsap.set(ilerlemeBari, { width: "0%" });
                    
                    gsap.to(ilerlemeBari, {
                        width: `${hedefYuzde}%`,
                        duration: 2.4,
                        ease: "power2.out"
                    });

                    const sayacVerisi = { value: 0 };
                    gsap.to(sayacVerisi, {
                        value: safTavanRakam,
                        duration: 2.4, 
                        ease: "power2.out",
                        onUpdate: () => {
                            if (safTavanRakam === 10 || safTavanRakam === 250 || safTavanRakam === 40) {
                                yuzdeElementi.innerText = `${Math.floor(sayacVerisi.value)}+`;
                            } else {
                                yuzdeElementi.innerText = `%${Math.floor(sayacVerisi.value)}`;
                            }
                        }
                    });
                });
            }
        });
    }
});

// --- 🚨 RECO MASTER: İLK AÇILIŞTA OTOMATİK TÜRKÇE BAŞLATMA MOTORU ---
window.addEventListener('DOMContentLoaded', () => {
    if (window.dilDegistir) {
        window.dilDegistir('tr', null);
    }
});

// ==========================================================================
// 👁 GARANTİ BAŞA DÖN GÖRÜNÜRLÜK MOTORU - ABOUT / WORKFLOW / PROJECTS
// ==========================================================================
function garantiBasaDonGorunurluk(sayfaId, butonId) {
    const sayfa = document.getElementById(sayfaId);
    const buton = document.getElementById(butonId);

    if (!sayfa || !buton) return;

    function kontrolEt() {
        const scrollDegeri = Math.max(
            sayfa.scrollTop || 0,
            window.scrollY || 0,
            document.documentElement.scrollTop || 0,
            document.body.scrollTop || 0
        );

        if (scrollDegeri > 350 && !sayfa.classList.contains("sayfa-gizli")) {
            buton.classList.add("nokta-aktif");
        } else {
            buton.classList.remove("nokta-aktif");
        }
    }

    sayfa.addEventListener("scroll", kontrolEt);
    window.addEventListener("scroll", kontrolEt);
    kontrolEt();
}

garantiBasaDonGorunurluk("aboutSayfasi", "basaDonBtn");
garantiBasaDonGorunurluk("isAkisiSayfasi", "basaDonBtnPractice");
garantiBasaDonGorunurluk("projectsSayfasi", "basaDonBtnProjects");

// ==========================================================================
// 🚀 GARANTİ BAŞA DÖN MOTORU - MANUEL SİNEMATİK ANİMASYON
// ==========================================================================
function garantiBasaDon(element, duration = 1600) {
    const start = element.scrollTop;
    const startTime = performance.now();

    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    function animate(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);

        element.scrollTop = start * (1 - eased);

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate);
}

document.addEventListener("click", function(e) {
    const btn = e.target.closest("#basaDonBtn, #basaDonBtnProjects, #basaDonBtnPractice, #basaDonBtnContact, .basa-don-metin");
    if (!btn) return;

    e.preventDefault();
    e.stopImmediatePropagation();

    const aktifSayfa =
        document.querySelector("#projectsSayfasi:not(.sayfa-gizli)") ||
        document.querySelector("#isAkisiSayfasi:not(.sayfa-gizli)") ||
        document.querySelector("#aboutSayfasi:not(.sayfa-gizli)") ||
        document.querySelector("#iletisimSayfasi:not(.sayfa-gizli)") ||
        document.querySelector("#homeSayfasi:not(.sayfa-gizli)");

    if (aktifSayfa) {
        garantiBasaDon(aktifSayfa, 1100);

        setTimeout(() => {
            if (aktifSayfa.id === "isAkisiSayfasi" && typeof initWorkflow === "function") {
                initWorkflow();
            }
            if (aktifSayfa.id === "projectsSayfasi" && typeof window.projectsRender === "function") {
                window.projectsRender();
            }
            if (typeof ScrollTrigger !== "undefined") {
                ScrollTrigger.refresh();
            }
        }, 1150);
    }
    garantiBasaDon(document.documentElement, 1100);
    garantiBasaDon(document.body, 1100);
}, true);

// THEME SWITCH - DELEGATED SAFE CLICK
document.addEventListener("click", function(e) {
    const themeBtn = e.target.closest("#themeToggle");
    if (!themeBtn) return;

    e.preventDefault();
    e.stopPropagation();

    document.body.classList.toggle("theme-light");

    const lightAktif = document.body.classList.contains("theme-light");
    const icon = themeBtn.querySelector("i");
    const text = themeBtn.querySelector("span");

    if (icon) icon.className = lightAktif ? "fa-solid fa-sun" : "fa-solid fa-moon";
    if (text) text.textContent = lightAktif ? "LIGHT" : "DARK";
}, true);

// =================================================
// LEGAL MODAL SYSTEM
// =================================================
const legalModal = document.getElementById("legalModal");
const legalTitle = document.getElementById("legalTitle");
const legalContent = document.getElementById("legalContent");
const legalClose = document.getElementById("legalClose");
const legalOverlay = document.getElementById("legalOverlay");

const legalTexts = {
    terms: {
        title: "Terms & Conditions",
        content: `
            <p>By accessing and using the Garanti Design website, you agree to comply with these terms and conditions.</p>
            <p>All visual content, project presentations, images, animations, texts and design elements displayed on this website are the property of Garanti Design unless otherwise stated.</p>
            <p>The content on this website is provided for informational and promotional purposes only. Garanti Design reserves the right to update, modify or remove any content without prior notice.</p>
            <p>Unauthorized use, reproduction, distribution or modification of any material from this website is strictly prohibited.</p>
        `
    },
    privacy: {
        title: "Privacy Policy",
        content: `
            <p>Garanti Design respects your privacy and is committed to protecting the personal information you share with us.</p>
            <p>Information submitted through contact forms may be used only to respond to your inquiries, provide project information and maintain professional communication.</p>
            <p>We do not sell, rent or share your personal information with third parties unless required by law or necessary for service delivery.</p>
            <p>Reasonable technical and administrative measures are taken to protect your personal data against unauthorized access, loss or misuse.</p>
        `
    },
    cookie: {
        title: "Cookie Policy",
        content: `
            <p>This website may use cookies to improve user experience, analyze website performance and ensure proper functionality.</p>
            <p>Cookies are small text files stored on your device by your browser. They help the website remember preferences and understand general visitor behavior.</p>
            <p>You can manage or disable cookies through your browser settings. However, disabling cookies may affect some website features.</p>
            <p>By continuing to use this website, you acknowledge the use of cookies in accordance with this policy.</p>
        `
    }
};

function openLegalModal(type) {
    if (!legalModal || !legalTitle || !legalContent || !legalTexts[type]) return;

    legalTitle.innerHTML = legalTexts[type].title;
    legalContent.innerHTML = legalTexts[type].content;
    legalModal.classList.add("aktif");
    document.body.style.overflow = "hidden";
}

function closeLegalModal() {
    if (!legalModal) return;
    legalModal.classList.remove("aktif");
    document.body.style.overflow = "";
}

document.querySelectorAll(".legal-link").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const type = link.dataset.legal;
        openLegalModal(type);
    });
});

legalClose?.addEventListener("click", closeLegalModal);
legalOverlay?.addEventListener("click", closeLegalModal);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLegalModal();
});

document.querySelectorAll(".nav-linkler a, .mega-kutu").forEach((item) => {
    item.addEventListener("click", () => {
        if (window.innerWidth <= 900) {
            document.body.classList.remove("mobil-menu-acik");
        }
    });
});

// =================================================
// MOBILE MENU SYSTEM
// =================================================
const mobilMenuBtn = document.getElementById("mobilMenuBtn");

if (mobilMenuBtn) {
    mobilMenuBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        document.body.classList.toggle("mobil-menu-acik");
    });
}

document.addEventListener("click", (e) => {
    if (!document.body.classList.contains("mobil-menu-acik")) return;

    const navGrup = document.querySelector(".nav-merkez-grup");
    const mobilBtn = document.getElementById("mobilMenuBtn");

    if (navGrup && mobilBtn && !navGrup.contains(e.target) && !mobilBtn.contains(e.target)) {
        document.body.classList.remove("mobil-menu-acik");
    }
});