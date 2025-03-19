document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("../backend/login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (data.success) {
        sessionStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error-message").textContent = data.message;
    }
});
