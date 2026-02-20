const form = document.getElementById('creditCardForm');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Extract and clean values
    const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, ''); 
    const month = parseInt(document.getElementById('month').value, 10);
    const yearStr = document.getElementById('year').value;
    const year = parseInt(yearStr, 10) + 2000; 

    // Validate exact card number from instructions
    if (cardNumber !== '1234123412341234') {
        displayFeedback('Error: Card number must be exactly 1234123412341234.', 'error');
        return;
    }

    // Date validation
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; 
    const currentYear = currentDate.getFullYear();

    if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
        displayFeedback('Error: Invalid expiration date format.', 'error');
        return;
    }

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
        displayFeedback('Error: This credit card is expired.', 'error');
        return;
    }

    displayFeedback('Success! Your payment was processed.', 'success');
});

function displayFeedback(message, className) {
    feedback.textContent = message;
    feedback.className = className; 
}