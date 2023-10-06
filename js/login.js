// login.js
document.addEventListener('DOMContentLoaded', function () {
    // Este código se ejecutará cuando la página se haya cargado completamente

    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // Verificar las credenciales (agrega tu lógica de autenticación aquí)
        if (email === 'tu_correo@example.com' && password === 'tu_contraseña') {
            console.log('Inicio de sesión exitoso');
            alert('Inicio de sesión exitoso');
            // Aquí puedes redirigir al usuario a otra página o realizar otras acciones después del inicio de sesión
        } else {
            console.log('Credenciales incorrectas');
            alert('Credenciales incorrectas');
        }
    });
});


  
