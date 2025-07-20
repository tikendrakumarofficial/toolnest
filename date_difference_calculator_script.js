document.getElementById('calculateDateDifferenceBtn').addEventListener('click', () => {
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const resultDiv = document.querySelector('.result');

    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        resultDiv.innerHTML = '<p style="color: red;">Please select valid start and end dates.</p>';
        return;
    }

    if (endDate < startDate) {
        resultDiv.innerHTML = '<p style="color: red;">End date cannot be before start date.</p>';
        return;
    }

    const timeDifference = endDate.getTime() - startDate.getTime();
    const dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    // Redirect to a new result page and pass values as URL parameters
    window.location.href = `date_difference_result.html?startDate=${startDateInput.value}&endDate=${endDateInput.value}&difference=${dayDifference}`;
});
