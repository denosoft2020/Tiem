document.addEventListener("DOMContentLoaded", () => {
    const googleLogin = document.getElementById("googleLogin");
    const facebookLogin = document.getElementById("facebookLogin");
    const createAccount = document.getElementById("createAccount");

    googleLogin.addEventListener("click", () => {
        alert("Google login clicked! Implement OAuth here.");
        // TODO: Add actual Google authentication logic
    });

    facebookLogin.addEventListener("click", () => {
        alert("Facebook login clicked! Implement OAuth here.");
        // TODO: Add actual Facebook authentication logic
    });

    createAccount.addEventListener("click", () => {
        window.location.href = "sign_up.html";
    });
});
