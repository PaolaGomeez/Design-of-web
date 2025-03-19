// Verify session user
const user = JSON.parse(sessionStorage.getItem("user"));
if (!user) {
    window.location.href = "index.html";
} else {
    document.getElementById("username").textContent = user.name;
}