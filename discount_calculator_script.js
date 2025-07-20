document.getElementById('calculateDiscountBtn').addEventListener('click', () => {
    const originalPrice = parseFloat(document.getElementById('originalPrice').value);
    const discountPercentage = parseFloat(document.getElementById('discountPercentage').value);
    const resultDiv = document.querySelector('.result'); // This div is in discount_calculator.html, but we won't use it for displaying results directly.

    if (isNaN(originalPrice) || isNaN(discountPercentage) || originalPrice <= 0 || discountPercentage < 0 || discountPercentage > 100) {
        resultDiv.innerHTML = '<p style="color: red;">Please enter valid numbers for price and discount percentage (0-100).</p>';
        return;
    }

    const discountAmount = (originalPrice * discountPercentage) / 100;
    const finalPrice = originalPrice - discountAmount;

    // Redirect to a new result page and pass values as URL parameters
    window.location.href = `discount_result.html?originalPrice=${originalPrice.toFixed(2)}&discountPercentage=${discountPercentage.toFixed(2)}&discountAmount=${discountAmount.toFixed(2)}&finalPrice=${finalPrice.toFixed(2)}`;
});
