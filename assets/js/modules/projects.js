// =================================================
// PROJECTS MODULE
// =================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Projects Module Ready");
    let aktifProjectDil = "tr";

    const projectMegaItems = document.querySelectorAll("[data-project-filter]");
    const projectTabs = document.querySelectorAll(".project-tab");
    const projectsMegaMenu = document.getElementById("megaMenu");

const projectData = {
"architecture-landscape": [

{
    id: "adalar-park",
    titleTR: "Adalar Park",
    titleEN: "Adalar Park",
    categoryTR: "Mimari & Peyzaj",
    categoryEN: "Architecture & Landscape",
    year: "2022",
    locationTR: "İstanbul - Türkiye",
    locationEN: "Istanbul - Turkey",
    image: "assets/images/projects/architecture-landscape/01.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "trio-vista",
    titleTR: "Trio Vista Villa",
    titleEN: "Trio Vista Villa",
    categoryTR: "Mimari & Peyzaj",
    categoryEN: "Architecture & Landscape",
    year: "2026",
    locationTR: "Sakarya - Türkiye",
    locationEN: "Sakarya - Turkey",
    image: "assets/images/projects/architecture-landscape/02.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "orient-blue",
    titleTR: "Orient Blue",
    titleEN: "Orient Blue",
    categoryTR: "Mimari & Peyzaj",
    categoryEN: "Architecture & Landscape",
    year: "2023",
    locationTR: "İstanbul - Türkiye",
    locationEN: "Istanbul - Turkey",
    image: "assets/images/projects/architecture-landscape/03.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "via-fratelli",
    titleTR: "Via Fratelli",
    titleEN: "Via Fratelli",
    categoryTR: "Mimari & Peyzaj",
    categoryEN: "Architecture & Landscape",
    year: "2025",
    locationTR: "Bari - İtalya",
    locationEN: "Bari - Italy",
    image: "assets/images/projects/architecture-landscape/04.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "s-avukatlik-burosu",
    titleTR: "S. Avukatlık Bürosu",
    titleEN: "S. Law Office",
    categoryTR: "Mimari & Peyzaj",
    categoryEN: "Architecture & Landscape",
    year: "2023",
    locationTR: "Bodrum - Türkiye",
    locationEN: "Bodrum - Turkey",
    image: "assets/images/projects/architecture-landscape/05.webp",
    imageFit: "cover",
    imagePosition: "center 60%"
},

{
    id: "sanspark-stellars",
    titleTR: "Sanspark Stellars Otel",
    titleEN: "Sanspark Stellars Hotel",
    categoryTR: "Mimari & Peyzaj",
    categoryEN: "Architecture & Landscape",
    year: "2023",
    locationTR: "Valletta - Malta",
    locationEN: "Valletta - Malta",
    image: "assets/images/projects/architecture-landscape/06.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "unigon-villa",
    titleTR: "Unigon Villa",
    titleEN: "Unigon Villa",
    categoryTR: "Mimari & Peyzaj",
    categoryEN: "Architecture & Landscape",
    year: "2024",
    locationTR: "Muğla - Türkiye",
    locationEN: "Mugla - Turkey",
    image: "assets/images/projects/architecture-landscape/07.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "pavilion-farmhouse",
    titleTR: "Pavilion Çiftlik Evi",
    titleEN: "Pavilion Farmhouse",
    categoryTR: "Mimari & Peyzaj",
    categoryEN: "Architecture & Landscape",
    year: "2019",
    locationTR: "Kastamonu - Türkiye",
    locationEN: "Kastamonu - Turkey",
    image: "assets/images/projects/architecture-landscape/08.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "green-valley-residences",
    titleTR: "Yeşil Vadi Konutları",
    titleEN: "Green Valley Residences",
    categoryTR: "Mimari & Peyzaj",
    categoryEN: "Architecture & Landscape",
    year: "2018",
    locationTR: "İstanbul - Türkiye",
    locationEN: "Istanbul - Turkey",
    image: "assets/images/projects/architecture-landscape/09.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "selective-residences",
    titleTR: "Selective Konutları",
    titleEN: "Selective Residences",
    categoryTR: "Mimari & Peyzaj",
    categoryEN: "Architecture & Landscape",
    year: "2018",
    locationTR: "Sakarya - Türkiye",
    locationEN: "Sakarya - Turkey",
    image: "assets/images/projects/architecture-landscape/10.webp",
    imageFit: "cover",
    imagePosition: "center 55%"
},

{
    id: "forest-farmhouse",
    titleTR: "Orman Çiftlik Evi",
    titleEN: "Forest Farmhouse",
    categoryTR: "Mimari & Peyzaj",
    categoryEN: "Architecture & Landscape",
    year: "2024",
    locationTR: "Rize - Türkiye",
    locationEN: "Rize - Turkey",
    image: "assets/images/projects/architecture-landscape/11.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "nabide-suites",
    titleTR: "N. Abide Suitleri",
    titleEN: "N. Abide Suites",
    categoryTR: "Mimari & Peyzaj",
    categoryEN: "Architecture & Landscape",
    year: "2025",
    locationTR: "Düzce - Türkiye",
    locationEN: "Duzce - Turkey",
    image: "assets/images/projects/architecture-landscape/12.webp",
    imageFit: "cover",
    imagePosition: "center 40%"
},

{
    id: "serenity-life",
    titleTR: "Serenity Life Villas",
    titleEN: "Serenity Life Villas",
    categoryTR: "Mimari & Peyzaj",
    categoryEN: "Architecture & Landscape",
    year: "2024",
    locationTR: "İstanbul - Türkiye",
    locationEN: "Istanbul - Turkey",
    image: "assets/images/projects/architecture-landscape/13.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "bilo-park-residence",
    titleTR: "Bilo Park Residence",
    titleEN: "Bilo Park Residence",
    categoryTR: "Mimari & Peyzaj",
    categoryEN: "Architecture & Landscape",
    year: "2021",
    locationTR: "İzmir - Türkiye",
    locationEN: "Izmir - Turkey",
    image: "assets/images/projects/architecture-landscape/14.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "vista-towers",
    titleTR: "Vista Towers",
    titleEN: "Vista Towers",
    categoryTR: "Mimari & Peyzaj",
    categoryEN: "Architecture & Landscape",
    year: "2017",
    locationTR: "İstanbul - Türkiye",
    locationEN: "Istanbul - Turkey",
    image: "assets/images/projects/architecture-landscape/15.webp",
    imageFit: "cover",
    imagePosition: "center center"
}

],

"interior": [

{
    id: "i-tower",
    titleTR: "I Tower",
    titleEN: "I Tower",
    categoryTR: "İç Mimari",
    categoryEN: "Interior Design",
    year: "2017",
    locationTR: "İzmir - Türkiye",
    locationEN: "Izmir - Turkey",
    image: "assets/images/projects/interior/01.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "ateskiran-law-office",
    titleTR: "Ateşkıran Hukuk Bürosu",
    titleEN: "Ateskiran Law Office",
    categoryTR: "İç Mimari",
    categoryEN: "Interior Design",
    year: "2018",
    locationTR: "Ankara - Türkiye",
    locationEN: "Ankara - Turkey",
    image: "assets/images/projects/interior/02.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "akgol-residences",
    titleTR: "Akgöl Konutları",
    titleEN: "Akgol Residences",
    categoryTR: "İç Mimari",
    categoryEN: "Interior Design",
    year: "2015",
    locationTR: "Ankara - Türkiye",
    locationEN: "Ankara - Turkey",
    image: "assets/images/projects/interior/03.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "nova-park",
    titleTR: "Nova Park",
    titleEN: "Nova Park",
    categoryTR: "İç Mimari",
    categoryEN: "Interior Design",
    year: "2016",
    locationTR: "Afyonkarahisar - Türkiye",
    locationEN: "Afyonkarahisar - Turkey",
    image: "assets/images/projects/interior/04.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "polyform-villa",
    titleTR: "Polyform Villa",
    titleEN: "Polyform Villa",
    categoryTR: "İç Mimari",
    categoryEN: "Interior Design",
    year: "2019",
    locationTR: "İstanbul - Türkiye",
    locationEN: "Istanbul - Turkey",
    image: "assets/images/projects/interior/05.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "sm-villa",
    titleTR: "S.M. Villa",
    titleEN: "S.M. Villa",
    categoryTR: "İç Mimari",
    categoryEN: "Interior Design",
    year: "2020",
    locationTR: "Muscat - Umman",
    locationEN: "Muscat - Oman",
    image: "assets/images/projects/interior/06.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "mansard-residences",
    titleTR: "Mansard Konutları",
    titleEN: "Mansard Residences",
    categoryTR: "İç Mimari",
    categoryEN: "Interior Design",
    year: "2017",
    locationTR: "Bursa - Türkiye",
    locationEN: "Bursa - Turkey",
    image: "assets/images/projects/interior/07.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "as-villa",
    titleTR: "A.S. Villa",
    titleEN: "A.S. Villa",
    categoryTR: "İç Mimari",
    categoryEN: "Interior Design",
    year: "2023",
    locationTR: "İzmir - Türkiye",
    locationEN: "Izmir - Turkey",
    image: "assets/images/projects/interior/08.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "abide-suites",
    titleTR: "Abide Suitleri",
    titleEN: "Abide Suites",
    categoryTR: "İç Mimari",
    categoryEN: "Interior Design",
    year: "2026",
    locationTR: "Düzce - Türkiye",
    locationEN: "Duzce - Turkey",
    image: "assets/images/projects/interior/09.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "esenyurt-university",
    titleTR: "Esenyurt Üniversitesi",
    titleEN: "Esenyurt University",
    categoryTR: "İç Mimari",
    categoryEN: "Interior Design",
    year: "2018",
    locationTR: "İstanbul - Türkiye",
    locationEN: "Istanbul - Turkey",
    image: "assets/images/projects/interior/10.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "bd-villa",
    titleTR: "B.D. Villa",
    titleEN: "B.D. Villa",
    categoryTR: "İç Mimari",
    categoryEN: "Interior Design",
    year: "2017",
    locationTR: "Ankara - Türkiye",
    locationEN: "Ankara - Turkey",
    image: "assets/images/projects/interior/11.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "kuzeypark-houses",
    titleTR: "Kuzeypark Evleri",
    titleEN: "Kuzeypark Houses",
    categoryTR: "İç Mimari",
    categoryEN: "Interior Design",
    year: "2022",
    locationTR: "Kastamonu - Türkiye",
    locationEN: "Kastamonu - Turkey",
    image: "assets/images/projects/interior/12.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "naila-villas",
    titleTR: "Naila Villaları",
    titleEN: "Naila Villas",
    categoryTR: "İç Mimari",
    categoryEN: "Interior Design",
    year: "2025",
    locationTR: "İstanbul - Türkiye",
    locationEN: "Istanbul - Turkey",
    image: "assets/images/projects/interior/13.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "prestige-suites",
    titleTR: "Prestige Suitleri",
    titleEN: "Prestige Suites",
    categoryTR: "İç Mimari",
    categoryEN: "Interior Design",
    year: "2026",
    locationTR: "Düzce - Türkiye",
    locationEN: "Duzce - Turkey",
    image: "assets/images/projects/interior/14.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "uniblock-suites",
    titleTR: "Uniblock Suitleri",
    titleEN: "Uniblock Suites",
    categoryTR: "İç Mimari",
    categoryEN: "Interior Design",
    year: "2024",
    locationTR: "Bolu - Türkiye",
    locationEN: "Bolu - Turkey",
    image: "assets/images/projects/interior/15.webp",
    imageFit: "cover",
    imagePosition: "center center"
}


    ],

product: [

{
    id: "mono",
    titleTR: "MONO",
    titleEN: "MONO",
    categoryTR: "Ürün Tasarımı",
    categoryEN: "Product Design",
    year: "2025",
    image: "assets/images/projects/product/01.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "halo",
    titleTR: "HALO",
    titleEN: "HALO",
    categoryTR: "Ürün Tasarımı",
    categoryEN: "Product Design",
    year: "2023",
    image: "assets/images/projects/product/02.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "axis",
    titleTR: "AXIS",
    titleEN: "AXIS",
    categoryTR: "Ürün Tasarımı",
    categoryEN: "Product Design",
    year: "2024",
    image: "assets/images/projects/product/03.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "line",
    titleTR: "LINE",
    titleEN: "LINE",
    categoryTR: "Ürün Tasarımı",
    categoryEN: "Product Design",
    year: "2022",
    image: "assets/images/projects/product/04.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "facet",
    titleTR: "FACET",
    titleEN: "FACET",
    categoryTR: "Ürün Tasarımı",
    categoryEN: "Product Design",
    year: "2024",
    image: "assets/images/projects/product/05.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "core",
    titleTR: "CORE",
    titleEN: "CORE",
    categoryTR: "Ürün Tasarımı",
    categoryEN: "Product Design",
    year: "2021",
    image: "assets/images/projects/product/06.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "spiral",
    titleTR: "SPIRAL",
    titleEN: "SPIRAL",
    categoryTR: "Ürün Tasarımı",
    categoryEN: "Product Design",
    year: "2020",
    image: "assets/images/projects/product/07.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "horizon",
    titleTR: "HORIZON",
    titleEN: "HORIZON",
    categoryTR: "Ürün Tasarımı",
    categoryEN: "Product Design",
    year: "2026",
    image: "assets/images/projects/product/08.webp",
    imageFit: "cover",
    imagePosition: "center center"
},

{
    id: "arc",
    titleTR: "ARC",
    titleEN: "ARC",
    categoryTR: "Ürün Tasarımı",
    categoryEN: "Product Design",
    year: "2025",
    image: "assets/images/projects/product/09.webp",
    imageFit: "cover",
    imagePosition: "center center"
}


    ]
};

    function aktifProjectTabAyarla(kategori) {
        projectTabs.forEach((tab) => {
            tab.classList.remove("aktif-tab");

            if (tab.dataset.project === kategori) {
                tab.classList.add("aktif-tab");
            }
        });
    }

    function aktifProjectGridAyarla(kategori) {
        const kategoriGridMap = {
            "architecture-landscape": "architecture-grid",
            interior: "interior-grid",
            product: "product-grid"
        };

        document.querySelectorAll(".projects-grid").forEach((grid) => {
            grid.classList.remove("aktif-grid");
        });

        const hedefGrid = document.getElementById(kategoriGridMap[kategori]);

        if (hedefGrid) {
            hedefGrid.classList.add("aktif-grid");
        }
    }

function projectCardHTML(project) {
const aktifDil = aktifProjectDil === "en" ? "EN" : "TR";

    const title = project[`title${aktifDil}`] || project.title || "";
    const category = project[`category${aktifDil}`] || project.category || "";
    const location = project[`location${aktifDil}`] || project.location || "";

    const imageHTML = project.image
        ? `<img src="${project.image}" alt="${title}" style="object-fit:${project.imageFit || 'cover'}; object-position:${project.imagePosition || 'center center'};">`
        : `<div class="project-card-placeholder"></div>`;

    const metaHTML = location
        ? `
            <div class="project-card-meta">
                <small>${project.year || ""}</small>
                <small>${location}</small>
            </div>
        `
        : `
            <div class="project-card-meta">
                <small>${project.year || ""}</small>
            </div>
        `;

    return `
        <div class="project-card">
            ${imageHTML}

            <div class="project-card-info">
                <span>${category}</span>
                <h3>${title}</h3>
                ${metaHTML}
            </div>
        </div>
    `;
}

    function projectleriRenderEt() {
        const gridMap = {
            "architecture-landscape": "architecture-grid",
            interior: "interior-grid",
            product: "product-grid"
        };

        Object.keys(projectData).forEach((kategori) => {
            const grid = document.getElementById(gridMap[kategori]);
            if (!grid) return;

            grid.innerHTML = projectData[kategori]
                .map(projectCardHTML)
                .join("");
        });
    }

    function megaMenuleriKapat() {
        if (projectsMegaMenu) {
            projectsMegaMenu.classList.remove("aktif-menu");
        }

        document.querySelectorAll(".mega-menu").forEach((menu) => {
            menu.classList.remove("aktif-menu");
        });
    }

    projectMegaItems.forEach((item) => {
        item.addEventListener("click", () => {
            const kategori = item.dataset.projectFilter;

            aktifProjectTabAyarla(kategori);
            aktifProjectGridAyarla(kategori);
            megaMenuleriKapat();
        });
    });

    projectTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const kategori = tab.dataset.project;

            aktifProjectTabAyarla(kategori);
            aktifProjectGridAyarla(kategori);
            megaMenuleriKapat();
        });
    });
    window.projectsDilGuncelle = function(dil) {
    aktifProjectDil = dil;
    projectleriRenderEt();
};

// =================================================
// GLOBAL PROJECTS INIT MOTORU
// =================================================

window.projectleriRenderEt = projectleriRenderEt;

window.initProjects = function(kategori = "architecture-landscape") {

    projectleriRenderEt();

    aktifProjectTabAyarla(kategori);
    aktifProjectGridAyarla(kategori);

    const projectsSayfasi = document.getElementById("projectsSayfasi");

    if (projectsSayfasi) {
        projectsSayfasi.scrollTop = 0;
    }

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    if (typeof lenis !== "undefined" && lenis.scrollTo) {
        lenis.scrollTo(0, { immediate: true });
    }

    console.log("Projects Init:", kategori);
};

// İlk açılış
window.initProjects("architecture-landscape");

});