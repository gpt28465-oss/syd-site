// Basic enhancements: nav toggle, theme toggle, language toggle, year, i18n content load
const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => Array.from(p.querySelectorAll(s));

// Toggle mobile nav
const navToggle = $("#navToggle");
const navMenu = $("#nav-menu");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  // close on link click
  $$("#nav-menu a").forEach(a => a.addEventListener("click", () => navMenu.classList.remove("open")));
}

// Theme handling
const themeToggle = $("#themeToggle");
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") document.body.classList.add("theme-light");
if (!savedTheme && !prefersDark) document.body.classList.add("theme-light");
themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("theme-light");
  localStorage.setItem("theme", document.body.classList.contains("theme-light") ? "light" : "dark");
});

// Year
$("#year").textContent = new Date().getFullYear();

// ====== i18n ======
const i18n = {
  en: {
    "brand.name": "Musa al‑Sadr",
    "brand.tag": "Tribute & Legacy",
    "nav.about": "About",
    "nav.timeline": "Timeline",
    "nav.legacy": "Legacy",
    "nav.quotes": "Quotes",
    "nav.gallery": "Gallery",
    "nav.resources": "Resources",
    "nav.contact": "Contact",
    "hero.title": "Imam Sayyid Musa al‑Sadr",
    "hero.subtitle": "Scholar, reformer, and voice for dignity and social justice in Lebanon.",
    "hero.cta1": "Discover his life",
    "hero.cta2": "View the timeline",
    "facts.born.label": "Born:",
    "facts.born.value": "1928 – Qom, Iran",
    "facts.role1.label": "Role:",
    "facts.role1.value": "Head of the Supreme Islamic Shiite Council in Lebanon (1969)",
    "facts.role2.label": "Founded:",
    "facts.role2.value": "The Amal Movement (1974)",
    "facts.missing.label": "Disappeared:",
    "facts.missing.value": "August 31, 1978 – Libya",
    "about.title": "About",
    "about.p1": "Sayyid Musa al‑Sadr (1928–unknown) was a Lebanese‑Iranian Shia cleric and public intellectual. He moved to Lebanon in 1959, quickly becoming a leading voice for national unity, education, and social development, especially in the historically marginalized south.",
    "about.p2": "He spearheaded community institutions, advocated dialogue across religious traditions, and worked to strengthen the state’s role in providing dignity and opportunity for all citizens.",
    "about.p3": "His unexplained disappearance in Libya on August 31, 1978, with Sheikh Muhammad Ya‘qub and journalist ‘Abbas Badreddine, remains a central unresolved case in Lebanon’s modern history.",
    "about.card1.t": "Scholar & Reformer",
    "about.card1.d": "Combined religious scholarship with civic action: education, healthcare, and social solidarity.",
    "about.card2.t": "Bridge‑Builder",
    "about.card2.d": "Promoted dialogue among Lebanon’s communities and institutions to reinforce national unity.",
    "about.card3.t": "Enduring Question",
    "about.card3.d": "His fate remains unknown; the quest for truth continues as part of the public conscience.",
    "aside.title": "At a glance",
    "aside.i1": "Born 1928 — Qom, Iran (Lebanese lineage)",
    "aside.i2": "Moved to Tyre, Lebanon in 1959",
    "aside.i3": "First head of the Supreme Islamic Shiite Council (1969)",
    "aside.i4": "Founded the Amal Movement (1974)",
    "aside.i5": "Disappeared in Libya on Aug 31, 1978",
    "timeline.title": "Timeline",
    "timeline.e1": "Born in Qom to a scholarly family rooted in Lebanon’s Jabal ‘Amil.",
    "timeline.e2": "Settles in Tyre, Lebanon; launches wide‑ranging social and educational initiatives.",
    "timeline.e3": "Elected head of the Supreme Islamic Shiite Council in Lebanon.",
    "timeline.e4": "Helps found the Amal Movement amid growing security and social challenges.",
    "timeline.e5": "Travels to Libya; disappears with Sheikh Muhammad Ya‘qub and journalist ‘Abbas Badreddine.",
    "legacy.title": "Legacy",
    "legacy.i1": "A model of faith engaged with public life: dignity, education, and social justice.",
    "legacy.i2": "Institutions and movements that continue to shape civic participation.",
    "legacy.i3": "An enduring call for dialogue and responsible citizenship.",
    "legacy.quote": "“Man is the brother of man; he is his mirror and support.”",
    "quotes.title": "Selected Quotes",
    "q.1": "Religion without justice is a shell; justice without compassion is a wound.",
    "q.2": "Our unity is our strength; it safeguards the weak and restrains the strong.",
    "q.3": "Knowledge lights the path, but service brings us to the destination.",
    "q.4": "The state’s duty is to protect dignity; the citizen’s duty is to build it.",
    "gallery.title": "Gallery",
    "resources.title": "Resources",
    "resources.p": "Explore historical documents, biographies, and archival material. (External links open in a new tab.)",
    "resources.l1": "Wikipedia: Musa al‑Sadr",
    "resources.l2": "Arabic Wikipedia: موسى الصدر",
    "contact.title": "Contact",
    "contact.p": "For feedback about this website, send us an email.",
    "contact.btn": "Email",
    "footer.copy": "© <span id=\\"year\\"></span> Tribute site for educational purposes."
  },
  ar: {
    "brand.name": "السيد موسى الصدر",
    "brand.tag": "سيرة وإرث",
    "nav.about": "السيرة",
    "nav.timeline": "المسار الزمني",
    "nav.legacy": "الإرث",
    "nav.quotes": "اقتباسات",
    "nav.gallery": "معرض",
    "nav.resources": "مصادر",
    "nav.contact": "تواصل",
    "hero.title": "الإمام السيد موسى الصدر",
    "hero.subtitle": "عالمٌ مُصلِح وصوتٌ للكرامة والعدالة الاجتماعية في لبنان.",
    "hero.cta1": "اكتشف سيرته",
    "hero.cta2": "اطّلع على الخط الزمني",
    "facts.born.label": "الميلاد:",
    "facts.born.value": "1928 – قم، إيران",
    "facts.role1.label": "المنصب:",
    "facts.role1.value": "رئيس المجلس الإسلامي الشيعي الأعلى في لبنان (1969)",
    "facts.role2.label": "أسس:",
    "facts.role2.value": "حركة أمل (1974)",
    "facts.missing.label": "الغياب:",
    "facts.missing.value": "31 آب/أغسطس 1978 – ليبيا",
    "about.title": "السيرة",
    "about.p1": "السيد موسى الصدر (1928 – غير معلوم) عالمٌ وفقيه شيعي لبناني‑إيراني ومفكّرٌ عام. انتقل إلى لبنان عام 1959 وأصبح سريعاً من أبرز الأصوات الداعية إلى الوحدة الوطنية والتعليم والتنمية الاجتماعية، خصوصاً في جنوب لبنان.",
    "about.p2": "أسّس مؤسساتٍ مجتمعية، ودعا إلى الحوار بين مكوّنات الوطن، وسعى إلى تعزيز دور الدولة في صون كرامة الناس وتأمين الفرص لهم.",
    "about.p3": "غيابه غير المفسَّر في ليبيا يوم 31 آب/أغسطس 1978 مع الشيخ محمد يعقوب والصحافي عباس بدرالدين ما يزال من القضايا المركزية غير المحسومة في تاريخ لبنان الحديث.",
    "about.card1.t": "عالم ومصلح",
    "about.card1.d": "جمع بين العلم والعمل العام: التعليم، الرعاية الصحية، والتكافل الاجتماعي.",
    "about.card2.t": "جسْرٌ بين المكوّنات",
    "about.card2.d": "دعا إلى الحوار بين أبناء الوطن ومؤسساته لتعزيز الوحدة الوطنية.",
    "about.card3.t": "سؤالٌ مستمر",
    "about.card3.d": "مصيره ما يزال مجهولاً، والبحث عن الحقيقة جزءٌ من الضمير العام.",
    "aside.title": "لمحة سريعة",
    "aside.i1": "الميلاد 1928 — قم، إيران (أصول لبنانية)",
    "aside.i2": "الانتقال إلى صور – لبنان عام 1959",
    "aside.i3": "أول رئيس للمجلس الإسلامي الشيعي الأعلى (1969)",
    "aside.i4": "أسس حركة أمل (1974)",
    "aside.i5": "الاختفاء في ليبيا في 31 آب 1978",
    "timeline.title": "المسار الزمني",
    "timeline.e1": "وُلد في قم لعائلةٍ علمية تعود جذورها إلى جبل عامل في لبنان.",
    "timeline.e2": "استقر في مدينة صور – لبنان، وأطلق مبادرات تعليمية واجتماعية واسعة.",
    "timeline.e3": "انتُخب رئيساً للمجلس الإسلامي الشيعي الأعلى في لبنان.",
    "timeline.e4": "ساهم في تأسيس حركة أمل في ظل تحديات أمنية واجتماعية متزايدة.",
    "timeline.e5": "سافر إلى ليبيا؛ واختفى مع الشيخ محمد يعقوب والصحافي عباس بدرالدين.",
    "legacy.title": "الإرث",
    "legacy.i1": "نموذج للدين المنخرط في الشأن العام: كرامة، تعليم، وعدالة اجتماعية.",
    "legacy.i2": "مؤسسات وحركات ما تزال تؤثر في المشاركة المدنية.",
    "legacy.i3": "نداءٌ دائم للحوار والمواطنة المسؤولة.",
    "legacy.quote": "«الإنسان أخو الإنسان، مرآته وسنده.»",
    "quotes.title": "اقتباسات مختارة",
    "q.1": "دينٌ بلا عدالةٍ قشرة؛ وعدالةٌ بلا رحمةٍ جرح.",
    "q.2": "وحدتنا قوتنا؛ تحمي الضعيف وتردع القوي.",
    "q.3": "المعرفة تُضيء الطريق، والخدمة تُوصل إلى المقصِد.",
    "q.4": "واجب الدولة صون الكرامة، وواجب المواطن بناؤها.",
    "gallery.title": "معرض",
    "resources.title": "مصادر",
    "resources.p": "طالع وثائق تاريخية وسيراً ومواد أرشيفية. (الروابط الخارجية تُفتح في تبويب جديد.)",
    "resources.l1": "ويكيبيديا: موسى الصدر – الإنجليزية",
    "resources.l2": "ويكيبيديا العربية: موسى الصدر",
    "contact.title": "تواصل",
    "contact.p": "لإبداء الملاحظات حول هذا الموقع، راسلنا عبر البريد.",
    "contact.btn": "بريد إلكتروني",
    "footer.copy": "© <span id=\\"year\\"></span> موقعٌ تعريفي لأغراض تعليمية."
  }
};

const langToggle = $("#langToggle");
function setLang(lang){
  const isAr = lang === "ar";
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? "rtl" : "ltr";
  langToggle.textContent = isAr ? "EN" : "AR";
  // apply translations
  $$("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = i18n[lang][key];
    if (typeof val !== "undefined"){
      // Allow simple HTML in values
      el.innerHTML = val;
    }
  });
  localStorage.setItem("lang", lang);
}
const savedLang = localStorage.getItem("lang") || (navigator.language?.startsWith("ar") ? "ar" : "en");
setLang(savedLang);
langToggle?.addEventListener("click", () => setLang(document.documentElement.lang === "ar" ? "en" : "ar"));

// Intersection animations (subtle)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.animate([{opacity:0, transform:"translateY(8px)"},{opacity:1, transform:"translateY(0)"}], {duration:500, easing:"ease-out"});
      observer.unobserve(e.target);
    }
  });
}, {threshold: .15});
$$(".section, .card, .aside, .quote-card, .gallery figure").forEach(el => observer.observe(el));
