// Particles.js initialization for interactive background
particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: { enable: true, value_area: 800 }
        },
        shape: { type: "circle" },
        size: { value: 5 }
    },
    interactivity: {
        events: { onhover: { enable: true, mode: "repulse" } }
    }
});

// GSAP animation for scroll and text effects
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        gsap.to(window, { duration: 1.5, scrollTo: this.getAttribute('href') });
    });
});
