document.getElementById('calculatePercentageBtn').addEventListener('click', () => {
    const numberX = parseFloat(document.getElementById('numberX').value);
    const numberY = parseFloat(document.getElementById('numberY').value);
    const resultDiv = document.querySelector('.result');

    if (isNaN(numberX) || isNaN(numberY)) {
        resultDiv.innerHTML = '<p style="color: red;">Please enter valid numbers for both fields.</p>';
        return;
    }

    if (numberY === 0) {
        resultDiv.innerHTML = '<p style="color: red;">The second number cannot be zero.</p>';
        return;
    }

    const percentage = (numberX / numberY) * 100;

    // Redirect to a new result page and pass values as URL parameters
    window.location.href = `percentage_result.html?numberX=${numberX.toFixed(2)}&numberY=${numberY.toFixed(2)}&percentage=${percentage.toFixed(2)}`;
});
