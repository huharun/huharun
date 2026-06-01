/* ======================== RENDERING LOGIC ======================== */
import { portfolioData } from './data.js';
import { icons } from './icons.js';
import { launchApp, goHome } from './ui.js';

// --- Helpers ---

const getInitials = (name) => name.split(' ').map(n => n[0]).join('').toUpperCase();

const setElementContent = (selector, content, isHtml = false) => {
  const el = document.querySelector(selector);
  if (!el) return;
  if (isHtml) el.innerHTML = content;
  else el.textContent = content;
};

// --- Main Renderers ---

export function renderDashboard() {
  const p = portfolioData.profile;
  const c = portfolioData.config;
  const L = c.labels;

  document.title = c.statusTitle || '';
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = `${p.name} — ${p.title}. Portfolio showcasing projects, experience, and skills.`;

  setElementContent('.status-title', c.statusTitle);
  setElementContent('.status-badge', c.statusBadge);
  setElementContent('.messages-status', `<span class="online-dot"></span> ${c.contactStatus}`, true);
  setElementContent('.bubble-in p', c.contactGreeting);

  document.querySelectorAll('.back-btn').forEach(btn => btn.innerHTML = `${icons.back} ${L.navHome}`);
  
  const appTitles = {
    'about': L.navAbout,
    'books': L.navBooks,
    'experience': L.navExperience,
    'projects': L.navProjects,
    'contact': L.navContact,
    'character': 'Character'
  };
  
  Object.entries(appTitles).forEach(([id, title]) => {
    setElementContent(`#app-${id} .app-topbar-title`, title);
  });

  const launcherGrid = document.querySelector('.launcher-grid');
  if (launcherGrid) {
    const apps = [
      { id: 'about', label: L.navAbout },
      { id: 'books', label: L.navBooks },
      { id: 'experience', label: L.navExperience },
      { id: 'projects', label: L.navProjects },
      { id: 'character', label: 'Character' },
      { id: 'contact', label: L.navContact }
    ];
    launcherGrid.innerHTML = apps.map(app => `
      <button class="launcher-btn" data-app="${app.id}" aria-label="${app.label}">
        <div class="launcher-icon icon-${app.id}">${icons[app.id] || icons.projects}</div>
        <span>${app.label}</span>
      </button>
    `).join('');
  }

  setElementContent('#dash-name', p.name);
  setElementContent('#dash-title', p.title);
  
  const initials = getInitials(p.name);
  const avatarHtml = `<img src="${p.avatar}" alt="${p.name}" class="avatar-img" onerror="this.style.display='none'; this.parentElement.innerHTML='${initials}'">`;
  
  setElementContent('#dash-avatar', avatarHtml, true);
  setElementContent('#contact-avatar', avatarHtml, true);
  setElementContent('.messages-name', p.name);
  
  setElementContent('#dash-meta', `
    <div class="meta-row">${icons.location} <span>${p.location}</span></div>
    <div class="meta-row">${icons.email} <span>${p.email}</span></div>
  `, true);
  
  const socialEl = document.getElementById('dash-socials');
  if (socialEl && p.socials) {
    const socialMap = [
      { id: 'github',   url: p.socials.github },
      { id: 'linkedin', url: p.socials.linkedin },
      { id: 'leetcode', url: p.socials.leetcode },
      { id: 'kaggle',   url: p.socials.kaggle },
    ];
    socialEl.innerHTML = socialMap
      .filter(s => s.url)
      .map(s => `<a class="social-link" href="${s.url}" target="_blank" rel="noopener" aria-label="${s.id}">${icons[s.id]}</a>`)
      .join('');
  }

  setElementContent('.widget-profile .widget-label', L.widgetProfile);
  setElementContent('.widget-glance .widget-label', L.widgetGlance);
  setElementContent('.widget-launcher .widget-label', L.widgetLauncher);
  setElementContent('.widget-files .widget-label', 'FILES');
  setElementContent('.widget-character .widget-label', 'CHARACTER');

  renderGlance();
  renderFiles();
  renderQuotes();
  renderCharacterApp();
  renderContact();
}

export function renderQuotes() {
  const miniQuote = document.getElementById('character-mini-quote');
  if (!miniQuote || !portfolioData.quotes) return;

  // Specifically feature the Martha Kent quote on the home dashboard
  const q = portfolioData.quotes.find(q => q.author === "Martha Kent") || portfolioData.quotes[0];
  
  miniQuote.innerHTML = `
    <div class="quote-text">"${q.text}"</div>
    <div class="quote-author">— ${q.author}</div>
  `;
}

const MASTER_CHARACTER_TABS = [
  { id: 'vision', label: 'Remember', icon: 'bolt' },
  { id: 'audio', label: 'Audio', icon: 'musicNote' },
  { id: 'repeat', label: 'Repeat', icon: 'activity' }
];

export function renderCharacterApp() {
  const container = document.getElementById('character-app-content');
  if (!container) return;

  container.innerHTML = `
    <div class="character-app-wrapper">
      <nav class="character-segmented-nav">
        <div class="character-segmented-control">
          ${MASTER_CHARACTER_TABS.map((tab, i) => `
            <button class="character-nav-btn ${i === 0 ? 'active' : ''}" data-target="${tab.id}">
              <div class="character-nav-icon">${icons[tab.icon]}</div>
              <span class="character-nav-label">${tab.label}</span>
            </button>
          `).join('')}
        </div>
      </nav>
      <div id="character-pane-viewport" class="character-viewport no-scrollbar"></div>
    </div>
  `;

  const btns = container.querySelectorAll('.character-nav-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCharacterPane(target);
      if (navigator.vibrate) navigator.vibrate(5);
    });
  });

  renderCharacterPane(MASTER_CHARACTER_TABS[0].id);
}

function renderCharacterPane(paneId) {
  const viewport = document.getElementById('character-pane-viewport');
  if (!viewport) return;

  // Toggle scrolling for "Repeat" pane
  if (paneId === 'repeat') {
    viewport.classList.add('no-scroll');
  } else {
    viewport.classList.remove('no-scroll');
  }

  if (paneId === 'vision') {
    const quotes = portfolioData.quotes || [];
    viewport.innerHTML = quotes.map(q => `
      <div class="vision-quote-wrap snap-item">
        <h2 class="vision-text">"${q.text}"</h2>
        <p class="vision-author">— ${q.author}</p>
      </div>
    `).join('');
  } else if (paneId === 'audio') {
    const soundtrack = portfolioData.soundtrack || [];
    viewport.innerHTML = `
      <div class="character-audio-pane">
        <div class="audio-grid-scroll no-scrollbar">
          ${soundtrack.map(id => `
            <div class="vision-track-item compact">
              <iframe 
                style="border-radius:12px" 
                src="https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0" 
                width="100%" 
                height="80" 
                frameBorder="0" 
                allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
              </iframe>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (paneId === 'repeat') {
    const videos = portfolioData.repeatVideos || [];
    const mainVid = videos[0]; // Only show the first (primary) video
    viewport.innerHTML = `
      <div class="character-repeat-pane">
        <div class="repeat-video-container">
          <iframe 
            src="https://www.youtube.com/embed/${mainVid}" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    `;
  }
}

export function renderGlance() {
  const container = document.getElementById('glance-content');
  if (!container || !portfolioData.glance) return;
  const g = portfolioData.glance;
  const intro = portfolioData.intro;
  const L = portfolioData.config.labels;

  container.innerHTML = `
    <div class="glance-section">
      <div class="glance-header">${L.glanceActive}</div>
      <div class="glance-current">
        <div class="role">${g.current.role}</div>
        <div class="company">${g.current.company}</div>
        <div class="glance-status-row">
          <span class="glance-status-tag">${g.current.status}</span>
        </div>
      </div>
      <div class="glance-header mt-s3">${L.glanceComp}</div>
      <div class="glance-competencies">
        ${intro.bullets.slice(0, 5).map(b => `
          <div class="comp-item"><span class="comp-dot"></span><span class="comp-label">${b}</span></div>
        `).join('')}
      </div>
    </div>
    <div class="glance-section">
      <div class="glance-header">${L.glanceTimeline}</div>
      <div class="glance-milestones">
        ${g.milestones.map(m => `
          <div class="milestone">
            <div class="milestone-meta"><span class="duration">${m.duration}</span><span class="period">${m.period}</span></div>
            <span class="label">${m.label}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

export function renderFiles() {
  const container = document.querySelector('.files-grid');
  if (!container || !portfolioData.files) return;
  container.innerHTML = portfolioData.files.map(file => {
    const isFolder = file.icon === 'folder' || !file.isPdf;
    const iconClass = isFolder ? 'icon-ios-folder' : 'icon-ios-pdf';
    return `
      <div class="file-item-ios" data-url="${file.url}" data-pdf="${file.isPdf || false}">
        <div class="file-icon-ios ${iconClass}">${icons[file.icon] || icons.box}</div>
        <div class="file-name-ios">${file.label}</div>
      </div>
    `;
  }).join('');
}

export function renderAbout() {
  const el = document.getElementById('about');
  if (!el) return;
  const p = portfolioData.profile;
  const intro = portfolioData.intro;
  const L = portfolioData.config.labels;
  const initials = getInitials(p.name);

  el.innerHTML = `
    <div class="about-app-container">
      <header class="contact-card-header">
        <div class="contact-avatar-wrapper">
          <img src="${p.avatar}" alt="${p.name}" class="avatar-img" onerror="this.style.display='none'; this.parentElement.innerText='${initials}'">
        </div>
        <h1 class="contact-name-large">${p.name}</h1>
        <p class="contact-title-sub">${L.aboutHeroRole}</p>
        <div class="contact-actions-row">
          <a href="mailto:${p.email}" class="contact-action-btn"><div class="contact-action-icon">${icons.email}</div><span class="contact-action-label">Email</span></a>
          <button class="contact-action-btn" id="about-resume-trigger" data-url="${p.resumeUrl}"><div class="contact-action-icon">${icons.resume}</div><span class="contact-action-label">Resume</span></button>
          <button class="contact-action-btn" data-app="contact"><div class="contact-action-icon">${icons.contact}</div><span class="contact-action-label">Message</span></button>
        </div>
      </header>
      <div class="contact-data-group">
        <div class="contact-data-row"><span class="contact-data-label">Work Email</span><a href="mailto:${p.email}" class="contact-data-value contact-data-link">${p.email}</a></div>
        <div class="contact-data-row"><span class="contact-data-label">Location</span><span class="contact-data-value">${p.location}</span></div>
      </div>
      <div class="contact-data-group"><div class="contact-data-row"><span class="contact-data-label">${L.aboutBioHeading}</span><p class="contact-data-value">${intro.description}</p></div></div>
      <div class="contact-data-group"><div class="contact-data-row"><span class="contact-data-label">${L.aboutFocusHeading}</span></div><div class="contact-bullets">
          ${intro.bullets.map(b => `<div class="contact-bullet-item"><span class="contact-bullet-dot"></span><span class="contact-bullet-text">${b}</span></div>`).join('')}
      </div></div>
      <div class="contact-data-group">
        <div class="contact-data-row"><span class="contact-data-label">Social Connections</span></div>
        <div class="contact-social-grid">
          <a href="${p.socials.github}" target="_blank" rel="noopener" class="contact-social-item"><div class="contact-social-icon">${icons.github}</div><span class="contact-social-label">GitHub</span></a>
          <a href="${p.socials.linkedin}" target="_blank" rel="noopener" class="contact-social-item"><div class="contact-social-icon">${icons.linkedin}</div><span class="contact-social-label">LinkedIn</span></a>
          <a href="${p.socials.leetcode}" target="_blank" rel="noopener" class="contact-social-item"><div class="contact-social-icon">${icons.leetcode}</div><span class="contact-social-label">LeetCode</span></a>
          <a href="${p.socials.kaggle}" target="_blank" rel="noopener" class="contact-social-item"><div class="contact-social-icon">${icons.kaggle}</div><span class="contact-social-label">Kaggle</span></a>
        </div>
      </div>
    </div>
  `;
}

// --- Unified Books (Segmented Navigation) ---

const MASTER_BOOKS = [
  {
    id: 'edu',
    label: 'Education',
    icon: 'education',
    color: 'blue',
    chapters: () => portfolioData.education.map(e => ({
      title: e.school,
      subtitle: e.degree,
      details: [{ label: 'Completed', value: e.period }, { label: 'Coursework', value: e.coursework }]
    }))
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: 'terminal',
    color: 'orange',
    chapters: () => portfolioData.skills.map(s => ({
      title: s.category,
      subtitle: 'Proficiency Tags',
      details: s.items.map((item, idx) => ({ label: (idx + 1).toString().padStart(2, '0'), value: item }))
    }))
  },
  {
    id: 'other',
    label: 'Others',
    icon: 'bolt',
    color: 'purple',
    chapters: () => (portfolioData.leadership || []).map(l => ({
      title: l.role,
      subtitle: l.period,
      details: []
    }))
  }
];

export function renderBooks() {
  const container = document.getElementById('books');
  if (!container) return;

  container.innerHTML = `
    <div class="books-app-wrapper">
      <nav class="books-segmented-nav">
        <div class="books-segmented-control">
          ${MASTER_BOOKS.map((s, i) => `
            <button class="books-nav-btn ${i === 0 ? 'active' : ''}" data-target="${s.id}">
              <div class="nav-btn-icon">${icons[s.icon] || icons.books}</div>
              <span class="nav-btn-label">${s.label}</span>
            </button>
          `).join('')}
        </div>
      </nav>
      <div id="books-content-viewport" class="books-content-viewport"></div>
    </div>
  `;

  // Attach internal nav logic
  const btns = container.querySelectorAll('.books-nav-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderBooksPane(target);
      if (navigator.vibrate) navigator.vibrate(5);
    });
  });

  // Initial pane
  renderBooksPane(MASTER_BOOKS[0].id);
}

function renderBooksPane(sectionId) {
  const viewport = document.getElementById('books-content-viewport');
  if (!viewport) return;

  const section = MASTER_BOOKS.find(s => s.id === sectionId);
  if (!section) return;

  const chapters = section.chapters();

  viewport.innerHTML = `
    <div class="books-pane active">
      <div class="chapters-container">
        ${chapters.map((ch, ci) => `
          <div class="chapter-group">
            <div class="chapter-header color-${section.color}">
              <span class="chapter-index">CHAPTER ${ci + 1}</span>
              <h3 class="chapter-title">${ch.title}</h3>
              <p class="chapter-sub">${ch.subtitle}</p>
            </div>
            ${ch.details.length > 0 ? `
              <div class="chapter-details ${section.id === 'skills' ? 'skills-card-variant' : ''}">
                ${section.id === 'skills' ? `
                  <div class="skills-pill-grid">
                    ${ch.details.map(d => `<span class="skill-pill">${d.value}</span>`).join('')}
                  </div>
                ` : `
                  ${ch.details.map(d => {
                    if (d.label.toLowerCase() === 'coursework') {
                      return `
                        <div class="chapter-row coursework-row">
                          <span class="chapter-row-label">${d.label}</span>
                          <div class="coursework-list">
                            ${d.value.split(',').map(c => `<span class="coursework-tag">${c.trim()}</span>`).join('')}
                          </div>
                        </div>
                      `;
                    }
                    return `
                      <div class="chapter-row">
                        <span class="chapter-row-label">${d.label}</span>
                        <span class="chapter-row-value">${d.value}</span>
                      </div>
                    `;
                  }).join('')}
                `}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

export function renderExperience() {
  const container = document.getElementById('experience');
  if (!container) return;
  const E = portfolioData.experience;
  const L = portfolioData.config.labels;

  container.innerHTML = `
    <div class="experience-app-container">
      <div class="notes-layout">
        <aside class="notes-sidebar no-scrollbar">
          <header class="notes-sidebar-header">
            <span class="notes-title-large">Experience</span>
            <span class="notes-count-sub">${E.length} Roles</span>
          </header>
          <div class="note-items-list no-scrollbar">
            ${E.map((exp, i) => `
              <button class="note-item ${i === 0 ? 'active' : ''}" data-idx="${i}">
                <div class="note-item-title">${exp.company.split('—')[0].trim()}</div>
                <div class="note-item-date-sub">${exp.period.split('—')[0].trim()}</div>
              </button>
            `).join('')}
          </div>
        </aside>
        <main class="notes-editor no-scrollbar">
          <div id="active-note-content" class="exp-content-inner"></div>
        </main>
      </div>
    </div>
  `;

  const items = container.querySelectorAll('.note-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.dataset.idx);
      items.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      openNote(idx);
      if (navigator.vibrate) navigator.vibrate(5);
    });
  });

  openNote(0);
}

function openNote(idx) {
  const exp = portfolioData.experience[idx];
  const content = document.getElementById('active-note-content');
  if (!exp || !content) return;

  content.innerHTML = `
    <div class="exp-date-heading">${exp.period}</div>
    <h2 class="exp-company-header">${exp.company}</h2>
    <div class="exp-role-line">
      ${exp.role}
      ${exp.tags.includes('Incoming') ? '<span class="exp-tag-pill">Incoming</span>' : ''}
    </div>
    
    <div class="exp-notes-content">
      <ul class="exp-notes-list">
        ${exp.bullets.map(b => `<li class="exp-note-bullet">${b}</li>`).join('')}
      </ul>
    </div>

    <footer class="exp-tech-footer">
      ${exp.tags.map(t => `<span class="tech-tag-note">${t}</span>`).join('')}
    </footer>
  `;
}

export function renderProjects() {
  const container = document.getElementById('projects');
  if (!container) return;
  const P = portfolioData.projects;
  const L = portfolioData.config.labels;

  container.innerHTML = `
    <div class="projects-app-container">
      <div class="projects-search-wrapper">
        ${icons.search}
        <input type="text" id="project-search-input" class="projects-search-input" placeholder="${L.projectsSearchPlc}">
      </div>
      <div class="projects-liquid-grid" id="liquid-grid"></div>
    </div>
  `;

  const grid = document.getElementById('liquid-grid');
  const searchInput = document.getElementById('project-search-input');
  
  let currentSearch = '';

  const updateGrid = () => {
    const filtered = P.filter(p => {
      return p.title.toLowerCase().includes(currentSearch.toLowerCase()) || 
             p.tags.some(t => t.toLowerCase().includes(currentSearch.toLowerCase())) ||
             p.description.toLowerCase().includes(currentSearch.toLowerCase());
    });

    if (filtered.length === 0) { 
      grid.innerHTML = `<div class="empty-state">${L.projectsNoResults}</div>`; 
      return; 
    }

    grid.innerHTML = filtered.map((p, i) => {
      const primaryLink = p.links && p.links[0] ? p.links[0].url : '#';
      return `
        <div class="project-liquid-card">
          <div class="project-card-top">
            <div class="project-liquid-icon">${icons[p.icon] || icons.box}</div>
            <div class="project-info-main">
              <div class="project-liquid-name">${p.title}</div>
              <div class="project-liquid-cat">${p.tags[0]}</div>
            </div>
            ${p.links && p.links[0] ? `<a href="${primaryLink}" target="_blank" rel="noopener" class="project-get-btn">GET</a>` : ''}
          </div>
          
          <div class="project-content-simple">
            <p class="project-description-text">${p.description}</p>
          </div>

          <div class="project-liquid-tags">
            ${p.tags.slice(0, 5).map(t => `<span class="project-liquid-tag">${t}</span>`).join('')}
          </div>
        </div>
      `;
    }).join('');
  };

  searchInput?.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    updateGrid();
  });

  updateGrid();
}


export function renderContact() {
  const container = document.getElementById('contact');
  if (!container) return;
  const p = portfolioData.profile;
  const c = portfolioData.config;
  const initials = getInitials(p.name);
  const avatarHtml = `<img src="${p.avatar}" alt="${p.name}" class="avatar-img" onerror="this.style.display='none'; this.parentElement.innerHTML='${initials}'">`;

  container.innerHTML = `
    <div class="imessage-native-layout">
      <form id="email-form" action="https://formspree.io/f/${portfolioData.site.formspreeId}" method="POST" class="imessage-native-form">
        <header class="imessage-native-header">
          <div class="imessage-native-avatar-wrap">
            ${avatarHtml}
            <div class="imessage-native-online"></div>
          </div>
          <div class="imessage-native-meta">
            <h2 class="imessage-native-name">${p.name}</h2>
            <div class="imessage-native-status">
              <span class="online-pulse-dot"></span>
              Available for Collaboration
            </div>
            <button type="button" class="imessage-view-about-btn" data-app="about">View Contact Info</button>
          </div>
        </header>

        <div class="imessage-fields-header">
          <div class="imessage-field-line">
            <span class="imessage-field-label">To:</span>
            <span class="imessage-field-value">${p.name}</span>
          </div>
          <div class="imessage-field-line">
            <span class="imessage-field-label">From:</span>
            <div class="imessage-field-inputs">
              <input type="text" name="name" class="imessage-input-meta" placeholder="Your Name" required>
              <span class="imessage-field-separator">&lt;</span>
              <input type="email" name="email" class="imessage-input-meta" placeholder="your.email@example.com" required>
              <span class="imessage-field-separator">&gt;</span>
            </div>
          </div>
        </div>

        <div class="imessage-native-chat no-scrollbar">
          <div class="imessage-native-bubble-in">
            <div class="bubble-inner">${c.contactGreeting}</div>
            <div class="bubble-meta">Delivered</div>
          </div>
        </div>

        <footer class="imessage-native-footer">
          <div class="imessage-input-bar">
            <textarea name="message" class="imessage-native-textarea" placeholder="iMessage" rows="1" required></textarea>
            <button type="submit" class="imessage-native-send" aria-label="Send">${icons.send}</button>
          </div>
          <div id="imessage-feedback" class="imessage-feedback-area">
            <p id="success-message" class="hidden feedback-success">Delivered</p>
            <p id="error-message" class="hidden feedback-error">Not Delivered</p>
          </div>
        </footer>
      </form>
    </div>
  `;

  // Internal scroll logic to ensure messages stay at bottom if needed
  const chatArea = container.querySelector('.imessage-native-chat');
  if (chatArea) chatArea.scrollTop = chatArea.scrollHeight;

  // Auto-resize textarea
  const tx = container.querySelector('.imessage-native-textarea');
  if (tx) {
    tx.style.height = 'auto';
    tx.addEventListener('input', () => {
      tx.style.height = 'auto';
      tx.style.height = (tx.scrollHeight) + 'px';
    });
  }
}
