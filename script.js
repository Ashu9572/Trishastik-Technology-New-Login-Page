document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        alert(`Logged in as: ${username}`);
    } else {
        alert("Please fill in both fields.");
    }
});

function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    alert("Google Login Successful!");
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID",
        callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
        document.querySelector(".g_id_signin"),
        { theme: "outline", size: "large" }
    );
    google.accounts.id.prompt(); 
};
