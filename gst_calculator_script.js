document.getElementById('calculateGstBtn').addEventListener('click', () => {
    const originalPrice = parseFloat(document.getElementById('originalPrice').value);
    const gstPercentage = parseFloat(document.getElementById('gstPercentage').value);
    const resultDiv = document.querySelector('.result');

    if (isNaN(originalPrice) || isNaN(gstPercentage)) {
        resultDiv.innerHTML = '<p style="color: red;">Please enter valid numbers for price and GST percentage.</p>';
        return;
    }

    const gstAmount = (originalPrice * gstPercentage) / 100;
    const finalPrice = originalPrice + gstAmount;

    // Redirect to a new result page and pass values as URL parameters
    window.location.href = `gst_result.html?originalPrice=${originalPrice.toFixed(2)}&gstPercentage=${gstPercentage.toFixed(2)}&gstAmount=${gstAmount.toFixed(2)}&finalPrice=${finalPrice.toFixed(2)}`;
});
