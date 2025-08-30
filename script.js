document.addEventListener("DOMContentLoaded", () => {
  // ===============================
  // Theme Toggle (uses themeToggle id from your HTML)
  // ===============================
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      // toggle light theme class (your CSS defines .theme-light)
      document.body.classList.toggle("theme-light");
    });
  }

  // ===============================
  // Language Toggle + i18n
  // ===============================
  const langToggle = document.getElementById("langToggle");

  // Translation data (merged and extended with books)
  const i18n = {
    en: {
      "nav.about": "About",
      "nav.life": "Life",
      "nav.legacy": "Legacy",
      "nav.contact": "Contact",
      "nav.gallery": "Gallery",
      "nav.timeline": "Timeline",
      "nav.resources": "Resources",
      "nav.quotes": "Quotes",

      "hero.title": "Imam Sayyid Musa al-Sadr",
      "hero.subtitle": "A visionary leader, reformer, and thinker.",

      "about.title": "About",
      "about.p1": "Sayyid Musa al-Sadr (1928–unknown) was a Lebanese-Iranian Shi'a cleric and public intellectual. He moved to Lebanon in 1959 and became a leading voice for national unity, education, and social development, especially in the historically marginalized south.",
      "about.p2": "He led community institutions, promoted interfaith dialogue, and strengthened the role of the state in ensuring dignity and opportunities for all citizens.",
      "about.p3": "His unexplained disappearance in Libya on 31 August 1978, with Sheikh Mohammad Yaacoub and journalist Abbas Badreddine, remains a central unresolved issue in Lebanon’s modern history.",
      "about.text": "Sayyid Musa al-Sadr was a prominent Lebanese-Iranian Shi'a cleric, reformer, and political leader who played a key role in Lebanon's modern history.",
      "about.card1.t": "Scholar & Reformer",
      "about.card1.d": "Blending religious scholarship with civic work: education, healthcare, and social solidarity.",
      "about.card2.t": "Bridge Builder",
      "about.card2.d": "Encouraged dialogue among Lebanon’s communities to foster national unity.",
      "about.card3.t": "Unanswered Question",
      "about.card3.d": "His fate remains unknown; the search for truth continues.",

      "life.title": "Life",
      "life.text": "He was born in Qom, Iran in 1928 and moved to Lebanon in 1959, where he became an influential figure advocating for social justice and unity.",

      "legacy.title": "Legacy",
      "legacy.text": "His mysterious disappearance in 1978 in Libya remains one of the greatest unsolved cases in the Middle East, yet his legacy continues to inspire.",
      "legacy.i1": "A model of faith engaging public life: dignity, education, social justice.",
      "legacy.i2": "Institutions and movements that continue to shape civic engagement.",
      "legacy.i3": "A lasting call for dialogue and responsible citizenship.",
      "legacy.quote": "Man is the brother of man; he is his mirror and his support.",

      "contact.title": "Contact",
      "contact.text": "For inquiries, collaborations, or more information about Imam Musa al-Sadr, please reach out via email.",

      "footer.copy": "© 2025 Tribute site for educational purposes.",

      "aside.title": "At a Glance",
      "aside.i1": "Born 1928 – Qom, Iran (Lebanese descent)",
      "aside.i2": "Moved to Tyre, Lebanon in 1959",
      "aside.i3": "First President of the Supreme Islamic Shi’a Council",
      "aside.i4": "Founded the Amal Movement",
      "aside.i5": "Disappeared in Libya, 31 Aug 1978",

      "timeline.title": "Timeline",
      "timeline.e1": "Born in Qom to a scholarly family rooted in Jabal Amel, Lebanon.",
      "timeline.e2": "Settled in Tyre, Lebanon; launched wide social and educational initiatives.",
      "timeline.e3": "Elected President of the Supreme Islamic Shi’a Council in Lebanon.",
      "timeline.e4": "Helped found the Amal Movement amid rising challenges.",
      "timeline.e5": "Traveled to Libya; disappeared with Sheikh Mohammad Yaacoub and journalist Abbas Badreddine.",

      "quotes.title": "Quoted Sayings",
      "q.1": "Religion without justice is a shell; justice without mercy is a wound.",
      "q.2": "Our unity is our strength; it protects the weak and restrains the strong.",
      "q.3": "Knowledge lights the way, but service leads us to the destination.",
      "q.4": "The duty of the state is to protect dignity; the duty of the citizen is to build.",

      /* Books */
      "books.title": "Books",
      "books.subtitle": "Selected works and resources.",
      "books.disclaimer": "Note: some links open publisher pages or previews where the PDF may require purchase or a request.",
      "books.btn": "Download",

      "book.islam_society": "Islam & Society — Musa al-Sadr",
      "book.ahadith_sahr": "Ahadith al-Sihr — Musa al-Sadr",
      "book.abc_dialogue": "Alphabet of Dialogue — Musa al-Sadr",
      "book.islam_20th": "Islam & 20th-Century Culture — Musa al-Sadr",
      "book.vanished": "The Vanished Imam — Fouad Ajami (about Musa al-Sadr)"
    },

    ar: {
      "nav.about": "عنه",
      "nav.life": "الحياة",
      "nav.legacy": "الإرث",
      "nav.contact": "تواصل",
      "nav.gallery": "المعرض",
      "nav.timeline": "الخط الزمني",
      "nav.resources": "المصادر",
      "nav.quotes": "الاقوال",

      "hero.title": "الإمام السيد موسى الصدر",
      "hero.subtitle": "قائد رؤيوي، مصلح ومفكر.",

      "about.title": "عنه",
      "about.p1": "كان السيد موسى الصدر (1928 - غير معروف) رجل دين شيعي لبناني ومثقف عام. انتقل إلى لبنان في عام 1959، وثم أصبح صوتا رائدا للوحدة الوطنية والتعليم والتنمية الاجتماعية، وخاصة في الجنوب المهمش تاريخيا.",
      "about.p2": "قاد المؤسسات المجتمعية، ودعا إلى الحوار عبر التقاليد الدينية، وعمل على تعزيز دور الدولة في توفير الكرامة والفرص لجميع المواطنين.",
      "about.p3": "ا يزال اختفاه غير المبرر في ليبيا في 31 أغسطس 1978، مع الشيخ محمد يعقوب والصحفي عباس بدر الدين، مسألة مركزية لم تحل في تاريخ لبنان الحديث.",
      "about.text": "السيد موسى الصدر كان رجل دين شيعياً بارزاً ومصلحاً وقائداً سياسياً لعب دوراً أساسياً في تاريخ لبنان الحديث.",
      "about.card1.t": "عالم ومصلح",
      "about.card1.d": "الجمع بين المنح الدراسية الدينية والعمل المدني: التعليم والرعاية الصحية والتضامن الاجتماعي.",
      "about.card2.t": "بناء الجسور",
      "about.card2.d": "تعزيز الحوار بين الطوائف والمؤسسات اللبنانية لتعزيز الوحدة الوطنية.",
      "about.card3.t": "سؤال دائم",
      "about.card3.d": "لا يزال مصيره مجهولا؛ يستمر البحث عن الحقيقة كجزء من الضمير العام.",

      "life.title": "الحياة",
      "life.text": "ولد في مدينة قم الإيرانية عام 1928 وانتقل إلى لبنان عام 1959 حيث أصبح شخصية مؤثرة تدعو إلى العدالة الاجتماعية والوحدة.",

      "legacy.title": "الإرث",
      "legacy.text": "لا يزال اختفاؤه الغامض عام 1978 في ليبيا أحد أكبر الألغاز في الشرق الأوسط، لكن إرثه ما زال يلهم الأجيال.",
      "legacy.i1": "نموذج للإيمان يشارك في الحياة العامة: الكرامة والتعليم والعدالة الاجتماعية.",
      "legacy.i2": "المؤسسات والحركات التي تستمر في تشكيل المشاركة المدنية.",
      "legacy.i3": "دعوة دائمة للحوار والمواطنة المسؤولة.",
      "legacy.quote": "لإنسان هو شقيق الإنسان؛ إنه مرآته ودعمه",

      "contact.title": "تواصل معنا",
      "contact.text": "للاستفسارات أو التعاون أو لمزيد من المعلومات عن الإمام موسى الصدر، يرجى التواصل عبر البريد الإلكتروني.",

      "footer.copy": "© ٢٠٢٥ موقع تكريمي لأغراض تعليمية.",

      "aside.title": "في لمحة",
      "aside.i1": "ولد عام 1928-قم،ايران(النسب لبناني)",
      "aside.i2": "انتقل الى صور، لبنان عام 1959",
      "aside.i3": "الرئيس الاول للمجلس الاسلامي الشيعي الاعلى",
      "aside.i4": "اسس حركة امل",
      "aside.i5": "اختفى في ليبيا في 31 آب 1978",

      "timeline.title": "الخط الزمني",
      "timeline.e1": "ولد في قم لعائلة علمية متجذرة في جبل أمل اللبناني.",
      "timeline.e2": "يستقر في صور، لبنان؛ يطلق مبادرات اجتماعية وتعليمية واسعة النطاق.",
      "timeline.e3": "انتخب رئيسا للمجلس الشيعي الإسلامي الأعلى في لبنان.",
      "timeline.e4": "يساعد في العثور على حركة أمل وسط تزايد التحديات الأمنية والاجتماعية.",
      "timeline.e5": "يسافر إلى ليبيا؛ يختفي مع الشيخ محمد يعقوب والصحفي عباس بدر الدين.",

      "quotes.title": "اقوال مقتبسة",
      "q.1": "الدين بدون عدالة هو قشرة؛ والعدالة بدون رحمة هي جرح.",
      "q.2": "وحدتنا هي قوتنا؛ إنها تحمي الضعفاء وتقيد الأقوياء.",
      "q.3": "المعرفة تضيء الطريق، لكن الخدمة تقودنا إلى الوجهة",
      "q.4": "واجب الدولة هو حماية الكرامة؛ واجب المواطن هو بناء",

      /* Books (AR) */
      "books.title": "الكتب",
      "books.subtitle": "أعمال وموارد مختارة.",
      "books.disclaimer": "ملاحظة: بعض الروابط تقود إلى صفحات دور النشر أو معاينات قد تتطلب شراءً أو طلبًا للحصول على الملف.",
      "books.btn": "تحميل",

      "book.islam_society": "الإسلام والمجتمع — موسى الصدر",
      "book.ahadith_sahr": "أحاديث السحر — موسى الصدر",
      "book.abc_dialogue": "أبجدية الحوار — موسى الصدر",
      "book.islam_20th": "الإسلام وثقافة القرن العشرين — موسى الصدر",
      "book.vanished": "The Vanished Imam — Fouad Ajami (كتاب عن موسى الصدر)"
    }
  };

  let currentLang = "en"; // default language

  function switchLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (i18n[lang] && i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });
    currentLang = lang;
    // Update button label
    langToggle.textContent = lang === "en" ? "AR" : "EN";
    // set html lang + direction for proper layout
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      switchLanguage(currentLang === "en" ? "ar" : "en");
    });
  }

  // Initialize the language strings on load
  switchLanguage(currentLang);

  // ===============================
  // Smooth Scroll
  // ===============================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const el = document.querySelector(this.getAttribute("href"));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });
  });

  // ===============================
  // Download buttons: support multiple .site-dl-btn instances
  // ===============================
  (function initDownloadButtons(){
    const buttons = Array.from(document.querySelectorAll('.site-dl-btn'));
    buttons.forEach(setupButton);

    function setupButton(btn){
      // per-button state
      const progressLayer = btn.querySelector('.progress');
      const percentLabel = btn.querySelector('.percent');
      const confettiLayer = btn.querySelector('.confetti');
      const labelEl = btn.querySelector('.label');
      let state = 'idle';
      let pct = 0;
      let rafId = null;
      const href = btn.dataset.href || btn.getAttribute('data-href') || null;

      function setState(next){
        state = next;
        btn.dataset.state = next;
        if(next === 'idle'){
          btn.disabled = false;
          btn.setAttribute('aria-label', (i18n[currentLang] && i18n[currentLang]['books.btn']) ? i18n[currentLang]['books.btn'] : 'Download');
          setPct(0);
        }
        if(next === 'loading'){
          btn.disabled = true;
          btn.setAttribute('aria-label', 'Downloading…');
        }
        if(next === 'done'){
          btn.disabled = false;
          btn.setAttribute('aria-label', 'Download complete');
          burstConfetti();
        }
      }

      function setPct(n){
        pct = Math.max(0, Math.min(100, Math.floor(n)));
        // write to CSS variable for visual progress
        progressLayer.style.setProperty('--pct', pct);
        if(percentLabel) percentLabel.textContent = pct + '%';
      }

      function startFakeDownload(){
        if(state !== 'idle') return;
        setState('loading');
        let t = 0;
        const start = performance.now();

        function step(now){
          const elapsed = (now - start) / 1000;
          // easing curve + jitter
          const eased = 100 * Math.min(1, 1 - Math.exp(-1.4 * elapsed)) * (0.98 + Math.random()*0.02);
          const target = Math.min(98, eased);
          t = Math.max(t, target);
          setPct(t);
          // finish after ~2.2–3.0s
          if (elapsed > 2.4 + Math.random()*0.6) {
            finish();
            return;
          }
          rafId = requestAnimationFrame(step);
        }
        rafId = requestAnimationFrame(step);
      }

      function finish(){
        if(rafId) cancelAnimationFrame(rafId);
        const startPct = pct;
        const dur = 320;
        const t0 = performance.now();
        function glide(now){
          const k = Math.min(1, (now - t0)/dur);
          const eased = startPct + (100 - startPct) * (1 - Math.pow(1-k, 3));
          setPct(eased);
          if(k < 1) requestAnimationFrame(glide);
          else {
            setTimeout(()=> {
              setState('done');
              // open download/publisher page in a new tab after showing done state
              if(href){
                try{
                  window.open(href, '_blank');
                }catch(err){
                  // fallback: set location
                  window.location.href = href;
                }
              }
              // reset after a short delay so users can click again
              setTimeout(()=> setState('idle'), 1600);
            }, 80);
          }
        }
        requestAnimationFrame(glide);
      }

      function burstConfetti(){
        const colors = ['#ffffff', '#062012', '#0ae2a3', '#5b8cff', '#c6f7e9'];
        const count = 12;
        confettiLayer.innerHTML = '';
        const rect = btn.getBoundingClientRect();
        for(let i=0;i<count;i++){
          const s = document.createElement('span');
          s.className = 'piece';
          s.style.left = (8 + Math.random() * (rect.width - 16)) + 'px';
          s.style.background = colors[i % colors.length];
          s.style.animationDelay = (Math.random() * 0.18) + 's';
          s.style.transform = `translateY(-20px) rotate(${Math.random()*120}deg)`;
          confettiLayer.appendChild(s);
        }
      }

      // interactions
      btn.addEventListener('click', startFakeDownload);

      // init
      setState('idle');
    }
  })();

  // ===============================
  // Small: set current year in footer
  // ===============================
  const yel = document.getElementById('year');
  if(yel) yel.textContent = new Date().getFullYear();
});
