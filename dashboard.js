document.addEventListener("DOMContentLoaded", function () {
    // EBITDA Chart
    var ctx = document.getElementById('ebitdaChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: 30 }, (_, i) => i + 1),
            datasets: [
                {
                    label: 'Green Area',
                    data: [2000, 2500, 2200, 2700, 3000, 2800, 2600, 3100, 3300, 3400, 3200, 3100, 2900, 2800, 2700, 2900, 3100, 3300, 3400, 3200, 3100, 2900, 2800, 2700, 2900, 3100, 3300, 3400, 3200, 3100],
                    backgroundColor: 'rgba(76, 175, 80, 0.4)',
                    borderColor: 'green',
                    fill: true
                },
                {
                    label: 'Brown Area',
                    data: [1000, 1200, 1300, 1400, 1600, 1800, 2000, 2200, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 2800, 2600, 2400, 2200, 2000, 1800, 1600, 1400, 1300, 1200, 1100, 1000, 900, 800, 700],
                    backgroundColor: 'rgba(165, 120, 87, 0.6)',
                    borderColor: 'brown',
                    fill: true
                }
            ]
        }
    });

    // Profit Margin Chart
    var profitCtx = document.getElementById('profitMarginChart').getContext('2d');
    new Chart(profitCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Net Profit Margin',
                data: [6, 9, 12, 5, 7, 9, 6],
                backgroundColor: 'rgba(33, 150, 243, 0.6)'
            }]
        }
    });

    // Debt-to-Equity Chart
    var debtCtx = document.getElementById('debtEquityChart').getContext('2d');
    new Chart(debtCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
                {
                    label: 'Debt',
                    data: [3, 6, 9, 4, 5, 6, 3],
                    backgroundColor: 'rgba(244, 67, 54, 0.6)'
                },
                {
                    label: 'Equity',
                    data: [6, 7, 8, 3, 4, 5, 6],
                    backgroundColor: 'rgba(33, 150, 243, 0.6)'
                }
            ]
        }
    });
});
