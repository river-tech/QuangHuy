export function initVideoLogic() {
    const videos = document.querySelectorAll('.video-item video');
    
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                // Try to play with sound
                video.muted = false; // Ensure it's not muted
                const playPromise = video.play();
                
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        // Autoplay with sound was blocked by browser
                        console.log("Autoplay with sound blocked. Browsers require user interaction first.");
                        // Optional fallback: play muted if blocked
                        // video.muted = true;
                        // video.play();
                    });
                }
            } else {
                video.pause();
            }
        });
    }, {
        threshold: 0.5 // Play when 50% of the video is visible
    });

    videos.forEach(video => {
        videoObserver.observe(video);
    });
}

