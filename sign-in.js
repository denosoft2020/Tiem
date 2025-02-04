document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signInForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();
        const acceptLicense = document.getElementById("acceptLicense").checked;
        
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        
        if (!acceptLicense) {
            alert("You must accept the license to proceed.");
            return;
        }
        
        alert("Sign-up successful! Username: " + username + ", Email: " + email);
    });
});
