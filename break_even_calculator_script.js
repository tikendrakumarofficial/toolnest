document.getElementById('calculateBreakEvenBtn').addEventListener('click', () => {
    const fixedCosts = parseFloat(document.getElementById('fixedCosts').value);
    const sellingPricePerUnit = parseFloat(document.getElementById('sellingPricePerUnit').value);
    const variableCostsPerUnit = parseFloat(document.getElementById('variableCostsPerUnit').value);
    const resultDiv = document.querySelector('.result');

    if (isNaN(fixedCosts) || isNaN(sellingPricePerUnit) || isNaN(variableCostsPerUnit) || fixedCosts < 0 || sellingPricePerUnit <= 0 || variableCostsPerUnit < 0) {
        resultDiv.innerHTML = '<p style="color: red;">Please enter valid positive numbers for all fields. Selling price per unit must be greater than zero.</p>';
        return;
    }

    if (sellingPricePerUnit <= variableCostsPerUnit) {
        resultDiv.innerHTML = '<p style="color: red;">Selling Price Per Unit must be greater than Variable Costs Per Unit for a meaningful break-even point.</p>';
        return;
    }

    const contributionMarginPerUnit = sellingPricePerUnit - variableCostsPerUnit;
    const breakEvenPointUnits = fixedCosts / contributionMarginPerUnit;
    const breakEvenPointRevenue = breakEvenPointUnits * sellingPricePerUnit;

    // Redirect to a new result page and pass values as URL parameters
    window.location.href = `break_even_result.html?fixedCosts=${fixedCosts.toFixed(2)}&sellingPricePerUnit=${sellingPricePerUnit.toFixed(2)}&variableCostsPerUnit=${variableCostsPerUnit.toFixed(2)}&breakEvenPointUnits=${breakEvenPointUnits.toFixed(2)}&breakEvenPointRevenue=${breakEvenPointRevenue.toFixed(2)}`;
});
