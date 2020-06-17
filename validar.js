function validar() {

    var name;
    name = document.getElementById("nombre").value;

    if (name === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if ((name.length > 30) || (isNaN(name) === false)) {
        alert("El nombre es muy largo o tienes algún caracter que no corresponde");
        return false;
    }

    var lastname;
    lastname = document.getElementById("apellidos").value;

    if (lastname === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if ((lastname.length > 80) || (isNaN(lastname) === false)) {
        alert("El apellido es muy largo o tienes algún caracter que no corresponde");
        return false;
    }

    var email;
    email = document.getElementById("correo").value;

    if (email === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if ((email.length > 100) || (email.includes(".") === false)) {
        alert("Introduzca un correo válido");
        return false;
    }

    var user;
    user = document.getElementById("usuario").value;

    if (user === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if (user.length > 20) {
        alert("El usuario no debe exceder los 20 caracteres");
        return false;
    }

    var password;
    password = document.getElementById("pass").value;

    if (password === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if ((password.length < 8) || (password.length > 15)) {
        alert("La contraseña debe tener entre 8 y 20 caracteres");
        return false;
    }

    var phone;
    phone = document.getElementById("telefono").value;

    if (phone === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    else if ((phone.length > 15) || (isNaN(phone) === true)) {
        alert("Intruduce un número de teléfono válido");
        return false;
    }
    alert(`Bienvenid@ ${name} ${lastname} te has registrado correctamente. Tu usuario es: ${user} y tu contraseña: ${pass}`);
}




