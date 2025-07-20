document.getElementById('calculateFactorialBtn').addEventListener('click', () => {
    const numberInput = parseInt(document.getElementById('numberInput').value);
    const resultDiv = document.querySelector('.result');

    if (isNaN(numberInput) || numberInput < 0) {
        resultDiv.innerHTML = '<p style="color: red;">Please enter a valid non-negative integer.</p>';
        return;
    }

    let factorial = 1;
    for (let i = 2; i <= numberInput; i++) {
        factorial *= i;
    }

    // Redirect to a new result page and pass values as URL parameters
    window.location.href = `factorial_result.html?number=${numberInput}&factorial=${factorial}`;
});
