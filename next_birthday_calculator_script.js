document.addEventListener('DOMContentLoaded', () => {
    const birthDateInput = document.getElementById('birthDate');
    const calculateNextBirthdayBtn = document.getElementById('calculateNextBirthdayBtn');

    calculateNextBirthdayBtn.addEventListener('click', () => {
        const birthDateStr = birthDateInput.value;

        if (!birthDateStr) {
            alert('Please enter your birth date.');
            return;
        }

        const birthDate = new Date(birthDateStr);
        const today = new Date();

        // Set hours to 0 to compare dates accurately
        birthDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);

        let nextBirthdayYear = today.getFullYear();
        let nextBirthday = new Date(birthDate);
        nextBirthday.setFullYear(nextBirthdayYear);

        // If the birthday has already passed this year, set it for next year
        if (nextBirthday < today) {
            nextBirthdayYear++;
            nextBirthday.setFullYear(nextBirthdayYear);
        }

        // Calculate the difference in days
        const timeDiff = nextBirthday.getTime() - today.getTime();
        const daysUntil = Math.ceil(timeDiff / (1000 * 3600 * 24));

        // Format the next birthday date for display
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedNextBirthday = nextBirthday.toLocaleDateString('en-IN', options);

        // Redirect to the result page with parameters
        window.location.href = `next_birthday_result.html?birthDate=${birthDateStr}&nextBirthday=${encodeURIComponent(formattedNextBirthday)}&daysUntil=${daysUntil}`;
    });
});
