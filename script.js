document.addEventListener("DOMContentLoaded", () => {
  // ===============================
  // Dark Mode Toggle
  // ===============================
  const darkModeToggle = document.getElementById("darkModeToggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // ===============================
  // Language Toggle
  // ===============================
  const langToggle = document.getElementById("langToggle");

  // Translation data
  const i18n = {
    en: {
      "nav.about": "About",
      "nav.life": "Life",
      "nav.legacy": "Legacy",
      "nav.contact": "Contact",
      "hero.title": "Imam Sayyid Musa al-Sadr",
      "hero.subtitle": "A visionary leader, reformer, and thinker.",
      "about.title": "About",
      "about.text": "Sayyid Musa al-Sadr was a prominent Lebanese-Iranian Shi'a cleric, reformer, and political leader who played a key role in Lebanon's modern history.",
      "life.title": "Life",
      "life.text": "He was born in Qom, Iran in 1928 and moved to Lebanon in 1959, where he became an influential figure advocating for social justice and unity.",
      "legacy.title": "Legacy",
      "legacy.text": "His mysterious disappearance in 1978 in Libya remains one of the greatest unsolved cases in the Middle East, yet his legacy continues to inspire.",
      "contact.title": "Contact",
      "contact.text": "For inquiries, collaborations, or more information about Imam Musa al-Sadr, please reach out via email.",
      "footer.copy": "© 2025 Tribute site for educational purposes."
    },
    ar: {
      "nav.about": "عنه",
      "nav.life": "الحياة",
      "nav.legacy": "الإرث",
      "nav.contact": "تواصل",
      "hero.title": "الإمام السيد موسى الصدر",
      "hero.subtitle": "قائد رؤيوي، مصلح ومفكر.",
      "about.title": "عنه",
      "about.p1":"كان السيد موسى الصدر (1928 - غير معروف) رجل دين شيعي لبناني ومثقف عام. انتقل إلى لبنان في عام 1959، وثم أصبح صوتا رائدا للوحدة الوطنية والتعليم والتنمية الاجتماعية، وخاصة في الجنوب المهمش تاريخيا.",
      "about.p2":"قاد المؤسسات المجتمعية، ودعا إلى الحوار عبر التقاليد الدينية، وعمل على تعزيز دور الدولة في توفير الكرامة والفرص لجميع المواطنين.",
      "about.p3":"ا يزال اختفاه غير المبرر في ليبيا في 31 أغسطس 1978، مع الشيخ محمد يعقوب والصحفي عباس بدر الدين، مسأة مركزية لم تحل في تاريخ لبنان الحديث.",
      "about.text": "السيد موسى الصدر كان رجل دين شيعياً بارزاً ومصلحاً وقائداً سياسياً لعب دوراً أساسياً في تاريخ لبنان الحديث.",
      "life.title": "الحياة",
      "life.text": "ولد في مدينة قم الإيرانية عام 1928 وانتقل إلى لبنان عام 1959 حيث أصبح شخصية مؤثرة تدعو إلى العدالة الاجتماعية والوحدة.",
      "legacy.title": "الإرث",
      "legacy.text": "لا يزال اختفاؤه الغامض عام 1978 في ليبيا أحد أكبر الألغاز في الشرق الأوسط، لكن إرثه ما زال يلهم الأجيال.",
      "legacy.i1":"نموذج للإيمان يشارك في الحياة العامة: الكرامة والتعليم والعدالة الاجتماعية.",
      "legacy.i2":"المؤسسات والحركات التي تستمر في تشكيل المشاركة المدنية.",
      "legacy.i3":"دعوة دائمة للحوار والمواطنة المسؤولة.",
      "legacy.quote":"لإنسان هو شقيق الإنسان؛ إنه مرآته ودعمه",
      "contact.title": "تواصل معنا",
      "contact.text": "للاستفسارات أو التعاون أو لمزيد من المعلومات عن الإمام موسى الصدر، يرجى التواصل عبر البريد الإلكتروني.",
      "footer.copy": "© ٢٠٢٥ موقع تكريمي لأغراض تعليمية.",
      "aside.title":"في لمحة",
      "aside.i1":"ولد عام 1928-قم،ايران(النسب لبناني)",
      "aside.i3":"الرئيس الاول للمجلس الاسلامي الشيعي الاعلى",
      "aside.i2":"انتقل الى صور، لبنان عام 1959",
      "aside.i4":"اسس حركة امل",
      "aside.i5":"اختفى في ليبيا في 31 آب 1978",
      "timeline.title":"الخط الزمني",
      "timeline.e1":"ولد في قم لعائلة علمية متجذرة في جبل أمل اللبناني.",
      "timeline.e2":"يستقر في صور، لبنان؛ يطلق مبادرات اجتماعية وتعليمية واسعة النطاق.",
      "timeline.e3":"انتخب رئيسا للمجلس الشيعي الإسلامي الأعلى في لبنان.",
      "timeline.e4":"يساعد في العثور على حركة أمل وسط تزايد التحديات الأمنية والاجتماعية.",
      "timeline.e5":"يسافر إلى ليبيا؛ يختفي مع الشيخ محمد يعقوب والصحفي عباس بدر الدين.",
      "q.1":"الدين بدون عدالة هو قشرة؛ والعدالة بدون رحمة هي جرح.",
      "q.2":"وحدتنا هي قوتنا؛ إنها تحمي الضعفاء وتقيد الأقوياء.",
      "q.3":"المعرفة تضيء الطريق، لكن الخدمة تقودنا إلى الوجهة",
      "q.4":"واجب الدولة هو حماية الكرامة؛ واجب المواطن هو بناء",
    }
  };

  let currentLang = "en"; // default language

  function switchLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });
    currentLang = lang;
    // Update button label
    langToggle.textContent = lang === "en" ? "AR" : "EN";
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      switchLanguage(currentLang === "en" ? "ar" : "en");
    });
  }

  // ===============================
  // Smooth Scroll
  // ===============================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});
