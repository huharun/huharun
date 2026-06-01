/* ============================================================
   HUHARUN — main.js (Entry Point)
============================================================ */

import { launchApp, goHome, updateClock, initTheme, initContactForm, openModal, closeModal } from './ui.js';
import { initStars } from './stars.js';
import { 
  renderDashboard, 
  renderAbout, 
  renderBooks, 
  renderExperience, 
  renderProjects,
  renderContact
} from './renderers.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial Core Init
  initStars();
  initTheme();
  
  // 2. Start Clock
  updateClock();
  setInterval(updateClock, 10000);

  // 3. Initial Renders
  renderDashboard();
  renderAbout();
  renderBooks();
  renderExperience();
  renderProjects();
  renderContact();

  // 4. Post-Render Init
  initContactForm();

  // 5. Global Event Delegation (No Inline Clicks)
  document.body.addEventListener('click', e => {
    // About Resume Trigger
    const resumeTrigger = e.target.closest('#about-resume-trigger');
    if (resumeTrigger && resumeTrigger.dataset.url) {
      openModal(resumeTrigger.dataset.url, 'Resume');
      return;
    }

    // General App Launchers (robust check for data-app attribute)
    const appBtn = e.target.closest('[data-app]');
    if (appBtn) {
      launchApp(appBtn.dataset.app);
      return;
    }

    // Back Buttons
    if (e.target.closest('.back-btn')) {
      goHome();
      return;
    }

    // Files Grid (iOS style)
    const fileItem = e.target.closest('.file-item-ios');
    if (fileItem && fileItem.dataset.url) {
      const url = fileItem.dataset.url;
      const isPdf = fileItem.dataset.pdf === "true";
      const name = fileItem.querySelector('.file-name-ios')?.textContent || 'File';
      
      if (isPdf && url !== "#") {
        openModal(url, name);
      } else if (url !== "#") {
        window.open(url, '_blank');
      }
      return;
    }

    // Modal Close
    if (e.target.closest('#modal-close')) {
      closeModal();
      return;
    }

    // Timeline Widget / At a Glance Widget
    if (e.target.closest('.widget-glance')) {
      launchApp('experience');
      return;
    }
  });
});
