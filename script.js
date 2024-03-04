// JavaScript for animation on scroll
document.addEventListener('DOMContentLoaded', function () {
    const animatedItems = document.querySelectorAll('.animated');

    function checkViewport() {
        animatedItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const viewportHeight = (window.innerHeight || document.documentElement.clientHeight);
            if (rect.top <= viewportHeight * 0.75) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkViewport);
    checkViewport();
});
