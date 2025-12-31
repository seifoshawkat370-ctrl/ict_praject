// ==========================================
// إعدادات الروابط - Link Configuration
// ==========================================
// 1 موقع المشروع    2 الاستبيان    3 العرض التقديمي 4 اسئلة     5 بوستر   6مقالات
const defaultLinks = [
    {
        title: "موقع المشروع",
        url: "site_wrapper.html", 
        icon: "💻",
        description: "Project Website"
    },
    {
        title: "الاستبيان",
        url: "survey/index.html",
        icon: "📊",
        target: "_self",
        description: "Survey Form"
    },
    {
        title: "العرض التقديمي",
        url: "presentation/index.html",
        icon: "📽️",
        description: "Presentation"
    },
    {
        title: "أسئلة",
        url: "questions/quiz.html",
        icon: "❓",
        description: "Questions & Ransomware Quiz"
    },
    {
        title: "بوستر",
        url: "posters/index.html",
        icon: "🖼️",
        target: "_self", 
        description: "Project Posters Gallery"
    },
    {
        title: "مقالات",
        url: "articles/index.html",
        icon: "📰",
        description: "Articles"
    },
    {
        title: "فيديوهات",
        url: "../videos/index.html",
        icon: "🎬",
        description: "Educational Videos"
    }
];

// Load from LocalStorage or use default
let links = JSON.parse(localStorage.getItem('dashboard_links'));



// Self-Healing & Update: Ensure essential default links exist and have current URLs
const essentialLinks = defaultLinks; 

if (!links) {
    links = defaultLinks;
    localStorage.setItem('dashboard_links', JSON.stringify(links));
} else {
    let changed = false;
    
    // Check each default link
    essentialLinks.forEach(def => {
        const existingIndex = links.findIndex(l => l.title === def.title);
        
        if (existingIndex === -1) {
            // Link is missing entirely
            links.push(def);
            changed = true;
        } else {
            // Link exists, check if URL needs update (e.g. from .pptx to .html)
            if (links[existingIndex].url !== def.url) {
                links[existingIndex].url = def.url;
                changed = true;
            }
        }
    });

    // Save back if we restored or updated anything
    if (changed) {
        localStorage.setItem('dashboard_links', JSON.stringify(links));
    }
}

// FINAL DEDUPLICATION Check (Just in case)
if (links) {
    const uniqueLinks = [];
    const seenTitles = new Set();
    
    links.forEach(link => {
        const normalizedTitle = link.title.trim();
        if (!seenTitles.has(normalizedTitle)) {
            seenTitles.add(normalizedTitle);
            uniqueLinks.push(link);
        }
    });

    if (uniqueLinks.length !== links.length) {
        links = uniqueLinks;
        localStorage.setItem('dashboard_links', JSON.stringify(links));
    }
}

// ==========================================
// المنطق البرمجي - Logic
// ==========================================

const gridContainer = document.getElementById('linkGrid');
const searchInput = document.getElementById('searchInput');
const titleElement = document.getElementById('mainTitle');

// Typing Effect for Title
function typeWriter(text, element, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
             element.innerHTML += '<span class="cursor">|</span>';
        }
    }
    type();
}

function getAllSearchableItems() {
    let allItems = [];
    
    // 1. Add Main Dashboard Links (The categories)
    links.forEach(link => {
        allItems.push({ ...link, isCategory: true });
    });

    // 2. Add FIXED Static Internal Content (Content that always exists in the HTML files)
    const staticItems = [
        {
            title: "يا تدفع.. يا ملفاتك تودع!",
            url: "videos/script_details.html",
            icon: "📄",
            description: "Full Video Script / سيناريو الفيديو الكامل",
            keywords: "script سيناريو تدفع ملفاتك تودع فيديو video ransomware"
        },
        {
            title: "اختبار برامج الفدية",
            url: "questions/quiz.html",
            icon: "📝",
            description: "Test your knowledge / اختبر معلوماتك",
            keywords: "quiz test اجابة اسئلة اختبار مسابقة"
        },
        {
            title: "معرض البوسترات",
            url: "posters/index.html",
            icon: "🎨",
            description: "Gallery / المعرض الفني",
            keywords: "gallery صور تصميم بوستر posters"
        }
    ];
    staticItems.forEach(item => allItems.push({ ...item, isDeepResult: true }));

    // 3. Add items from sub-sections in localStorage
    const sources = [
        { key: 'posters_data', folder: 'posters/', defaultIcon: '🖼️', categoryName: 'بوستر' },
        { key: 'videos_data', folder: 'videos/', defaultIcon: '🎬', categoryName: 'فيديو' },
        { key: 'articles_data', folder: 'articles/', defaultIcon: '📰', categoryName: 'مقال' }
    ];

    sources.forEach(source => {
        const data = JSON.parse(localStorage.getItem(source.key) || '[]');
        data.forEach(item => {
            allItems.push({
                title: item.title,
                url: item.url.startsWith('http') ? item.url : (source.folder + item.url),
                icon: item.icon || source.defaultIcon,
                description: `Found in ${source.categoryName} / موجود في ${source.categoryName}`,
                isDeepResult: true,
                keywords: (item.title + " " + (item.description || "")).toLowerCase()
            });
        });
    });

    // 3. Add Dynamic Custom Sections (section_ID_data)
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('section_') && key.endsWith('_data')) {
            const sideData = JSON.parse(localStorage.getItem(key) || '[]');
            sideData.forEach(item => {
                allItems.push({
                    title: item.title,
                    url: item.url,
                    icon: item.icon || '📁',
                    description: `Inside Section / داخل قسم`,
                    isDeepResult: true,
                    keywords: (item.title + " " + (item.description || "")).toLowerCase()
                });
            });
        }
    }

    return allItems;
}

function renderLinks(filterText = '') {
    gridContainer.innerHTML = ''; 
    const isSearching = filterText.trim().length > 0;
    
    const searchPool = isSearching ? getAllSearchableItems() : links;

    const filteredItems = searchPool.filter(item => {
        const query = filterText.toLowerCase();
        return item.title.toLowerCase().includes(query) || 
               item.description.toLowerCase().includes(query) ||
               (item.keywords && item.keywords.toLowerCase().includes(query));
    });

    if (filteredItems.length === 0) {
        gridContainer.innerHTML = '<p class="no-results">> No matching data found in deep search_</p>';
        return;
    }

    filteredItems.forEach((link, index) => {
        const card = document.createElement('a');
        card.href = link.url;
        card.className = 'card' + (link.isDeepResult ? ' deep-result' : '');
        card.target = link.target || (link.url.startsWith('http') ? '_blank' : '_self');
        card.style.animationDelay = `${index * 0.05}s`; 

        card.innerHTML = `
            <div class="card-header">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
                ${link.isDeepResult ? '<span class="search-tag">FILE</span>' : ''}
            </div>
            <div class="card-content">
                <div class="card-icon">${link.icon}</div>
                <div class="card-title">${link.title}</div>
                <div class="card-desc">${link.description}</div>
            </div>
        `;

        gridContainer.appendChild(card);
    });
}

// Event Listeners
searchInput.addEventListener('input', (e) => {
    renderLinks(e.target.value);
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    // Start Typing Effect
    if(titleElement) {
        const originalText = titleElement.getAttribute('data-text') || titleElement.innerText;
        typeWriter(originalText, titleElement);
    }
    renderLinks();
});
