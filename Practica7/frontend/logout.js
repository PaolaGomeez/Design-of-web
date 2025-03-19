// Logout
document.getElementById("logoutButton").addEventListener("click", function() {
    sessionStorage.clear();
    fetch("../backend/logout.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    });

    window.location.href = "index.html";
});