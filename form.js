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
    const successMessage = document.createElement('p');
    successMessage.textContent = "Registrazione completata con successo!";
    successMessage.style.color = "green";
    document.querySelector('.form-container').appendChild(successMessage);
    }

//verifica mail per domini

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (!emailPattern.test(email)) {
    errorMessage.textContent = "Inserisci un'email valida.";
    return false;
}

//Verifica lunghezza minima pwd

if (password.length < 8) {
    errorMessage.textContent = "La password deve essere di almeno 8 caratteri.";
    return false;
}
if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
    errorMessage.textContent = "La password deve contenere lettere maiuscole, minuscole e numeri.";
    return false;
}

//Listener bottone reset

document.querySelector('input[type="reset"]').addEventListener('click', () => {
    errorMessage.textContent = "";
});
