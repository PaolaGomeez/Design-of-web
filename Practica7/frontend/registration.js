document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const data = { name, age, email, password };

    fetch('../backend/register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            document.getElementById('message').innerText = result.message || result.error;
            if (result.message) {
                document.getElementById('registrationForm').reset();
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2500);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('message').innerText = 'Error registering the user.';
        });
});
