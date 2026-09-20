/* =========================================================
   PipoZa Dev — Supercharged 5-Step Project Wizard
   Quick presets, live scope calculations & canvas confetti
   Full Multi-Language Support (English, Hindi, Bengali)
   Outbound inquiry messages remain strictly in English!
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const totalSteps = 5;

  function getStepLabels() {
    return {
      1: PIPOZA.t('wiz.step1_tag'),
      2: PIPOZA.t('wiz.step2_tag'),
      3: PIPOZA.t('wiz.step3_tag'),
      4: PIPOZA.t('wiz.step4_tag'),
      5: PIPOZA.t('wiz.step5_tag')
    };
  }

  let step = 1;
  let selectedType = null;
  let selectedStyle = null;
  let selectedPalette = null;
  let selectedBudget = null;

  /* ---------- STEP 1: CATEGORY GRID ---------- */
  const typeGrid = document.getElementById('typeGrid');

  function getTypeOptions() {
    return [
      ...PIPOZA.CATEGORIES,
      {
        id: 'other',
        labelKey: 'cat.other.label',
        descKey: 'cat.other.desc',
        get label() { return PIPOZA.t('cat.other.label'); },
        get desc() { return PIPOZA.t('cat.other.desc'); }
      }
    ];
  }

  function renderTypeGrid() {
    if (!typeGrid) return;
    const typeOptions = getTypeOptions();
    typeGrid.innerHTML = typeOptions.map(c => `
      <div class="type-opt tilt-card ${selectedType && selectedType.id === c.id ? 'sel' : ''}" data-id="${c.id}">
        <svg viewBox="0 0 24 24" fill="none">${PIPOZA.ICONS[c.id] || PIPOZA.ICONS.other}</svg>
        <span data-i18n="${c.labelKey}">${c.label}</span>
      </div>`).join('');
  }

  if (typeGrid) {
    renderTypeGrid();

    typeGrid.addEventListener('click', e => {
      const opt = e.target.closest('.type-opt');
      if (!opt) return;
      typeGrid.querySelectorAll('.type-opt').forEach(o => o.classList.remove('sel'));
      opt.classList.add('sel');
      const typeOptions = getTypeOptions();
      selectedType = typeOptions.find(c => c.id === opt.dataset.id);
      const otherField = document.getElementById('otherTypeField');
      if (otherField) {
        otherField.style.display = selectedType.id === 'other' ? 'block' : 'none';
        if (selectedType.id === 'other') document.getElementById('otherType').focus();
      }
      PIPOZA.audio.playPop(520, 0.04);
    });
  }

  /* ---------- QUICK PRESET TEMPLATES ---------- */
  function getPresets() {
    return [
      {
        id: 'tech',
        label: PIPOZA.t('wiz.preset_tech'),
        typeId: 'tech',
        bizName: 'HyperCloud Technologies',
        desc: 'We build an AI-powered cloud orchestration platform. We need a sleek dark-mode landing page, live benchmark stats, and early-access beta signup.',
        style: 'Minimal & clean',
        palette: 'Aurora Cyan',
        budget: '₹25k – 50k'
      },
      {
        id: 'medical',
        label: PIPOZA.t('wiz.preset_medical'),
        typeId: 'medical',
        bizName: 'Apex Health & Wellness',
        desc: 'Specialized physiotherapy and lifestyle clinic. We need a trustworthy, clean website highlighting doctor profiles, clinic hours, and 1-tap appointment booking.',
        style: 'Corporate & trustworthy',
        palette: 'Matrix Emerald',
        budget: '₹5k – 15k'
      },
      {
        id: 'gaming',
        label: PIPOZA.t('wiz.preset_gaming'),
        typeId: 'gaming',
        bizName: 'Vortex Protocol Gaming',
        desc: 'High-energy esports and creator studio. We want cyber neon visuals, interactive tournament schedule cards, and discord community integration.',
        style: 'Bold & high-energy',
        palette: 'Cyberpunk Neon',
        budget: '₹15k – 25k'
      },
      {
        id: 'ecom',
        label: PIPOZA.t('wiz.preset_ecom'),
        typeId: 'ecom',
        bizName: 'Aura Studio Lifestyle',
        desc: 'Handcrafted sustainable goods. We need a visual catalog with product details, mobile-first design, and seamless WhatsApp ordering.',
        style: 'Minimal & clean',
        palette: 'Solar Flare',
        budget: '₹25k – 50k'
      }
    ];
  }

  const presetsBar = document.getElementById('presetsBar');

  function renderPresetsBar() {
    if (!presetsBar) return;
    const presets = getPresets();
    presetsBar.innerHTML = `
      <span class="presets-label" data-i18n="wiz.presets_label">${PIPOZA.t('wiz.presets_label')}</span>
      ${presets.map(p => `<button type="button" class="preset-chip" data-preset="${p.id}">${p.label}</button>`).join('')}
    `;
  }

  if (presetsBar) {
    renderPresetsBar();

    presetsBar.addEventListener('click', e => {
      const chip = e.target.closest('.preset-chip');
      if (!chip) return;
      const presets = getPresets();
      const p = presets.find(item => item.id === chip.dataset.preset);
      if (!p) return;

      // Auto-select type
      const opt = typeGrid.querySelector(`[data-id="${p.typeId}"]`);
      if (opt) {
        typeGrid.querySelectorAll('.type-opt').forEach(o => o.classList.remove('sel'));
        opt.classList.add('sel');
        selectedType = PIPOZA.CATEGORIES.find(c => c.id === p.typeId);
      }

      // Populate inputs
      if (document.getElementById('bizName')) document.getElementById('bizName').value = p.bizName;
      if (document.getElementById('bizDesc')) document.getElementById('bizDesc').value = p.desc;
      if (document.getElementById('bizLocation')) document.getElementById('bizLocation').value = 'Noida / NCR';

      // Auto select style & palette
      selectedStyle = p.style;
      document.querySelectorAll('#styleGrid .chip-opt').forEach(c => {
        c.classList.toggle('sel', c.dataset.s === p.style);
      });

      selectedPalette = p.palette;
      document.querySelectorAll('#colorGrid .swatch').forEach(s => {
        s.classList.toggle('sel', s.dataset.pal === p.palette);
      });

      // Auto select budget
      selectedBudget = p.budget;
      if (typeof updateBudgetUI === 'function') {
        let presetVal = 20000;
        if (p.budget.includes('5k – 15k')) presetVal = 10000;
        if (p.budget.includes('15k – 25k')) presetVal = 20000;
        if (p.budget.includes('25k – 50k')) presetVal = 35000;
        if (p.budget.includes('Under')) presetVal = 3000;
        updateBudgetUI(presetVal, false);
      }

      PIPOZA.audio.playChime();
      PIPOZA.showToast(`Loaded ${p.label} preset`);
    });
  }

  /* ---------- STEP 3: STYLE & PALETTES ---------- */
  const STYLE_DEFS = [
    { id: 'minimal', key: 'wiz.style_minimal', english: 'Minimal & clean' },
    { id: 'bold', key: 'wiz.style_bold', english: 'Bold & high-energy' },
    { id: 'corp', key: 'wiz.style_corp', english: 'Corporate & trustworthy' },
    { id: 'cyber', key: 'wiz.style_cyber', english: 'Futuristic cyberpunk' },
    { id: 'artist', key: 'wiz.style_artist', english: 'You decide — artist choice' }
  ];

  const styleGrid = document.getElementById('styleGrid');

  function renderStyleGrid() {
    if (!styleGrid) return;
    styleGrid.innerHTML = STYLE_DEFS.map(s => `
      <div class="chip-opt ${selectedStyle === s.english ? 'sel' : ''}" data-s="${s.english}" data-i18n="${s.key}">
        ${PIPOZA.t(s.key)}
      </div>`).join('');
  }

  if (styleGrid) {
    renderStyleGrid();
    styleGrid.addEventListener('click', e => {
      const opt = e.target.closest('.chip-opt');
      if (!opt) return;
      styleGrid.querySelectorAll('.chip-opt').forEach(o => o.classList.remove('sel'));
      opt.classList.add('sel');
      selectedStyle = opt.dataset.s;
      PIPOZA.audio.playPop(480, 0.03);
    });
  }

  function getCustomColors() {
    const saved = localStorage.getItem('pipoza-custom-palette');
    if (saved) {
      try { return JSON.parse(saved); } catch(e) {}
    }
    return null;
  }

  function renderColorSwatches() {
    const colorGrid = document.getElementById('colorGrid');
    if (!colorGrid) return;

    const custom = getCustomColors();
    const list = [...PIPOZA.PALETTES];
    if (custom) {
      list.push({
        id: 'custom',
        label: `Custom Studio (${custom.c1})`,
        isCustom: true,
        colors: custom
      });
    }
    list.push({ id: 'unsure', label: 'Studio Choice (Let Us Pick)' });

    colorGrid.innerHTML = list.map(p => {
      if (p.isCustom) {
        return `
          <div class="swatch pal-custom ${selectedPalette && selectedPalette.startsWith('Custom Studio') ? 'sel' : ''}" data-pal="${p.label}" title="Custom: ${p.colors.c1}, ${p.colors.c2}, ${p.colors.c3}">
            <div class="dot3" style="background:linear-gradient(135deg, ${p.colors.c1}, ${p.colors.c2}, ${p.colors.c3});"></div>
            <span>Custom Studio</span>
          </div>`;
      }
      return `
        <div class="swatch pal-${p.id} ${selectedPalette === p.label ? 'sel' : ''}" data-pal="${p.label}">
          <div class="dot3"></div>
          <span>${p.label}</span>
        </div>`;
    }).join('');
  }

  const colorGrid = document.getElementById('colorGrid');
  if (colorGrid) {
    renderColorSwatches();
    colorGrid.addEventListener('click', e => {
      const sw = e.target.closest('.swatch');
      if (!sw) return;
      colorGrid.querySelectorAll('.swatch').forEach(s => s.classList.remove('sel'));
      sw.classList.add('sel');
      selectedPalette = sw.dataset.pal;
      PIPOZA.audio.playPop(520, 0.03);
    });
  }

  const btnLaunchStudio = document.getElementById('btnLaunchCustomStudioInWizard');
  if (btnLaunchStudio) {
    btnLaunchStudio.addEventListener('click', () => {
      if (PIPOZA.openColorStudio) {
        PIPOZA.openColorStudio();
      } else {
        document.getElementById('btnOpenColorStudio')?.click();
      }
    });
  }

  window.addEventListener('pipoza-custom-palette-updated', e => {
    const c = e.detail;
    selectedPalette = `Custom Studio (${c.c1})`;
    renderColorSwatches();
    PIPOZA.showToast('🎨 Custom Studio colors linked to project!');
  });

  /* ---------- STEP 4: INTERACTIVE BUDGET SLIDER ---------- */
  const budgetSlider = document.getElementById('budgetRangeSlider');
  const budgetAmount = document.getElementById('budgetAmount');
  const budgetTierTag = document.getElementById('budgetTierTag');
  const budgetQuickPills = document.querySelectorAll('.budget-quick-pill');
  const btnFlexibleQuote = document.getElementById('btnFlexibleQuote');
  let isCustomQuote = false;

  function getBudgetTierInfo(val) {
    if (val <= 5000) {
      return { tier: PIPOZA.t('wiz.budget_under5k'), englishTier: 'Under ₹5k', desc: 'Starter / Micro Launch', label: `₹${val.toLocaleString('en-IN')}` };
    } else if (val <= 15000) {
      return { tier: PIPOZA.t('wiz.budget_5k_15k'), englishTier: '₹5k – 15k', desc: 'Standard 4–5 Day Sprint', label: `₹${val.toLocaleString('en-IN')}` };
    } else if (val <= 25000) {
      return { tier: PIPOZA.t('wiz.budget_15k_25k'), englishTier: '₹15k – 25k', desc: 'SaaS, Clinics & Dynamic Sites', label: `₹${val.toLocaleString('en-IN')}` };
    } else {
      return { tier: PIPOZA.t('wiz.budget_25k_50k'), englishTier: '₹25k – 50k', desc: 'Full Custom Web Applications', label: `₹${val.toLocaleString('en-IN')}` };
    }
  }

  function updateBudgetUI(val, playSound = false) {
    if (!budgetSlider) return;
    isCustomQuote = false;
    if (btnFlexibleQuote) btnFlexibleQuote.classList.remove('active');

    const min = +budgetSlider.min || 1000;
    const max = +budgetSlider.max || 50000;
    const pct = Math.max(0, Math.min(100, ((val - min) / (max - min)) * 100));
    budgetSlider.style.setProperty('--fill-pct', `${pct}%`);
    budgetSlider.value = val;

    const info = getBudgetTierInfo(val);
    if (budgetAmount) budgetAmount.textContent = info.label;
    if (budgetTierTag) budgetTierTag.textContent = `${info.tier} · ${info.desc}`;

    selectedBudget = `${info.label} (${info.englishTier})`;

    // Highlight matching quick pill
    budgetQuickPills.forEach(pill => {
      const pVal = +pill.dataset.val;
      const pInfo = getBudgetTierInfo(pVal);
      pill.classList.toggle('active', pInfo.englishTier === info.englishTier);
    });

    if (playSound) PIPOZA.audio.playPop(420 + Math.round(pct * 2.2), 0.02);
  }

  if (budgetSlider) {
    updateBudgetUI(+budgetSlider.value || 15000, false);

    budgetSlider.addEventListener('input', e => {
      updateBudgetUI(+e.target.value, true);
    });

    // Tick marks click
    document.querySelectorAll('.budget-ticks span').forEach(tick => {
      tick.addEventListener('click', () => {
        const v = +tick.dataset.val;
        updateBudgetUI(v, true);
        PIPOZA.audio.playChime();
      });
    });

    // Quick pills click
    budgetQuickPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const v = +pill.dataset.val;
        updateBudgetUI(v, true);
        PIPOZA.audio.playChime();
      });
    });

    if (btnFlexibleQuote) {
      btnFlexibleQuote.addEventListener('click', () => {
        isCustomQuote = !isCustomQuote;
        btnFlexibleQuote.classList.toggle('active', isCustomQuote);
        if (isCustomQuote) {
          if (budgetAmount) budgetAmount.textContent = PIPOZA.t('wiz.custom_quote');
          if (budgetTierTag) budgetTierTag.textContent = 'Flexible · Requirements discussion first';
          selectedBudget = 'Custom Quote / Flexible Scope';
          budgetQuickPills.forEach(p => p.classList.remove('active'));
          PIPOZA.audio.playChime();
        } else {
          updateBudgetUI(+budgetSlider.value, true);
        }
      });
    }
  }

  /* ---------- PROGRESS NAVIGATION & RENDER ---------- */
  function render() {
    document.querySelectorAll('.progress i').forEach(i => {
      const n = +i.dataset.i;
      i.classList.toggle('active', n === step);
      i.classList.toggle('done', n < step);
    });

    const stepNum = document.getElementById('stepNum');
    if (stepNum) stepNum.textContent = step;

    const stepLabel = document.getElementById('stepLabel');
    if (stepLabel) stepLabel.textContent = getStepLabels()[step];

    document.querySelectorAll('.step-panel').forEach(p => p.classList.toggle('active', +p.dataset.step === step));

    const prevBtn = document.getElementById('prevBtn');
    if (prevBtn) prevBtn.style.visibility = step === 1 ? 'hidden' : 'visible';

    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) nextBtn.style.display = step === totalSteps ? 'none' : 'inline-flex';

    if (step === totalSteps) {
      buildReview();
      launchConfetti();
      PIPOZA.audio.playChime();
    }
  }

  function goTo(n, push) {
    step = Math.min(totalSteps, Math.max(1, n));
    render();
    const hash = '#step-' + step;
    if (push !== false && location.hash !== hash) history.pushState({ step }, '', hash);
    const wrap = document.querySelector('.wizard-wrap');
    if (wrap) wrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function highlightError(el, msg) {
    if (el) {
      el.classList.add('input-invalid');
      el.focus();
      setTimeout(() => el.classList.remove('input-invalid'), 2500);
    }
    PIPOZA.showToast(`⚠️ ${msg}`);
    if (PIPOZA.audio && PIPOZA.audio.playPop) PIPOZA.audio.playPop(260, 0.08);
  }

  function validateStep(current) {
    if (current === 1) {
      if (!selectedType) {
        PIPOZA.showToast('⚠️ Please select a website category to continue.');
        if (PIPOZA.audio && PIPOZA.audio.playPop) PIPOZA.audio.playPop(260, 0.08);
        return false;
      }
      if (selectedType.id === 'other') {
        const otherInput = document.getElementById('otherType');
        if (!otherInput?.value.trim()) {
          highlightError(otherInput, 'Please specify your custom website type.');
          return false;
        }
      }
      return true;
    }
    if (current === 2) {
      const bizName = document.getElementById('bizName');
      const bizLocation = document.getElementById('bizLocation');
      const bizDesc = document.getElementById('bizDesc');
      if (!bizName?.value.trim()) {
        highlightError(bizName, 'Please enter your Business or Project Name.');
        return false;
      }
      if (!bizLocation?.value.trim()) {
        highlightError(bizLocation, 'Please enter your Location / City.');
        return false;
      }
      if (!bizDesc?.value.trim()) {
        highlightError(bizDesc, 'Please enter your website goals or requirements.');
        return false;
      }
      return true;
    }
    if (current === 3) {
      if (!selectedStyle) {
        PIPOZA.showToast('⚠️ Please select a design personality style.');
        if (PIPOZA.audio && PIPOZA.audio.playPop) PIPOZA.audio.playPop(260, 0.08);
        return false;
      }
      if (!selectedPalette) {
        PIPOZA.showToast('⚠️ Please select a primary color direction.');
        if (PIPOZA.audio && PIPOZA.audio.playPop) PIPOZA.audio.playPop(260, 0.08);
        return false;
      }
      return true;
    }
    if (current === 4) {
      const ctName = document.getElementById('ctName');
      const ctEmail = document.getElementById('ctEmail');
      const ctPhone = document.getElementById('ctPhone');
      if (!ctName?.value.trim()) {
        highlightError(ctName, 'Please enter your Full Name.');
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!ctEmail?.value.trim() || !emailRegex.test(ctEmail.value.trim())) {
        highlightError(ctEmail, 'Please enter a valid Email Address.');
        return false;
      }
      const phoneDigits = (ctPhone?.value || '').replace(/\D/g, '');
      if (phoneDigits.length < 10) {
        highlightError(ctPhone, 'Please enter a valid Phone / WhatsApp Number (at least 10 digits).');
        return false;
      }
      return true;
    }
    return true;
  }

  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (!validateStep(step)) return;
      goTo(step + 1);
    });
  }
  if (prevBtn) prevBtn.addEventListener('click', () => goTo(step - 1));

  window.addEventListener('popstate', () => {
    const m = location.hash.match(/step-(\d)/);
    step = m ? Math.min(totalSteps, Math.max(1, +m[1])) : 1;
    render();
  });

  const initM = location.hash.match(/step-(\d)/);
  step = initM ? Math.min(totalSteps, Math.max(1, +initM[1])) : 1;
  render();

  /* ---------- GATHER DATA (STRICTLY ENGLISH COMPILATION FOR OUTBOUND) ---------- */
  function gatherData() {
    const otherType = document.getElementById('otherType')?.value.trim();
    const custom = getCustomColors();
    let palOutput = selectedPalette || 'Aurora Cyan';
    if (selectedPalette && selectedPalette.startsWith('Custom Studio') && custom) {
      palOutput = `Custom Studio Palette (${custom.c1} primary, ${custom.c2} secondary, ${custom.c3} highlight, ${custom.go} CTA)`;
    }

    const typeName = selectedType ? (selectedType.id === 'other' && otherType ? otherType : (selectedType.labelKey ? PIPOZA.TRANSLATIONS.en[selectedType.labelKey] : selectedType.label)) : 'Tech & Startups';

    return {
      type: typeName,
      bizName: document.getElementById('bizName')?.value.trim() || '—',
      bizLocation: document.getElementById('bizLocation')?.value.trim() || '—',
      bizDesc: document.getElementById('bizDesc')?.value.trim() || '—',
      style: selectedStyle || 'Minimal & clean',
      palette: palOutput,
      ctName: document.getElementById('ctName')?.value.trim() || '—',
      ctEmail: document.getElementById('ctEmail')?.value.trim() || '—',
      ctPhone: document.getElementById('ctPhone')?.value.trim() || '—',
      budget: selectedBudget || '₹15k – 25k',
      advancePolicy: '0₹ Advance (Pay only after completion & satisfaction)'
    };
  }

  function buildReview() {
    const d = gatherData();
    const rows = [
      [PIPOZA.t('wiz.rev_category'), d.type],
      [PIPOZA.t('wiz.rev_biz'), d.bizName],
      [PIPOZA.t('wiz.rev_loc'), d.bizLocation],
      [PIPOZA.t('wiz.rev_scope'), d.bizDesc],
      [PIPOZA.t('wiz.rev_style'), d.style],
      [PIPOZA.t('wiz.rev_palette'), d.palette],
      [PIPOZA.t('wiz.rev_contact'), d.ctName],
      [PIPOZA.t('wiz.rev_email'), d.ctEmail],
      [PIPOZA.t('wiz.rev_phone'), d.ctPhone],
      [PIPOZA.t('wiz.rev_budget'), d.budget],
      [PIPOZA.t('wiz.rev_advance'), PIPOZA.t('wiz.rev_advance_val')],
      [PIPOZA.t('wiz.rev_sprint'), PIPOZA.t('wiz.rev_sprint_val')]
    ];

    const reviewBox = document.getElementById('reviewBox');
    if (reviewBox) {
      reviewBox.innerHTML = rows.map(([k, v]) => `
        <div class="review-row">
          <span class="k">${k}</span>
          <span class="v">${String(v).replace(/</g, '&lt;')}</span>
        </div>
      `).join('');
    }
  }

  function buildMessage(d) {
    return [
      '🚀 NEW PROJECT INQUIRY — PipoZa Dev',
      '====================================',
      `Category: ${d.type}`,
      `Business: ${d.bizName}`,
      `Location: ${d.bizLocation}`,
      '',
      'Description & Goals:',
      d.bizDesc,
      '',
      `Style Direction: ${d.style}`,
      `Color Palette: ${d.palette}`,
      '',
      'Contact Details:',
      `Name: ${d.ctName}`,
      `Email: ${d.ctEmail}`,
      `WhatsApp / Phone: ${d.ctPhone}`,
      `Budget: ${d.budget}`,
      'Advance Terms: 0₹ Advance Required (Pay only after 100% completion)',
      'Hosting: Free Lifetime Cloud Hosting Included',
      'Timeline: 4–5 Working Days',
      '',
      `Submitted via pipoza.dev on ${new Date().toLocaleString()}`
    ].join('\n');
  }

  /* ---------- SEND ACTIONS ---------- */
  const sendEmail = document.getElementById('sendEmail');
  if (sendEmail) {
    sendEmail.addEventListener('click', () => {
      const d = gatherData();
      const subject = `New Website Project — ${d.type}${d.bizName !== '—' ? ' (' + d.bizName + ')' : ''}`;
      const body = buildMessage(d);
      if (PIPOZA.openEmailModal) {
        PIPOZA.openEmailModal(subject, body);
      } else {
        window.location.href = `mailto:${PIPOZA.CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }
    });
  }

  const sendWhatsApp = document.getElementById('sendWhatsApp');
  if (sendWhatsApp) {
    sendWhatsApp.addEventListener('click', () => {
      const d = gatherData();
      const text = buildMessage(d);
      window.open(`https://wa.me/${PIPOZA.WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
      PIPOZA.showToast('Launching WhatsApp…');
      PIPOZA.audio.playPop(680, 0.05);
    });
  }

  const downloadFile = document.getElementById('downloadFile');
  if (downloadFile) {
    downloadFile.addEventListener('click', () => {
      const d = gatherData();
      const content = buildMessage(d);
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const safe = (d.bizName !== '—' ? d.bizName : 'pipoza-project').toLowerCase().replace(/[^a-z0-9]+/g, '-');
      a.href = url;
      a.download = `${safe}-brief.txt`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      PIPOZA.showToast('Project brief downloaded as .txt file!');
      PIPOZA.audio.playPop(720, 0.05);
    });
  }

  const copySummary = document.getElementById('copySummary');
  if (copySummary) {
    copySummary.addEventListener('click', async () => {
      const d = gatherData();
      try {
        await navigator.clipboard.writeText(buildMessage(d));
        PIPOZA.showToast('✓ Project brief copied to clipboard!');
        PIPOZA.audio.playChime();
      } catch (e) {
        PIPOZA.showToast('Could not auto-copy. Please select and copy manually.');
      }
    });
  }

  /* ---------- REACT TO GLOBAL LANGUAGE CHANGE ---------- */
  window.addEventListener('pipoza:langchange', () => {
    renderTypeGrid();
    renderPresetsBar();
    renderStyleGrid();
    renderColorSwatches();
    if (budgetSlider) updateBudgetUI(+budgetSlider.value || 15000, false);
    render();
    if (step === totalSteps) buildReview();
  });

  /* ---------- LIGHTWEIGHT PURE CANVAS CONFETTI BURST ---------- */
  function launchConfetti() {
    let canvas = document.getElementById('confettiCanvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'confettiCanvas';
      document.body.appendChild(canvas);
    }
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#00d2ff', '#8a2be2', '#ff007f', '#00f5a0', '#ffe600', '#ffffff'];
    const pieces = [];
    const count = 100;

    for (let i = 0; i < count; i++) {
      pieces.push({
        x: canvas.width * 0.5,
        y: canvas.height * 0.45,
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 0.7) * 18,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 12,
        alpha: 1
      });
    }

    let frame = 0;
    function renderConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.4; // gravity
        p.vx *= 0.98;
        p.rotation += p.rSpeed;
        p.alpha -= 0.012;

        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
          ctx.restore();
        }
      });

      frame++;
      if (alive && frame < 180) {
        requestAnimationFrame(renderConfetti);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    renderConfetti();
  }
});
