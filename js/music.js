/* ======================== MUSIC PLAYER ======================== */
import { portfolioData } from './data.js';

export function initMusicPlayer() {
  const audio    = document.getElementById('audio-player');
  const playBtn  = document.getElementById('play-btn');
  const iconPlay = document.getElementById('icon-play');
  const iconPause = document.getElementById('icon-pause');
  const scrubFill = document.getElementById('scrubber-fill');
  const timeEl   = document.getElementById('time-elapsed');
  const totalEl  = document.getElementById('time-total');
  const volSlider = document.getElementById('vol-slider');
  const disc     = document.getElementById('music-disc');
  const statusEl = document.getElementById('music-status');
  const scrubBar = document.getElementById('scrubber-bar');
  const L        = portfolioData.config.labels;

  let isPlaying  = false;
  if (audio && portfolioData.music) {
    audio.src = portfolioData.music.url;
    audio.volume = 0.7;
  }

  const trackNameEl = document.getElementById('music-track-name');
  const artistNameEl = document.getElementById('music-artist-name');
  if (trackNameEl && portfolioData.music) trackNameEl.textContent = portfolioData.music.track;
  if (artistNameEl && portfolioData.music) artistNameEl.textContent = portfolioData.music.artist;

  function fmtTime(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2,'0')}`;
  }

  playBtn?.addEventListener('click', () => {
    const widget = document.getElementById('music-widget');
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      if (iconPlay) iconPlay.style.display = '';
      if (iconPause) iconPause.style.display = 'none';
      if (statusEl) statusEl.textContent = L.musicStatusPaused;
      widget?.classList.remove('playing');
    } else {
      audio.play().catch(() => {});
      isPlaying = true;
      if (iconPlay) iconPlay.style.display = 'none';
      if (iconPause) iconPause.style.display = '';
      if (statusEl) statusEl.textContent = L.musicStatusPlaying;
      widget?.classList.add('playing');
    }
    if (navigator.vibrate) navigator.vibrate(5);
  });

  audio?.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    if (scrubFill) scrubFill.style.width = pct + '%';
    if (timeEl)  timeEl.textContent = fmtTime(audio.currentTime);
    if (totalEl && audio.duration) totalEl.textContent = fmtTime(audio.duration);
  });

  scrubBar?.addEventListener('click', e => {
    if (!audio.duration) return;
    const rect = scrubBar.getBoundingClientRect();
    const pct  = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * audio.duration;
  });

  volSlider?.addEventListener('input', () => {
    if (audio) audio.volume = volSlider.value;
  });
}
