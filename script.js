document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const yOffset = -60;
        
        window.scrollTo({
            top: targetElement.offsetTop + yOffset,
            behavior: 'smooth'
        });
    }
});

