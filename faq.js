document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.querySelector('h2').addEventListener('click', function () {
            item.classList.toggle('active');
        });
    });
});
