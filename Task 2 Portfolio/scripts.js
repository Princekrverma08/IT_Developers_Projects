document.addEventListener("DOMContentLoaded", () => {
    const whatidoSection = document.querySelector('.Whatido');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                whatidoSection.classList.add('visible');
            }
        });
    });

    observer.observe(whatidoSection);
});
