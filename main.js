/* =========================================================
   PipoZa Dev — Core Interactive Engine (Mobile + PC Optimized)
   Canvas particles, 3D tilts, magnetic physics, audio synth,
   Custom Color Studio, currency switcher, showcase & estimator
   ========================================================= */

window.PIPOZA = window.PIPOZA || {};
PIPOZA.CONTACT_EMAIL = "pipoza.dev@gmail.com";
PIPOZA.WHATSAPP_NUMBER = "917810888147"; // country code + number

/* ---------------- CATEGORIES & VECTOR ICONS ---------------- */
PIPOZA.ICONS = {
  tech: '<path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" stroke="url(#g1)" stroke-width="1.8" stroke-linecap="round"/><rect x="6" y="6" width="12" height="12" rx="2.5" stroke="url(#g1)" stroke-width="1.8"/><rect x="9.5" y="9.5" width="5" height="5" rx="1" stroke="url(#g1)" stroke-width="1.8"/>',
  medical: '<path d="M12 21s-7.5-4.6-9.7-9.1C.7 8.3 2.4 4.9 5.8 4.2c2-.4 3.9.5 5 2.1C11.9 4.7 13.8 3.8 15.8 4.2c3.4.7 5.1 4.1 3.5 7.7C17.1 16.4 12 21 12 21z" stroke="url(#g1)" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 12h2.2l1.3-2.6L13 15l1.3-3H16" stroke="url(#g1)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  gaming: '<rect x="2.5" y="8" width="19" height="9" rx="4.2" stroke="url(#g1)" stroke-width="1.8"/><path d="M7 10.5v4M5 12.5h4" stroke="url(#g1)" stroke-width="1.8" stroke-linecap="round"/><circle cx="16" cy="11" r="1.2" fill="url(#g1)"/><circle cx="18.4" cy="13.4" r="1.2" fill="url(#g1)"/>',
  ecom: '<circle cx="9" cy="20" r="1.5" fill="url(#g1)"/><circle cx="17" cy="20" r="1.5" fill="url(#g1)"/><path d="M2.5 3h2.4L7 14.5h10.2L19.5 6H6" stroke="url(#g1)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  biz: '<rect x="3" y="8" width="18" height="12" rx="2" stroke="url(#g1)" stroke-width="1.8"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="url(#g1)" stroke-width="1.8"/><path d="M3 13h18" stroke="url(#g1)" stroke-width="1.8"/>',
  portfolio: '<circle cx="12" cy="8.4" r="3.6" stroke="url(#g1)" stroke-width="1.8"/><path d="M4.5 20c1.2-4 4-6 7.5-6s6.3 2 7.5 6" stroke="url(#g1)" stroke-width="1.8" stroke-linecap="round"/>',
  food: '<path d="M6 2.5v7a2.5 2.5 0 0 0 5 0v-7M8.5 9.5V21.5" stroke="url(#g1)" stroke-width="1.8" stroke-linecap="round"/><path d="M16.5 2.5c-1.5 0-2.5 1.8-2.5 4.5s1 4.5 2.5 4.5v10" stroke="url(#g1)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
  realestate: '<path d="M3 11 12 3l9 8" stroke="url(#g1)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 10v10h13V10" stroke="url(#g1)" stroke-width="1.8" stroke-linejoin="round"/><path d="M10 20v-5.5h4V20" stroke="url(#g1)" stroke-width="1.8"/>',
  other: '<path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="url(#g1)" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="12" r="4" stroke="url(#g1)" stroke-width="1.8"/>'
};

PIPOZA.CATEGORIES = [
  { id:'tech', label:'Tech & Startups', desc:'SaaS, product launches & landing pages engineered for high conversions.' },
  { id:'medical', label:'Medical & Clinics', desc:'Clean, trustworthy, appointment-focused sites for doctors & healthcare.' },
  { id:'gaming', label:'Gaming & Esports', desc:'Bold, high-energy cyber-styled platforms built for gaming studios.' },
  { id:'ecom', label:'E-commerce & Stores', desc:'Fast storefronts designed to showcase products and drive checkouts.' },
  { id:'biz', label:'Business & Corporate', desc:'Polished corporate web presences that establish authority and trust.' },
  { id:'portfolio', label:'Portfolio & Creators', desc:'Immersive personal showcases that put your creative work front-and-center.' },
  { id:'food', label:'Restaurants & Cafes', desc:'Appetizing menu displays, reservation flows, and location showcases.' },
  { id:'realestate', label:'Real Estate & Luxury', desc:'Interactive property listings, high-res galleries, and lead captures.' },
];

PIPOZA.PALETTES = [
  { id:'aurora',    label:'Aurora Cyan', color:'#00d2ff' },
  { id:'cyberpunk', label:'Cyberpunk Neon', color:'#ff0055' },
  { id:'emerald',   label:'Matrix Emerald', color:'#00ffa3' },
  { id:'solar',     label:'Solar Flare', color:'#ffb703' },
  { id:'ocean',     label:'Deep Ocean', color:'#4361ee' },
];

/* ---------------- CURATED RANDOM COMBINATIONS FOR USER COLOR STUDIO ---------------- */
const RANDOM_COMBOS = [
  { name: 'Neon Synthwave', c1: '#ff007f', c2: '#7928ca', c3: '#00f2fe', go: '#00f5a0' },
  { name: 'Toxic Cyber', c1: '#00ffa3', c2: '#10b981', c3: '#00b4d8', go: '#a3e635' },
  { name: 'Tokyo Twilight', c1: '#8a2be2', c2: '#4361ee', c3: '#f72585', go: '#4cc9f0' },
  { name: 'Golden Cyber', c1: '#ffb703', c2: '#fb8500', c3: '#e63946', go: '#ffd166' },
  { name: 'Electric Glacier', c1: '#00e5ff', c2: '#2979ff', c3: '#651fff', go: '#00e676' },
  { name: 'Hyper Magenta', c1: '#ff0055', c2: '#9b5de5', c3: '#f15bb5', go: '#00f5d4' },
  { name: 'Emerald Matrix', c1: '#00ff87', c2: '#60efff', c3: '#0061ff', go: '#00ff87' },
  { name: 'Cyberpunk 2077', c1: '#fcee0a', c2: '#ff003c', c3: '#00f0ff', go: '#00f0ff' }
];

/* ---------------- DYNAMIC CUSTOM PALETTE APPLIER ---------------- */
PIPOZA.applyCustomPalette = function(colors, save = true) {
  const root = document.documentElement;
  root.style.setProperty('--c1', colors.c1);
  root.style.setProperty('--c2', colors.c2);
  root.style.setProperty('--c3', colors.c3);
  root.style.setProperty('--go', colors.go);
  root.style.setProperty('--grad-brand', `linear-gradient(135deg, ${colors.c1} 0%, ${colors.c2} 50%, ${colors.c3} 100%)`);
  root.style.setProperty('--grad-glow', `linear-gradient(135deg, color-mix(in srgb, ${colors.c1} 30%, transparent), color-mix(in srgb, ${colors.c2} 30%, transparent))`);
  root.style.setProperty('--grad-brand-soft', `linear-gradient(135deg, color-mix(in srgb, ${colors.c1} 14%, transparent), color-mix(in srgb, ${colors.c2} 14%, transparent))`);
  root.style.setProperty('--shadow-glow', `0 0 0 1px var(--glass-brd), 0 20px 50px -15px color-mix(in srgb, ${colors.c1} 35%, transparent)`);
  root.style.setProperty('--shadow-btn', `0 10px 25px -5px color-mix(in srgb, ${colors.go} 50%, transparent)`);
  root.setAttribute('data-palette', 'custom');

  if (save) {
    localStorage.setItem('pipoza-palette', 'custom');
    localStorage.setItem('pipoza-custom-palette', JSON.stringify(colors));
  }
};

/* ---------------- AUDIO SYNTHESIZER (MICRO SOUND FX) ---------------- */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = localStorage.getItem('pipoza-sound') === 'true';
  }

  init() {
    if (!this.ctx && typeof AudioContext !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop(freq = 480, duration = 0.05) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch(e) {}
  }

  playChime() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.06);
        gain.gain.setValueAtTime(0.05, this.ctx.currentTime + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + idx * 0.06 + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.06);
        osc.stop(this.ctx.currentTime + idx * 0.06 + 0.25);
      });
    } catch(e) {}
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('pipoza-sound', this.enabled ? 'true' : 'false');
    if (this.enabled) {
      this.init();
      this.playChime();
      PIPOZA.showToast('Audio FX enabled');
    } else {
      PIPOZA.showToast('Audio FX muted');
    }
    return this.enabled;
  }
}
PIPOZA.audio = new SoundEngine();

/* ---------------- HTML5 CANVAS CONSTELLATION PARTICLES ---------------- */
function initCanvasParticles() {
  let canvas = document.getElementById('bgCanvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'bgCanvas';
    document.body.insertAdjacentElement('afterbegin', canvas);
  }
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const mouse = { x: -1000, y: -1000, radius: 100 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createParticles();
  }

  function createParticles() {
    particles = [];
    const isMobile = window.innerWidth < 640;
    const count = isMobile ? 22 : Math.floor(Math.min(width * 0.035, 50));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.6 + 1,
        alpha: Math.random() * 0.4 + 0.2
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        p.x -= (dx / dist) * force * 2.2;
        p.y -= (dy / dist) * force * 2.2;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 210, 255, ${p.alpha})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const d = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (d < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(138, 43, 226, ${0.14 * (1 - d / 100)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  resize();
  animate();
}

/* ---------------- 3D TILT CARDS & SPECULAR CURSOR GLARE (DESKTOP ONLY) ---------------- */
function initTiltCards() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const cardSelector = '.tilt-card, .cat-card, .policy-card, .work-card, .stat, .calc-card, .type-opt, .testimonial-card';

  document.addEventListener('mousemove', e => {
    const card = e.target.closest(cardSelector);
    if (!card) return;

    if (!card.querySelector('.glare')) {
      const glare = document.createElement('div');
      glare.className = 'glare';
      card.appendChild(glare);
    }
    if (!card.classList.contains('tilt-card')) card.classList.add('tilt-card');

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.setProperty('--gx', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--gy', `${(y / rect.height) * 100}%`);
  }, { passive: true });

  document.addEventListener('mouseout', e => {
    const card = e.target.closest(cardSelector);
    if (card && (!e.relatedTarget || !card.contains(e.relatedTarget))) {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }
  });

  document.addEventListener('mouseover', e => {
    const card = e.target.closest(cardSelector);
    if (card && (!e.relatedTarget || !card.contains(e.relatedTarget))) {
      PIPOZA.audio.playPop(340, 0.03);
    }
  });
}

/* ---------------- MAGNETIC BUTTON PHYSICS ("JUMPS" - DESKTOP ONLY) ---------------- */
function initMagneticButtons() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const btnSelector = '.btn, .dock-btn, .menu-btn';

  document.addEventListener('mousemove', e => {
    const btn = e.target.closest(btnSelector);
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px) scale(1.03)`;
  }, { passive: true });

  document.addEventListener('mouseout', e => {
    const btn = e.target.closest(btnSelector);
    if (btn && (!e.relatedTarget || !btn.contains(e.relatedTarget))) {
      btn.style.transform = '';
    }
  });

  document.addEventListener('mouseover', e => {
    const btn = e.target.closest(btnSelector);
    if (btn && (!e.relatedTarget || !btn.contains(e.relatedTarget))) {
      PIPOZA.audio.playPop(520, 0.03);
    }
  });

  document.addEventListener('click', e => {
    const btn = e.target.closest(btnSelector);
    if (btn) {
      PIPOZA.audio.playPop(680, 0.05);
    }
  });
}

/* ---------------- CUSTOM CYBER CURSOR (STRICTLY DISABLED ON TOUCH) ---------------- */
function initCustomCursor() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

  let cursorDot = document.querySelector('.custom-cursor');
  let cursorFollower = document.querySelector('.cursor-follower');

  if (!cursorDot) {
    cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor';
    document.body.appendChild(cursorDot);
  }
  if (!cursorFollower) {
    cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    document.body.appendChild(cursorFollower);
  }

  let mouseX = -100, mouseY = -100;
  let followerX = -100, followerY = -100;

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  }, { passive: true });

  function updateFollower() {
    followerX += (mouseX - followerX) * 0.18;
    followerY += (mouseY - followerY) * 0.18;
    cursorFollower.style.left = `${followerX}px`;
    cursorFollower.style.top = `${followerY}px`;
    requestAnimationFrame(updateFollower);
  }
  updateFollower();

  const interactiveTargets = 'a, button, .tilt-card, .type-opt, .chip-opt, .budget-opt, .swatch, input, textarea, select, .vp-btn, .showcase-tab';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactiveTargets)) {
      cursorFollower.classList.add('hovering');
    }
  });

  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactiveTargets)) {
      cursorFollower.classList.remove('hovering');
    }
  });

  document.addEventListener('mousedown', () => cursorFollower.classList.add('clicking'));
  document.addEventListener('mouseup', () => cursorFollower.classList.remove('clicking'));
}

/* ---------------- FLOATING DOCK & THEME CONTROLS ---------------- */
function initFloatingDock() {
  let dock = document.getElementById('floatingDock');
  if (!dock) {
    dock = document.createElement('div');
    dock.id = 'floatingDock';
    dock.className = 'floating-dock';
    document.body.appendChild(dock);
  }

  const isSoundOn = PIPOZA.audio.enabled;
  const currentPal = localStorage.getItem('pipoza-palette') || 'aurora';
  
  // Check if custom colors exist
  const savedCustom = localStorage.getItem('pipoza-custom-palette');
  let currentColors = { c1: '#00d2ff', c2: '#8a2be2', c3: '#ff007f', go: '#00f5a0' };
  if (savedCustom) {
    try {
      currentColors = JSON.parse(savedCustom);
    } catch(e) {}
  }

  if (currentPal === 'custom') {
    PIPOZA.applyCustomPalette(currentColors, false);
  } else {
    document.documentElement.setAttribute('data-palette', currentPal);
  }

  const swatchesHtml = PIPOZA.PALETTES.map(p => `
    <div class="swatch pal-${p.id} ${currentPal === p.id ? 'sel' : ''}" data-pal="${p.id}" title="${p.label}">
      <div class="dot3"></div>
      <span>${p.label.split(' ')[0]}</span>
    </div>`).join('');

  dock.innerHTML = `
    <!-- Theme Palette Modal -->
    <div class="theme-modal glass" id="themeModal">
      <h4>Preset Color Palettes</h4>
      <div class="swatch-row">${swatchesHtml}</div>
      <button type="button" class="btn btn-primary btn-sm btn-wide" id="btnOpenColorStudio" style="margin-top:14px; font-size:12px; padding:10px;">
        🎨 Mix Custom Colors
      </button>
    </div>

    <!-- Custom Color Studio Modal (Color Picker Mixer) -->
    <div class="color-studio-modal glass" id="colorStudioModal">
      <div class="color-studio-header">
        <h4>🎨 Custom Color Studio</h4>
        <button type="button" class="color-studio-close" id="btnCloseColorStudio" aria-label="Close Studio">&times;</button>
      </div>
      <div class="live-palette-preview" id="paletteLivePreview"></div>
      <div class="color-mixer-grid">
        <div class="color-picker-item">
          <label>Primary Glow</label>
          <div class="color-picker-controls">
            <input type="color" id="pickC1" value="${currentColors.c1}">
            <span class="hex-val" id="hexC1">${currentColors.c1}</span>
          </div>
        </div>
        <div class="color-picker-item">
          <label>Secondary</label>
          <div class="color-picker-controls">
            <input type="color" id="pickC2" value="${currentColors.c2}">
            <span class="hex-val" id="hexC2">${currentColors.c2}</span>
          </div>
        </div>
        <div class="color-picker-item">
          <label>Highlight</label>
          <div class="color-picker-controls">
            <input type="color" id="pickC3" value="${currentColors.c3}">
            <span class="hex-val" id="hexC3">${currentColors.c3}</span>
          </div>
        </div>
        <div class="color-picker-item">
          <label>Action CTA</label>
          <div class="color-picker-controls">
            <input type="color" id="pickGo" value="${currentColors.go}">
            <span class="hex-val" id="hexGo">${currentColors.go}</span>
          </div>
        </div>
      </div>
      <div class="studio-actions">
        <div class="studio-btn-row">
          <button type="button" class="btn btn-ghost" id="btnRandomizeColors" title="Shuffle aesthetic combinations">🎲 Shuffle</button>
          <button type="button" class="btn btn-primary" id="btnSaveCustomColors">Save Theme</button>
        </div>
        <button type="button" class="btn btn-ghost btn-sm" id="btnResetTheme" style="font-size:11px; padding:6px;">Reset to Aurora</button>
      </div>
    </div>

    <button class="dock-btn btn-theme" id="btnThemeToggle" aria-label="Change Theme" title="Theme Palette">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 3v18"/><path d="M12 8a4 4 0 0 1 4 4"/></svg>
    </button>

    <button class="dock-btn" id="btnAudioToggle" aria-label="Toggle Audio SFX" title="Toggle Sound FX">
      <svg id="icAudioOn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="${isSoundOn ? '' : 'display:none;'}"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
      <svg id="icAudioOff" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="${isSoundOn ? 'display:none;' : ''}"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
    </button>

    <button class="dock-btn" id="btnEmailDock" aria-label="Email Studio" title="Email Studio">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
    </button>

    <a href="https://wa.me/${PIPOZA.WHATSAPP_NUMBER}" target="_blank" rel="noopener" class="dock-btn btn-wa" aria-label="WhatsApp Us" title="Chat on WhatsApp">
      <span class="dock-pulse-badge"></span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-5.2A8.5 8.5 0 1 1 21 11.5Z"/></svg>
    </a>

    <button class="dock-btn" id="btnScrollTop" aria-label="Scroll to top" title="Back to top" style="display:none;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 15-6-6-6 6"/></svg>
    </button>
  `;

  const btnTheme = document.getElementById('btnThemeToggle');
  const themeModal = document.getElementById('themeModal');
  const colorStudioModal = document.getElementById('colorStudioModal');
  const btnOpenColorStudio = document.getElementById('btnOpenColorStudio');
  const btnCloseColorStudio = document.getElementById('btnCloseColorStudio');
  const btnAudio = document.getElementById('btnAudioToggle');
  const btnEmailDock = document.getElementById('btnEmailDock');
  const btnScrollTop = document.getElementById('btnScrollTop');

  if (btnEmailDock) {
    btnEmailDock.addEventListener('click', () => {
      PIPOZA.openEmailModal('Website Project Inquiry — PipoZa Dev', 'Hi PipoZa Dev,\n\nI would like to discuss building a custom website with your studio.\n\nLooking forward to your response!');
    });
  }

  btnTheme.addEventListener('click', () => {
    themeModal.classList.toggle('open');
    colorStudioModal.classList.remove('open');
    PIPOZA.audio.playPop(480, 0.04);
  });

  PIPOZA.openColorStudio = function() {
    if (themeModal) themeModal.classList.remove('open');
    if (colorStudioModal) {
      colorStudioModal.classList.add('open');
      PIPOZA.audio.playChime();
    }
  };

  if (btnOpenColorStudio) {
    btnOpenColorStudio.addEventListener('click', () => {
      PIPOZA.openColorStudio();
    });
  }

  if (btnCloseColorStudio) {
    btnCloseColorStudio.addEventListener('click', () => {
      colorStudioModal.classList.remove('open');
    });
  }

  document.addEventListener('click', e => {
    if (!dock.contains(e.target) && !e.target.closest('#btnLaunchCustomStudioInWizard')) {
      themeModal.classList.remove('open');
      colorStudioModal.classList.remove('open');
    }
  });

  // Preset swatch handlers
  themeModal.querySelectorAll('.swatch').forEach(sw => {
    sw.addEventListener('click', () => {
      const pal = sw.dataset.pal;
      document.documentElement.setAttribute('data-palette', pal);
      localStorage.setItem('pipoza-palette', pal);
      themeModal.querySelectorAll('.swatch').forEach(s => s.classList.remove('sel'));
      sw.classList.add('sel');
      PIPOZA.audio.playChime();
      PIPOZA.showToast(`Switched to ${sw.getAttribute('title')}`);
    });
  });

  // Custom Color Studio Controls
  const pickC1 = document.getElementById('pickC1');
  const pickC2 = document.getElementById('pickC2');
  const pickC3 = document.getElementById('pickC3');
  const pickGo = document.getElementById('pickGo');
  const hexC1 = document.getElementById('hexC1');
  const hexC2 = document.getElementById('hexC2');
  const hexC3 = document.getElementById('hexC3');
  const hexGo = document.getElementById('hexGo');
  const paletteLivePreview = document.getElementById('paletteLivePreview');

  function updateLiveCustom() {
    const c = {
      c1: pickC1.value,
      c2: pickC2.value,
      c3: pickC3.value,
      go: pickGo.value
    };
    hexC1.textContent = c.c1;
    hexC2.textContent = c.c2;
    hexC3.textContent = c.c3;
    hexGo.textContent = c.go;
    paletteLivePreview.style.background = `linear-gradient(135deg, ${c.c1}, ${c.c2}, ${c.c3})`;
    PIPOZA.applyCustomPalette(c, false);
    window.dispatchEvent(new CustomEvent('pipoza-custom-palette-updated', { detail: c }));
  }

  [pickC1, pickC2, pickC3, pickGo].forEach(input => {
    input.addEventListener('input', updateLiveCustom);
  });

  document.getElementById('btnRandomizeColors').addEventListener('click', () => {
    const random = RANDOM_COMBOS[Math.floor(Math.random() * RANDOM_COMBOS.length)];
    pickC1.value = random.c1;
    pickC2.value = random.c2;
    pickC3.value = random.c3;
    pickGo.value = random.go;
    updateLiveCustom();
    PIPOZA.audio.playChime();
    PIPOZA.showToast(`🎲 Rolled: ${random.name}`);
  });

  document.getElementById('btnSaveCustomColors').addEventListener('click', () => {
    const c = {
      c1: pickC1.value,
      c2: pickC2.value,
      c3: pickC3.value,
      go: pickGo.value
    };
    PIPOZA.applyCustomPalette(c, true);
    window.dispatchEvent(new CustomEvent('pipoza-custom-palette-updated', { detail: c }));
    colorStudioModal.classList.remove('open');
    PIPOZA.audio.playChime();
    PIPOZA.showToast('✓ Custom color palette saved!');
  });

  document.getElementById('btnResetTheme').addEventListener('click', () => {
    document.documentElement.setAttribute('data-palette', 'aurora');
    localStorage.setItem('pipoza-palette', 'aurora');
    colorStudioModal.classList.remove('open');
    PIPOZA.audio.playChime();
    PIPOZA.showToast('Reset to Aurora theme');
  });

  btnAudio.addEventListener('click', () => {
    const on = PIPOZA.audio.toggle();
    document.getElementById('icAudioOn').style.display = on ? 'block' : 'none';
    document.getElementById('icAudioOff').style.display = on ? 'none' : 'block';
  });

  btnScrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    PIPOZA.audio.playPop(600, 0.05);
  });

  window.addEventListener('scroll', () => {
    btnScrollTop.style.display = window.scrollY > 380 ? 'flex' : 'none';
  }, { passive: true });
}

/* ---------------- INTERACTIVE WORKS SHOWCASE MOCKUP ---------------- */
function initShowcaseMockup() {
  const showcaseHost = document.getElementById('worksShowcase');
  if (!showcaseHost) return;

  const projects = [
    {
      id: 'clinic',
      tabLabel: 'Healthcare: Revive Clinic',
      tag: 'Healthcare / Clinic Website',
      title: 'Revive by Radheyshyam Arogya Dham',
      url: 'reviveclinic.s.gy/home',
      desc: 'A modern naturopathic pain-management clinic in Sector 62, Noida needed a high-trust, appointment-first website explaining their non-surgical approach.',
      feats: ['Appointment-first layout', 'Doctor profile card', '1-Tap WhatsApp & Call', 'Free PipoZa hosting'],
      liveUrl: 'https://reviveclinic.s.gy/home',
      screenHtml: `
        <div class="sim-screen sim-clinic">
          <div class="badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7.5-4.6-9.7-9.1C.7 8.3 2.4 4.9 5.8 4.2c2-.4 3.9.5 5 2.1C11.9 4.7 13.8 3.8 15.8 4.2c3.4.7 5.1 4.1 3.5 7.7C17.1 16.4 12 21 12 21z"/></svg> Pain Therapy · Noida</div>
          <h3>Revive Clinic & Naturopathy</h3>
          <p class="sub">Holistic healing without medicine or surgery</p>
          <div class="clinic-cards">
            <div class="clinic-box">
              <h4>Acupressure</h4>
              <p>Targeted trigger-point pain therapy</p>
            </div>
            <div class="clinic-box">
              <h4>Therapy Hub</h4>
              <p>Doctor consultations & care</p>
            </div>
          </div>
          <div class="cta-row">
            <span class="btn btn-primary btn-sm" style="font-size:11px; padding:6px 14px; pointer-events:none; cursor:default;">Call to Book</span>
            <span class="btn btn-ghost btn-sm" style="font-size:11px; padding:6px 14px; pointer-events:none; cursor:default;">WhatsApp Us</span>
          </div>
        </div>
      `
    },
    {
      id: 'tech',
      tabLabel: 'SaaS: AeroProtocol Cloud',
      tag: 'Tech & Cloud Platform',
      title: 'AeroProtocol Next-Gen Cloud',
      url: 'aeroprotocol.dev/preview',
      desc: 'High-throughput cloud orchestration platform with real-time performance telemetry, modern documentation, and API key management.',
      feats: ['Dark mode analytics', 'Interactive code tabs', 'Speed optimized 99/100', 'Cloudflare deployment'],
      liveUrl: 'start.html#step-1',
      screenHtml: `
        <div class="sim-screen sim-saas">
          <div class="badge" style="color:#00d2ff; border-color:rgba(0,210,255,0.3); background:rgba(0,210,255,0.1);"><span style="width:6px; height:6px; border-radius:50%; background:#00d2ff; display:inline-block; margin-right:4px;"></span> Global Uptime 99.99%</div>
          <h3 style="color:#fff;">Next-Gen Cloud Mesh</h3>
          <p class="sub" style="color:#9da4c0; font-size:12px;">Ultra low-latency infrastructure built for high concurrency</p>
          <div class="metric-strip">
            <div class="m-box"><div class="m-num">1.2ms</div><div class="m-label">Latency</div></div>
            <div class="m-box"><div class="m-num">99.9%</div><div class="m-label">Uptime</div></div>
            <div class="m-box"><div class="m-num">120+</div><div class="m-label">Edges</div></div>
          </div>
          <div class="cta-row" style="margin-top:auto;">
            <span class="btn btn-grad btn-sm" style="font-size:11px; padding:6px 14px;">Deploy Now</span>
          </div>
        </div>
      `
    },
    {
      id: 'ecom',
      tabLabel: 'D2C: Luxe Botanics',
      tag: 'E-Commerce Storefront',
      title: 'Luxe Botanics Organic Lab',
      url: 'luxebotanics.store/shop',
      desc: 'Artisanal skincare brand featuring visual product catalogs, interactive cart drawer, and instant checkout flow.',
      feats: ['Custom product slider', 'Instagram shop feed', 'Mobile-first cart', 'Zero lag transitions'],
      liveUrl: 'start.html#step-1',
      screenHtml: `
        <div class="sim-screen sim-ecom">
          <div class="badge" style="color:#ff007f; border-color:rgba(255,0,127,0.3); background:rgba(255,0,127,0.1);">New Summer Drop</div>
          <h3 style="color:#fff;">Pure Plant Essence</h3>
          <p class="sub" style="color:#dfb0cb; font-size:12px;">Sustainably harvested botanical elixirs</p>
          <div class="product-grid">
            <div class="p-card">
              <div class="p-img"><span style="font-size:11px; color:#c796b4;">Night Elixir</span></div>
              <div style="font-size:11px; font-weight:700;">Dew Radiance · ₹1,850</div>
            </div>
            <div class="p-card">
              <div class="p-img"><span style="font-size:11px; color:#c796b4;">Day Mist</span></div>
              <div style="font-size:11px; font-weight:700;">Petal Mist · ₹1,200</div>
            </div>
          </div>
        </div>
      `
    }
  ];

  let currentProject = projects[0];
  let currentMode = window.innerWidth < 640 ? 'mobile' : 'desktop';

  function render() {
    showcaseHost.innerHTML = `
      <div class="showcase-nav-tabs">
        ${projects.map(p => `
          <button class="showcase-tab ${p.id === currentProject.id ? 'active' : ''}" data-id="${p.id}">
            ${p.tabLabel}
          </button>
        `).join('')}
      </div>

      <div class="showcase-container">
        <div class="browser-stage">
          <div class="browser-toolbar-controls">
            <span class="mono" style="font-size:12px; color:var(--text-dim); display:flex; align-items:center; gap:6px;">
              <span style="width:7px; height:7px; border-radius:50%; background:var(--go); display:inline-block;"></span>
              Interactive Live Preview
            </span>
            <div class="viewport-toggle">
              <button class="vp-btn ${currentMode === 'desktop' ? 'active' : ''}" data-mode="desktop">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                Desktop
              </button>
              <button class="vp-btn ${currentMode === 'mobile' ? 'active' : ''}" data-mode="mobile">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                Mobile
              </button>
            </div>
          </div>

          <div class="mockup-window ${currentMode === 'mobile' ? 'mode-mobile' : ''}">
            <div class="mockup-titlebar">
              <div class="traffic-lights">
                <span class="tl-red"></span><span class="tl-yellow"></span><span class="tl-green"></span>
              </div>
              <div class="mockup-url">
                <svg class="lock-ic" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <span>${currentProject.url}</span>
              </div>
            </div>
            <div class="mockup-body" id="mockupBody">
              ${currentProject.screenHtml}
            </div>
          </div>
        </div>

        <div class="work-info glass" style="padding:32px 26px; border-radius:var(--radius-lg);">
          <div class="tag" style="color:var(--go); font-size:12px; font-weight:700; text-transform:uppercase; margin-bottom:8px;">${currentProject.tag}</div>
          <h3 style="font-size:24px; margin-bottom:12px;">${currentProject.title}</h3>
          <p style="color:var(--text-dim); font-size:14.5px; line-height:1.65; margin-bottom:20px;">${currentProject.desc}</p>
          <div class="feats" style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:24px;">
            ${currentProject.feats.map(f => `<span style="font-size:12px; color:var(--text); background:rgba(255,255,255,0.05); border:1px solid var(--border); padding:5px 12px; border-radius:99px;">${f}</span>`).join('')}
          </div>
          <div style="display:flex; gap:12px; flex-wrap:wrap;">
            <a href="${currentProject.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Explore Project →</a>
            <a href="start.html" class="btn btn-ghost btn-sm">Build One Like This</a>
          </div>
        </div>
      </div>
    `;

    showcaseHost.querySelectorAll('.showcase-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        currentProject = projects.find(p => p.id === btn.dataset.id);
        PIPOZA.audio.playPop(540, 0.04);
        render();
      });
    });

    showcaseHost.querySelectorAll('.vp-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentMode = btn.dataset.mode;
        PIPOZA.audio.playPop(420, 0.03);
        render();
      });
    });
  }

  render();
}

/* ---------------- INSTANT COST & TIMELINE ESTIMATOR (WITH CURRENCY SWITCHER) ---------------- */
function initCostEstimator() {
  const calcHost = document.getElementById('costEstimator');
  if (!calcHost) return;

  const CURRENCIES = {
    INR: { symbol: '₹', rate: 1, label: 'INR' },
    USD: { symbol: '$', rate: 0.012, label: 'USD' },
    EUR: { symbol: '€', rate: 0.011, label: 'EUR' },
    GBP: { symbol: '£', rate: 0.0095, label: 'GBP' }
  };
  let currentCurr = localStorage.getItem('pipoza-curr') || 'INR';

  const state = {
    type: 'tech',
    pages: '1-3',
    cms: false,
    domain: false,
    animations: true,
    speed: true
  };

  const prices = {
    type: { tech: 12000, medical: 14000, gaming: 15000, ecom: 18000, biz: 13000, portfolio: 9000, other: 12000 },
    pages: { '1': 0, '1-3': 2000, '4-7': 5000, '8+': 9000 },
    cms: 3500,
    domain: 999,
    animations: 1500,
    speed: 0
  };

  function compute() {
    let base = (prices.type[state.type] || 12000) + prices.pages[state.pages];
    if (state.cms) base += prices.cms;
    if (state.domain) base += prices.domain;
    if (state.animations) base += prices.animations;

    let days = "4–5 working days";
    if (state.pages === '8+' || state.type === 'ecom') days = "6–8 working days";
    if (state.pages === '1') days = "3–4 working days";

    return { min: base, max: Math.round(base * 1.25), days };
  }

  function formatPrice(valInINR) {
    const cur = CURRENCIES[currentCurr] || CURRENCIES.INR;
    const converted = Math.round(valInINR * cur.rate);
    return `${cur.symbol}${converted.toLocaleString('en-US')}`;
  }

  function render() {
    const est = compute();
    calcHost.innerHTML = `
      <div class="calc-card glass">
        <div class="calc-grid">
          <div>
            <div class="calc-option-group">
              <label>1. Website Category</label>
              <div class="calc-pills">
                <span class="calc-pill ${state.type==='tech'?'active':''}" data-t="tech">Tech & SaaS</span>
                <span class="calc-pill ${state.type==='medical'?'active':''}" data-t="medical">Clinic & Doctor</span>
                <span class="calc-pill ${state.type==='gaming'?'active':''}" data-t="gaming">Gaming & Cyber</span>
                <span class="calc-pill ${state.type==='ecom'?'active':''}" data-t="ecom">E-Commerce</span>
                <span class="calc-pill ${state.type==='biz'?'active':''}" data-t="biz">Business</span>
                <span class="calc-pill ${state.type==='portfolio'?'active':''}" data-t="portfolio">Portfolio</span>
              </div>
            </div>

            <div class="calc-option-group">
              <label>2. Number of Pages</label>
              <div class="calc-pills">
                <span class="calc-pill ${state.pages==='1'?'active':''}" data-p="1">Landing (1 Page)</span>
                <span class="calc-pill ${state.pages==='1-3'?'active':''}" data-p="1-3">Essential (1–3 Pages)</span>
                <span class="calc-pill ${state.pages==='4-7'?'active':''}" data-p="4-7">Complete (4–7 Pages)</span>
                <span class="calc-pill ${state.pages==='8+'?'active':''}" data-p="8+">Enterprise (8+ Pages)</span>
              </div>
            </div>

            <div class="calc-option-group" style="margin-bottom:0;">
              <label>3. Add-Ons & Enhancements</label>
              <div class="calc-addons">
                <div class="addon-toggle ${state.cms?'active':''}" data-addon="cms">
                  <input type="checkbox" ${state.cms?'checked':''}>
                  <span>Admin CMS Editor</span>
                </div>
                <div class="addon-toggle ${state.domain?'active':''}" data-addon="domain">
                  <input type="checkbox" ${state.domain?'checked':''}>
                  <span>Custom .com Domain (+at cost)</span>
                </div>
                <div class="addon-toggle ${state.animations?'active':''}" data-addon="animations">
                  <input type="checkbox" ${state.animations?'checked':''}>
                  <span>Deluxe 3D Micro-Animations</span>
                </div>
                <div class="addon-toggle active" style="pointer-events:none; opacity:0.9;">
                  <input type="checkbox" checked disabled>
                  <span>Free Lifetime Cloud Hosting</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Result Column -->
          <div class="calc-result-box">
            <div class="currency-switcher">
              <button type="button" class="curr-btn ${currentCurr==='INR'?'active':''}" data-curr="INR">₹ INR</button>
              <button type="button" class="curr-btn ${currentCurr==='USD'?'active':''}" data-curr="USD">$ USD</button>
              <button type="button" class="curr-btn ${currentCurr==='EUR'?'active':''}" data-curr="EUR">€ EUR</button>
              <button type="button" class="curr-btn ${currentCurr==='GBP'?'active':''}" data-curr="GBP">£ GBP</button>
            </div>

            <div class="est-title">Estimated Investment</div>
            <div class="est-price">${formatPrice(est.min)} – ${formatPrice(est.max)}</div>
            <div class="est-timeline">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Ready in <b>${est.days}</b></span>
            </div>

            <div class="est-includes">
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> 100% Custom Mobile-First Code</span>
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Free Lifetime Cloud Hosting</span>
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> WhatsApp & Email Inquiry Bridge</span>
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Direct Call & Chat Developer Support</span>
            </div>

            <a href="start.html" class="btn btn-primary btn-wide">Lock in This Price →</a>
          </div>
        </div>
      </div>
    `;

    calcHost.querySelectorAll('[data-curr]').forEach(btn => {
      btn.addEventListener('click', () => {
        currentCurr = btn.dataset.curr;
        localStorage.setItem('pipoza-curr', currentCurr);
        PIPOZA.audio.playPop(520, 0.03);
        render();
      });
    });

    calcHost.querySelectorAll('[data-t]').forEach(el => {
      el.addEventListener('click', () => {
        state.type = el.dataset.t;
        PIPOZA.audio.playPop(480, 0.03);
        render();
      });
    });

    calcHost.querySelectorAll('[data-p]').forEach(el => {
      el.addEventListener('click', () => {
        state.pages = el.dataset.p;
        PIPOZA.audio.playPop(520, 0.03);
        render();
      });
    });

    calcHost.querySelectorAll('[data-addon]').forEach(el => {
      el.addEventListener('click', () => {
        const key = el.dataset.addon;
        state[key] = !state[key];
        PIPOZA.audio.playPop(400, 0.03);
        render();
      });
    });
  }

  render();
}

/* ---------------- WORD ROTATOR (HERO) ---------------- */
function initRotator() {
  const el = document.getElementById('rotator');
  if (!el) return;
  const words = ['tech startups', 'medical clinics', 'gaming brands', 'online stores', 'local businesses', 'luxury portfolios'];
  let i = 0;
  setInterval(() => {
    i = (i + 1) % words.length;
    el.style.opacity = 0;
    el.style.transform = 'translateY(8px)';
    setTimeout(() => {
      el.innerHTML = `<span>${words[i]}</span>`;
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 280);
  }, 2600);
  el.style.transition = 'all 0.28s var(--ease-spring)';
}

/* ---------------- STAT COUNTER WITH EASING ---------------- */
function initStats() {
  const stats = document.querySelectorAll('.stat[data-count]');
  if (!stats.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStat(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  stats.forEach(s => observer.observe(s));
}

function animateStat(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const numEl = el.querySelector('.num');
  const dur = 1400;
  const start = performance.now();

  function tick(now) {
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 4);
    const val = target * eased;
    numEl.textContent = (target % 1 === 0 ? Math.round(val) : val.toFixed(1)) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ---------------- FAQ ACCORDION & LIVE SEARCH ---------------- */
function initFaq() {
  const searchInput = document.getElementById('faqSearch');
  const items = document.querySelectorAll('.faq-item');

  if (searchInput && items.length) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase().trim();
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        const matches = text.includes(q);
        item.style.display = matches ? 'block' : 'none';
        if (!matches) {
          item.classList.remove('open');
          const a = item.querySelector('.faq-a');
          if (a) a.style.maxHeight = null;
        }
      });
    });
  }

  items.forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if (!q || !a) return;

    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      item.closest('.faq').querySelectorAll('.faq-item').forEach(other => {
        other.classList.remove('open');
        const otherA = other.querySelector('.faq-a');
        if (otherA) otherA.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
        PIPOZA.audio.playPop(520, 0.04);
      }
    });
  });
}

/* ---------------- MOBILE NAVIGATION (SMOOTH DRAWER + SCROLL LOCK) ---------------- */
function initMobileNav() {
  const btn = document.getElementById('menuBtn');
  const panel = document.getElementById('mobileNav');
  if (!btn || !panel) return;

  btn.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    PIPOZA.audio.playPop(isOpen ? 600 : 400, 0.04);
  });

  panel.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      panel.classList.remove('open');
      btn.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', e => {
    if (panel.classList.contains('open') && !panel.contains(e.target) && !btn.contains(e.target)) {
      panel.classList.remove('open');
      btn.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ---------------- SCROLL REVEAL OBSERVER ---------------- */
PIPOZA.initReveal = function() {
  const elements = document.querySelectorAll('.reveal:not(.in)');
  if (!elements.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
};

/* ---------------- TOP SCROLL PROGRESS BAR ---------------- */
function initScrollProgress() {
  let bar = document.querySelector('.scroll-progress');
  if (!bar) {
    bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.appendChild(bar);
  }

  const update = () => {
    const h = document.documentElement;
    const scrolled = h.scrollTop / ((h.scrollHeight - h.clientHeight) || 1);
    bar.style.width = `${Math.min(100, Math.max(0, scrolled * 100))}%`;
  };

  document.addEventListener('scroll', update, { passive: true });
  update();
}

/* ---------------- TOAST MESSAGES ---------------- */
PIPOZA.showToast = function(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.id = 'toast';
    toast.innerHTML = '<span class="dot"></span><span id="toastMsg"></span>';
    document.body.appendChild(toast);
  }
  toast.querySelector('#toastMsg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2800);
};

/* ---------------- ACTIVE NAV HIGHLIGHT ---------------- */
function markActiveNav() {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(a => {
    if (a.getAttribute('data-nav') === current) a.classList.add('active');
  });
}

/* ---------------- SMART EMAIL MODAL (100% RELIABLE EMAIL LAUNCHER) ---------------- */
PIPOZA.openEmailModal = function(subject = 'Website Project Inquiry — PipoZa Dev', body = '') {
  let modal = document.getElementById('emailModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'emailModal';
    modal.className = 'email-modal-backdrop';
    modal.innerHTML = `
      <div class="email-modal-card glass">
        <div class="email-modal-header">
          <div class="email-modal-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            <span>Send Email to Studio</span>
          </div>
          <button class="email-modal-close" id="emailModalClose" aria-label="Close">&times;</button>
        </div>
        <div class="email-modal-body">
          <p class="email-modal-desc">Select your preferred email service to reach <b>${PIPOZA.CONTACT_EMAIL}</b>:</p>
          
          <div class="email-options-grid">
            <a id="emailOptionGmail" target="_blank" rel="noopener" class="email-opt-btn btn-opt-gmail">
              <div class="email-opt-icon">
                <svg viewBox="0 0 24 24" fill="#ea4335"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              <div class="email-opt-text">
                <strong>Open in Gmail (Web)</strong>
                <small>Recommended · Opens pre-filled compose in browser</small>
              </div>
            </a>

            <a id="emailOptionOutlook" target="_blank" rel="noopener" class="email-opt-btn btn-opt-outlook">
              <div class="email-opt-icon">
                <svg viewBox="0 0 24 24" fill="#0078d4"><path d="M21 4H7a2 2 0 0 0-2 2v2.5L2 10.5v6.2L5 18v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM5 15.5l-2-1.3v-2.4l2 1.3v2.4zm16 4.5H7v-2h9a2 2 0 0 0 2-2V9.4l3 1.9V20z"/></svg>
              </div>
              <div class="email-opt-text">
                <strong>Open in Outlook / Hotmail</strong>
                <small>Opens compose in web browser</small>
              </div>
            </a>

            <a id="emailOptionDefault" class="email-opt-btn btn-opt-default">
              <div class="email-opt-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
              </div>
              <div class="email-opt-text">
                <strong>Open Default Mail App</strong>
                <small>Apple Mail, Windows Mail, Thunderbird</small>
              </div>
            </a>
          </div>

          <div class="email-modal-copy-box">
            <div class="copy-box-label">Or copy address directly:</div>
            <div class="copy-input-row">
              <input type="text" value="${PIPOZA.CONTACT_EMAIL}" readonly id="modalCopyEmailInput">
              <button class="btn btn-primary btn-sm" id="btnModalCopyEmail">Copy Email</button>
              <button class="btn btn-ghost btn-sm" id="btnModalCopyBody">Copy Message</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('#emailModalClose').addEventListener('click', () => {
      modal.classList.remove('open');
      PIPOZA.audio.playPop(420, 0.03);
    });

    modal.addEventListener('click', e => {
      if (e.target === modal) modal.classList.remove('open');
    });

    modal.querySelector('#btnModalCopyEmail').addEventListener('click', () => {
      navigator.clipboard.writeText(PIPOZA.CONTACT_EMAIL);
      PIPOZA.showToast(`✓ Email address copied: ${PIPOZA.CONTACT_EMAIL}`);
      PIPOZA.audio.playChime();
    });
  }

  const encSubject = encodeURIComponent(subject);
  const encBody = encodeURIComponent(body);

  const gmailLink = modal.querySelector('#emailOptionGmail');
  if (gmailLink) {
    gmailLink.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${PIPOZA.CONTACT_EMAIL}&su=${encSubject}&body=${encBody}`;
    gmailLink.onclick = () => {
      PIPOZA.showToast('Launching Gmail in new tab…');
      PIPOZA.audio.playPop(650, 0.05);
      modal.classList.remove('open');
    };
  }

  const outlookLink = modal.querySelector('#emailOptionOutlook');
  if (outlookLink) {
    outlookLink.href = `https://outlook.live.com/mail/0/deeplink/compose?to=${PIPOZA.CONTACT_EMAIL}&subject=${encSubject}&body=${encBody}`;
    outlookLink.onclick = () => {
      PIPOZA.showToast('Launching Outlook Web in new tab…');
      PIPOZA.audio.playPop(650, 0.05);
      modal.classList.remove('open');
    };
  }

  const defaultLink = modal.querySelector('#emailOptionDefault');
  if (defaultLink) {
    defaultLink.href = `mailto:${PIPOZA.CONTACT_EMAIL}?subject=${encSubject}&body=${encBody}`;
    defaultLink.onclick = () => {
      PIPOZA.showToast('Opening default mail client…');
      PIPOZA.audio.playPop(650, 0.05);
      modal.classList.remove('open');
    };
  }

  const copyBodyBtn = modal.querySelector('#btnModalCopyBody');
  if (copyBodyBtn) {
    copyBodyBtn.onclick = () => {
      const fullText = `To: ${PIPOZA.CONTACT_EMAIL}\nSubject: ${subject}\n\n${body}`;
      navigator.clipboard.writeText(body ? fullText : PIPOZA.CONTACT_EMAIL);
      PIPOZA.showToast('✓ Full email text copied to clipboard!');
      PIPOZA.audio.playChime();
    };
  }

  modal.classList.add('open');
  PIPOZA.audio.playPop(550, 0.04);
};

/* ---------------- DIRECT CONTACT LINK WIRING ---------------- */
function wireDirectLinks() {
  document.querySelectorAll('[data-email-link]').forEach(a => {
    a.href = `mailto:${PIPOZA.CONTACT_EMAIL}`;
    a.addEventListener('click', e => {
      e.preventDefault();
      PIPOZA.openEmailModal('Website Project Inquiry — PipoZa Dev', 'Hi PipoZa Dev,\n\nI would like to discuss building a custom website with your studio.\n\nLooking forward to your response!');
    });
  });
  document.querySelectorAll('[data-wa-link]').forEach(a => a.href = `https://wa.me/${PIPOZA.WHATSAPP_NUMBER}`);
}

/* ---------------- INJECT SVG GRADIENT DEFS ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', `
    <svg width="0" height="0" style="position:absolute; pointer-events:none;">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="var(--c1)"/>
          <stop offset="100%" stop-color="var(--c2)"/>
        </linearGradient>
        <linearGradient id="circGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="var(--c1)"/>
          <stop offset="60%" stop-color="var(--c2)"/>
          <stop offset="100%" stop-color="var(--go)"/>
        </linearGradient>
      </defs>
    </svg>
  `);

  initCanvasParticles();
  initTiltCards();
  initMagneticButtons();
  initCustomCursor();
  initFloatingDock();
  initShowcaseMockup();
  initCostEstimator();
  initRotator();
  initStats();
  initFaq();
  initMobileNav();
  PIPOZA.initReveal();
  initScrollProgress();
  markActiveNav();
  wireDirectLinks();
});
