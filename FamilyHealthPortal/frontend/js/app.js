document.addEventListener('DOMContentLoaded', () => {
    console.log("Family Health Portal Loaded!");

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                loginMessage.textContent = data.message;
                loginMessage.style.color = 'green';
            } else {
                loginMessage.textContent = data.message;
                loginMessage.style.color = 'red';
            }
        } catch (error) {
            loginMessage.textContent = 'Error connecting to the server!';
            loginMessage.style.color = 'red';
        }
    });
});
const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
});
