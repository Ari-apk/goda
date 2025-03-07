// Add subtle animation to cards when they come into view
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Add sparkle effect to the heart emoji on hover
    const heart = document.querySelector('.heart');
    heart.addEventListener('mouseover', () => {
        heart.style.animation = 'none';
        heart.offsetHeight; // Trigger reflow
        heart.style.animation = 'pulse 0.5s ease';
    });

    // Pridedame klaviatūros navigacijos palaikymą Roblox mygtukui
    const robloxButton = document.querySelector('.roblox-button');
    robloxButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            robloxButton.click();
        }
    });
});