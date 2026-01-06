import { initRevealAnimations } from './modules/animations.js';
import { initBackToTop } from './modules/backToTop.js';
import { initVideoLogic } from './modules/video.js';
import { initSmoothScroll } from './modules/navigation.js';

async function loadSection(id, path) {
    const response = await fetch(path);
    if (!response.ok) return;
    const html = await response.text();
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

async function init() {
    // Load all sections
    await Promise.all([
        loadSection('hero-placeholder', 'sections/hero.html'),
        loadSection('about-placeholder', 'sections/about.html'),
        loadSection('experience-placeholder', 'sections/experience.html'),
        loadSection('partners-placeholder', 'sections/partners.html'),
        loadSection('event-gala-placeholder', 'sections/event-gala.html'),
        loadSection('event-teambuilding-placeholder', 'sections/event-teambuilding.html'),
        loadSection('event-yep-placeholder', 'sections/event-yep.html'),
        loadSection('event-halong-placeholder', 'sections/event-halong.html'),
        loadSection('event-liendoan-placeholder', 'sections/event-liendoan.html'),
        loadSection('event-others-placeholder', 'sections/event-others.html'),
        loadSection('videos-placeholder', 'sections/videos.html'),
        loadSection('thanks-placeholder', 'sections/thanks.html'),
        loadSection('footer-placeholder', 'sections/footer.html')
    ]);

    // Initialize modules after sections are loaded
    initRevealAnimations();
    initBackToTop();
    initVideoLogic();
    initSmoothScroll();
}

document.addEventListener('DOMContentLoaded', init);
