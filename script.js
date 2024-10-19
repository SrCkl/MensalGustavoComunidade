document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("errorMessage");

    errorMessage.style.display = "none";

    if (password !== confirmPassword) {
        errorMessage.textContent = "As senhas não coincidem.";
        errorMessage.style.display = "block";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "A senha deve ter pelo menos 6 caracteres.";
        errorMessage.style.display = "block";
        return;
    }

    alert("Cadastro realizado com sucesso!");
    document.getElementById("registerForm").reset();
});
