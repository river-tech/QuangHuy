document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animations using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal, .reveal-slide-up');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optional: stop observing after reveal
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Sticky Header Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(11, 15, 20, 0.95)';
            header.style.padding = '1rem 0';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
        } else {
            header.style.background = 'linear-gradient(to bottom, rgba(11, 15, 20, 0.8), transparent)';
            header.style.padding = '1.5rem 0';
            header.style.borderBottom = 'none';
        }
    });

    // Back to Top Button
    const backToTop = document.querySelector('#backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Video Audio Logic (Simplified placeholder)
    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach(item => {
        item.addEventListener('click', () => {
            // In a real scenario, this would handle HTML5 video elements
            console.log('Video clicked: Mute/Unmute logic would go here');
            
            // Example: Mute all other videos
            videoItems.forEach(otherItem => {
                if (otherItem !== item) {
                    // otherItem.querySelector('video').muted = true;
                }
            });
        });
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

