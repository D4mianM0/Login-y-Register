// register.js
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el formulario y agregar un evento para el envío
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevenir el envío predeterminado del formulario

        // Obtener los valores de correo y contraseña
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Imprimir los valores en la consola para verificar
        console.log("Correo:", email);
        console.log("Contraseña:", password);

        // Aquí puedes realizar la lógica de registro, por ejemplo, enviar los datos a un servidor
        // Puedes usar fetch() o una biblioteca de AJAX para enviar los datos al servidor

        // Después de que el registro sea exitoso, puedes redirigir al usuario a la página de inicio de sesión
        // window.location.href = "login.html";
    });
});
