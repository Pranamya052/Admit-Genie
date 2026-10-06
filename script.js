function sendMessage() {
    const inputField = document.getElementById('user-input');
    const chatWindow = document.getElementById('chat-window');
    const userQuery = inputField.value.trim();

    if (userQuery === "") return;

    // 1. Display User's Message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message outgoing';
    userMessageDiv.innerHTML = `<p>${userQuery}</p>`;
    chatWindow.appendChild(userMessageDiv);

    // 2. Clear input and scroll to bottom
    inputField.value = '';
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // 3. Simulate AI Response (In a real app, this calls the Admit Genie AI API)
    setTimeout(() => {
        const aiResponse = generateResponse(userQuery);
        const aiMessageDiv = document.createElement('div');
        aiMessageDiv.className = 'message incoming';
        aiMessageDiv.innerHTML = `<p>${aiResponse}</p>`;
        chatWindow.appendChild(aiMessageDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 1000); // Delay for a more realistic feel
}

function generateResponse(query) {
    const lowerQuery = query.toLowerCase();

    // Simple keyword-based simulated responses
    if (lowerQuery.includes('fee') || lowerQuery.includes('fees')) {
        return "Our current tuition fees range from $10,000 to $15,000 per year, depending on the course. I can email you the detailed fee structure for your specific program!";
    } else if (lowerQuery.includes('deadline') || lowerQuery.includes('apply')) {
        return "The application deadline for the Fall semester is **April 30th**. Be sure to submit all required documents before then!";
    } else if (lowerQuery.includes('scholarship')) {
        return "We offer merit-based and need-based scholarships. You can find all the details and the application form on our Scholarship page. Would you like a direct link?";
    } else if (lowerQuery.includes('eligibility')) {
        return "Eligibility typically requires a high school diploma (or equivalent) with a minimum 70% aggregate score and a passing score on the CET exam. Which course are you interested in?";
    } else {
        return "That's a great question! I specialize in answering queries about eligibility, deadlines, documents, fees, scholarships, and courses. How else can I assist with your admission process?";
    }
}

// Allow sending message with the 'Enter' key
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});