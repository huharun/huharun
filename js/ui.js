import { portfolioData } from './data.js';

/* ======================== UI & NAVIGATION ======================== */

export function launchApp(appId) {
  const dashboard = document.getElementById('dashboard');
  const appView   = document.getElementById('app-' + appId);
  if (!appView) return;

  if (navigator.vibrate) navigator.vibrate(8);
  
  // Deactivate all apps
  document.querySelectorAll('.app-view').forEach(v => {
    v.classList.remove('active');
  });

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

  let embedUrl = url;
  let viewUrl = url;
  if (url.includes('drive.google.com')) {
    if (url.endsWith('/view')) {
      embedUrl = url.replace('/view', '/preview');
    } else if (url.endsWith('/preview')) {
      viewUrl = url.replace('/preview', '/view');
    }
  }
  fallback.href = viewUrl;
  iframe.src = embedUrl;

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
    
    const chatContainer = form.querySelector('.imessage-native-chat');
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const sendBtn = form.querySelector('.imessage-native-send');
    
    if (!nameInput || !emailInput || !messageInput || !chatContainer) return;
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    
    if (!name || !email || !message) return;
    
    // 1. Append Outgoing Bubble
    const userBubble = document.createElement('div');
    userBubble.className = 'imessage-native-bubble-out animate-bubble';
    userBubble.innerHTML = `
      <div class="bubble-inner">${message.replace(/\n/g, '<br>')}</div>
      <div class="bubble-meta">Sent</div>
    `;
    chatContainer.appendChild(userBubble);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    // Disable inputs during transmission
    messageInput.value = '';
    messageInput.style.height = 'auto';
    messageInput.disabled = true;
    if (sendBtn) sendBtn.disabled = true;
    
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      
      if (res.ok) {
        // Keep name/email filled so they don't have to re-enter them for next messages
        messageInput.disabled = false;
        if (sendBtn) sendBtn.disabled = false;
        
        // 2. Append Typing Indicator
        const typingBubble = document.createElement('div');
        typingBubble.className = 'imessage-native-bubble-in imessage-typing-bubble';
        typingBubble.innerHTML = `
          <div class="bubble-inner typing-dots">
            <span></span><span></span><span></span>
          </div>
          <div class="bubble-meta">Arun is typing...</div>
        `;
        chatContainer.appendChild(typingBubble);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        
        // 3. Remove typing and append Auto-Reply
        setTimeout(() => {
          typingBubble.remove();
          const replyBubble = document.createElement('div');
          replyBubble.className = 'imessage-native-bubble-in animate-bubble';
          replyBubble.innerHTML = `
            <div class="bubble-inner">Thanks for reaching out, ${name}! I've received your message and will get back to you soon.</div>
            <div class="bubble-meta">Delivered</div>
          `;
          chatContainer.appendChild(replyBubble);
          chatContainer.scrollTop = chatContainer.scrollHeight;
          
          if (navigator.vibrate) navigator.vibrate([10, 30]);
        }, 1500);
        
      } else throw new Error();
    } catch {
      messageInput.disabled = false;
      if (sendBtn) sendBtn.disabled = false;
      
      // Append Delivery Failure Bubble
      const errorBubble = document.createElement('div');
      errorBubble.className = 'imessage-native-bubble-in error-bubble';
      errorBubble.innerHTML = `
        <div class="bubble-inner" style="background: rgba(255,59,48,0.15); border: 1px solid rgba(255,59,48,0.3); color: var(--text);">
          Oops, your message could not be delivered. Please try emailing directly to ${portfolioData.profile.email}.
        </div>
        <div class="bubble-meta" style="color: #ff3b30;">Not Delivered</div>
      `;
      chatContainer.appendChild(errorBubble);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  });
}
