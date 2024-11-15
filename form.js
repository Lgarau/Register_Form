// script.js

function validateForm() {
    // Ottieni i valori degli input
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("error-message");
    const reset = document.getElementById("reset");

    // Verifica se i campi sono vuoti
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        errorMessage.textContent = "Tutti i campi sono obbligatori.";
        return false;
    }

    // Verifica che le password coincidano
    if (password !== confirmPassword) {
        errorMessage.textContent = "Le password non coincidono.";
        return false;
    }

    // Se tutto è valido
    errorMessage.textContent = "";
    alert("Registrazione completata con successo!");
    return true;
}
