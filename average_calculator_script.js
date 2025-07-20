document.getElementById('calculateAverageBtn').addEventListener('click', () => {
    const numberListString = document.getElementById('numberList').value;
    const resultDiv = document.querySelector('.result');

    if (!numberListString) {
        resultDiv.innerHTML = '<p style="color: red;">Please enter a list of numbers.</p>';
        return;
    }

    const numberArray = numberListString.split(',').map(num => parseFloat(num.trim()));

    if (numberArray.some(isNaN)) {
        resultDiv.innerHTML = '<p style="color: red;">Please enter a valid list of numbers separated by commas.</p>';
        return;
    }

    const sum = numberArray.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numberArray.length;

    // Redirect to a new result page and pass values as URL parameters
    window.location.href = `average_result.html?numberList=${encodeURIComponent(numberListString)}&average=${average.toFixed(2)}`;
});
