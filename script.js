function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    alert(`Welcome, ${username}!`);
    window.location.href = 'index.html';
}

function placeOrder(event) {
    event.preventDefault();
    const foodItem = document.getElementById('foodItem').value;
    const quantity = document.getElementById('quantity').value;

    if (!foodItem || !quantity) {
        alert("Please enter food item and quantity!");
        return;
    }

    const message = `Hello, I would like to order ${quantity} x ${foodItem}.`;

    // Replace below with your real WhatsApp number (without + sign, add country code)
    const phoneNumber = "917806967084"; // <-- PUT YOUR PHONE NUMBER HERE

    // WhatsApp link
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    document.getElementById('order-status').innerText = `Redirecting to WhatsApp...`;
}
