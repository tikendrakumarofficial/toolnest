document.getElementById('calculateCompoundInterestBtn').addEventListener('click', () => {
    const principalAmount = parseFloat(document.getElementById('principalAmount').value);
    const annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value);
    const numberOfYears = parseFloat(document.getElementById('numberOfYears').value);
    const compoundingFrequency = parseInt(document.getElementById('compoundingFrequency').value);
    const resultDiv = document.querySelector('.result');

    if (isNaN(principalAmount) || isNaN(annualInterestRate) || isNaN(numberOfYears) || isNaN(compoundingFrequency) ||
        principalAmount <= 0 || annualInterestRate <= 0 || numberOfYears <= 0) {
        resultDiv.innerHTML = '<p style="color: red;">Please enter valid positive numbers for principal, rate, and years.</p>';
        return;
    }

    const ratePerPeriod = annualInterestRate / 100 / compoundingFrequency;
    const numberOfPeriods = numberOfYears * compoundingFrequency;

    const finalAmount = principalAmount * Math.pow((1 + ratePerPeriod), numberOfPeriods);
    const totalInterestEarned = finalAmount - principalAmount;

    // Redirect to a new result page and pass values as URL parameters
    window.location.href = `compound_interest_result.html?principal=${principalAmount.toFixed(2)}&rate=${annualInterestRate.toFixed(2)}&years=${numberOfYears}&frequency=${compoundingFrequency}&finalAmount=${finalAmount.toFixed(2)}&totalInterest=${totalInterestEarned.toFixed(2)}`;
});
