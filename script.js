// 🔵 Smooth Scroll Animations
document.addEventListener("scroll", function () {
    let elements = document.querySelectorAll(".fade-in");
    let screenPosition = window.innerHeight / 1.3;

    elements.forEach((el) => {
        let position = el.getBoundingClientRect().top;
        if (position < screenPosition) {
            el.classList.add("visible");
        }
    });
});

// 🔵 Chart.js Fraud Detection Graph
const ctx = document.getElementById('fraudChart').getContext('2d');

const fraudChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Fraudulent Claims (%)',
            data: [5, 7, 10, 12, 9, 14],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: { beginAtZero: true }
        }
    }
});
