// Función para validar el login
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('login-error');

    if (username === 'juan' && password === '123') {
        // Redirigir a register.html
        window.location.href = 'register.html';
        return false; // Evitar que el formulario se envíe
    } else {
        error.textContent = 'Usuario o contraseña incorrectos';
        return false; // Evitar que el formulario se envíe
    }
}

// Función para manejar el registro
function submitRegistration() {
    // Aquí puedes agregar validaciones adicionales si lo deseas

    // Redirigir a ok.html
    window.location.href = 'ok.html';
    return false; // Evitar que el formulario se envíe
}
