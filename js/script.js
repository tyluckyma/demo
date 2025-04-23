// Simple script to update the copyright year automatically
document.getElementById('current-year').textContent = new Date().getFullYear();

// Add any other custom JavaScript interactions here
// Example: Smooth scrolling for navigation links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});