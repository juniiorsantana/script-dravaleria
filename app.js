import { scriptsData } from './data.js';

// ── Auth ──────────────────────────────────────────────────────────────────────
const VALID_USER = 'dravaleriacabral';
const VALID_PASS = 'script2026';
const SESSION_KEY = 'dvc_auth';

function checkAuth() {
  return sessionStorage.getItem(SESSION_KEY) === 'ok';
}

function setupLogin() {
  const overlay = document.getElementById('loginOverlay');
  const form = document.getElementById('loginForm');
  const errorEl = document.getElementById('loginError');
  const userInput = document.getElementById('loginUser');
  const passInput = document.getElementById('loginPass');
  const toggleBtn = document.getElementById('togglePassword');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const type = passInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passInput.setAttribute('type', type);
      toggleBtn.classList.toggle('active', type === 'text');
    });
  }

  // Already logged in this session → hide overlay immediately
  if (checkAuth()) {
    overlay.style.display = 'none';
    return;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    errorEl.textContent = '';
    userInput.classList.remove('input-error');
    passInput.classList.remove('input-error');

    const u = userInput.value.trim();
    const p = passInput.value;

    if (u === VALID_USER && p === VALID_PASS) {
      sessionStorage.setItem(SESSION_KEY, 'ok');
      overlay.classList.add('hidden');
      // Remove from DOM after animation
      overlay.addEventListener('animationend', () => overlay.style.display = 'none', { once: true });
    } else {
      errorEl.textContent = 'Usuário ou senha incorretos.';
      userInput.classList.add('input-error');
      passInput.classList.add('input-error');
      passInput.value = '';
      passInput.focus();
    }
  });
}

// ── App ───────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setupLogin();


  const navContainer = document.getElementById('mainNav');
  const mainContainer = document.getElementById('mainContent');
  const navCounter = document.getElementById('navCounter');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentTabIndex = 0;

  // Render Navigation Tabs
  function renderNav() {
    navContainer.innerHTML = scriptsData.map((script, index) => `
      <button 
        class="tab-btn ${index === 0 ? 'active' : ''}" 
        data-index="${index}"
        role="tab"
        aria-selected="${index === 0}"
        aria-controls="panel-${index}"
        id="tab-${index}"
      >
        ${script.number} · ${script.label.split('·')[1].trim()}
      </button>
    `).join('');

    // Attach events to newly created tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.getAttribute('data-index'));
        showSection(index);
      });
    });
  }

  // Render Section Content
  function renderSection(index) {
    const script = scriptsData[index];

    // Build scenarios (conversations)
    const scenariosHTML = script.scenarios.map(scenario => {
      const bubbles = scenario.conversations.map(msg => {
        const isClinic = msg.speaker === 'clinic';
        // Strip HTML tags to get plain text for clipboard
        const plainText = msg.text.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '');
        const copyId = `bubble-${Math.random().toString(36).slice(2, 9)}`;
        const copyBtn = isClinic ? `
          <button
            class="bubble-copy-btn"
            data-plain-text="${encodeURIComponent(plainText)}"
            aria-label="Copiar mensagem"
            title="Copiar mensagem"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span class="bubble-copy-label">Copiar</span>
          </button>
        ` : '';

        return `
        <div class="bubble-row ${msg.speaker}">
          ${msg.speaker === 'patient' ? `<div class="bubble-avatar">${msg.avatar}</div>` : ''}
          <div class="bubble-wrapper">
            <p class="bubble-label">${msg.label}</p>
            <div class="bubble">${msg.text}</div>
            ${copyBtn}
          </div>
          ${msg.speaker === 'clinic' ? `<div class="bubble-avatar">${msg.avatar}</div>` : ''}
        </div>
      `;
      }).join('');

      return `
        <div class="script-divider"><span>${scenario.scenarioTitle}</span></div>
        <div class="conversation">
          ${bubbles}
        </div>
      `;
    }).join('');

    // Build tips
    const tipsHTML = script.tips ? script.tips.map(tip => `
      <div class="tip-box">
        <span class="tip-icon">✦</span>
        <p>${tip.text}</p>
      </div>
    `).join('') : '';

    // Build the full section
    const sectionHTML = `
      <div class="script-section active" id="panel-${index}" role="tabpanel" aria-labelledby="tab-${index}">
        <div class="section-header">
          <div class="section-number">${script.number}</div>
          <div class="section-meta">
            <p class="section-label">${script.label}</p>
            <h2 class="section-title">${script.title}</h2>
            <p class="section-desc">${script.desc}</p>
          </div>
        </div>

        <div class="rule-pill">
          <div class="rule-dot"></div>
          ${script.rule}
        </div>

        ${script.alert ? `
          <div class="alert-box">
            <strong>${script.alert.split('—')[0]}—</strong> ${script.alert.split('—')[1]}
          </div>
        ` : ''}

        ${scenariosHTML}

        ${tipsHTML}
      </div>
    `;

    mainContainer.innerHTML = sectionHTML;

    // Attach copy events to individual bubble buttons
    document.querySelectorAll('.bubble-copy-btn').forEach(btn => {
      btn.addEventListener('click', handleBubbleCopy);
    });
  }

  // Handle Tab Switching
  function showSection(index) {
    // Update nav logic
    document.querySelectorAll('.tab-btn').forEach((btn, i) => {
      const isActive = i === index;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive);

      // Keep selected tab in view on mobile
      if (isActive) {
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    // Render content
    renderSection(index);
    currentTabIndex = index;

    // Update Bottom Navigation
    updateBottomNav();

    // Scroll top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Bottom Navigation Logic
  function updateBottomNav() {
    navCounter.innerHTML = `<span>${String(currentTabIndex + 1).padStart(2, '0')}</span> / 05`;

    // Prev Button
    if (currentTabIndex === 0) {
      prevBtn.disabled = true;
      prevBtn.textContent = '← Anterior';
    } else {
      prevBtn.disabled = false;
      prevBtn.textContent = '← Anterior';
    }

    // Next Button
    if (currentTabIndex === scriptsData.length - 1) {
      nextBtn.disabled = true;
      nextBtn.textContent = 'Concluído ✦';
    } else {
      nextBtn.disabled = false;
      nextBtn.textContent = 'Próximo →';
    }
  }

  // Copy Functionality — Individual Bubble Button
  function handleBubbleCopy(e) {
    const btn = e.currentTarget;
    const encoded = btn.getAttribute('data-plain-text');
    const text = decodeURIComponent(encoded);
    const label = btn.querySelector('.bubble-copy-label');

    navigator.clipboard.writeText(text).then(() => {
      btn.classList.add('copied');
      label.textContent = 'Copiado!';

      // SVG swap to checkmark
      btn.querySelector('svg').innerHTML = `
        <polyline points="20 6 9 17 4 12" stroke-linecap="round" stroke-linejoin="round"></polyline>
      `;

      setTimeout(() => {
        btn.classList.remove('copied');
        label.textContent = 'Copiar';
        btn.querySelector('svg').innerHTML = `
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        `;
      }, 2200);
    });
  }

  // Bottom Nav Events
  prevBtn.addEventListener('click', () => {
    if (currentTabIndex > 0) showSection(currentTabIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    if (currentTabIndex < scriptsData.length - 1) showSection(currentTabIndex + 1);
  });

  // Init
  renderNav();
  showSection(0);
});
