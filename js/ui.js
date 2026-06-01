/* ======================== UI & NAVIGATION ======================== */

export function launchApp(appId) {
  const dashboard = document.getElementById('dashboard');
  const appView   = document.getElementById('app-' + appId);
  if (!appView) return;

  if (navigator.vibrate) navigator.vibrate(8);
  
  // Deactivate and reset z-index for all apps
  document.querySelectorAll('.app-view').forEach(v => {
    v.classList.remove('active');
    v.style.zIndex = "1000";
  });

  // Set current app to top
  appView.style.zIndex = "1001";
  dashboard.classList.add('exiting');

  requestAnimationFrame(() => {
    appView.classList.add('active');
    appView.scrollTop = 0;
    const body = appView.querySelector('.app-body');
    if (body) body.scrollTop = 0;
  });
}

export function goHome() {
  const dashboard = document.getElementById('dashboard');
  if (navigator.vibrate) navigator.vibrate(6);
  document.querySelectorAll('.app-view').forEach(v => v.classList.remove('active'));
  dashboard.classList.remove('exiting');
}

export function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  const date = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  const el = document.getElementById('status-time');
  const de = document.getElementById('status-date');
  if (el) el.textContent = time;
  if (de) de.textContent = date;
}

export function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme  = localStorage.getItem('theme') || 'dark';

  if (savedTheme === 'light') applyLight();

  themeToggle?.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-mode');
    if (isLight) { applyDark(); localStorage.setItem('theme', 'dark'); }
    else          { applyLight(); localStorage.setItem('theme', 'light'); }
  });
}

function applyLight() {
  document.body.classList.add('light-mode');
  document.querySelector('.sun-icon')?.classList.remove('hidden');
  document.querySelector('.moon-icon')?.classList.add('hidden');
}

function applyDark() {
  document.body.classList.remove('light-mode');
  document.querySelector('.sun-icon')?.classList.add('hidden');
  document.querySelector('.moon-icon')?.classList.remove('hidden');
}

export function openModal(url, title = 'Viewer') {
  const modal = document.getElementById('modal-overlay');
  const iframe = document.getElementById('modal-iframe');
  const titleEl = document.getElementById('modal-title');
  if (!modal || !iframe) return;

  // Add fallback link in case of iframe blocking
  const fallbackId = 'modal-fallback-link';
  let fallback = document.getElementById(fallbackId);
  if (!fallback) {
    fallback = document.createElement('a');
    fallback.id = fallbackId;
    fallback.target = '_blank';
    fallback.className = 'modal-fallback-btn';
    fallback.textContent = 'Open in New Tab ↗';
    document.querySelector('.modal-header').insertBefore(fallback, document.getElementById('modal-close'));
  }
  fallback.href = url.replace('/preview', '/view');

  iframe.src = url;
  if (titleEl) titleEl.textContent = title;
  modal.classList.remove('hidden');
}

export function closeModal() {
  const modal = document.getElementById('modal-overlay');
  const iframe = document.getElementById('modal-iframe');
  if (!modal || !iframe) return;

  modal.classList.add('hidden');
  iframe.src = 'about:blank';
}

export function initContactForm() {
  document.body.addEventListener('submit', async e => {
    const form = e.target.closest('#email-form');
    if (!form) return;
    
    e.preventDefault();
    const success = document.getElementById('success-message');
    const error   = document.getElementById('error-message');
    const btn     = form.querySelector('button[type="submit"]');
    
    if (btn) btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        form.reset();
        success?.classList.remove('hidden');
        error?.classList.add('hidden');
        setTimeout(() => success?.classList.add('hidden'), 5000);
      } else throw new Error();
    } catch {
      error?.classList.remove('hidden');
      success?.classList.add('hidden');
      setTimeout(() => error?.classList.add('hidden'), 5000);
    } finally {
      if (btn) btn.disabled = false;
    }
  });
}
