function showAlert() {
    alert('¡hola, esta es una alerta desde JavaScript!');
}

const form = document.getElementById('myFrom');

form.addEventListener('submit', function (lala) {
    console.log("dentro de form");
    lala.preventDefault();
    validateForm();
});
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]{2,7}$/
    return regex.test(email);
}

function validateForm() {
    console.log("dentro de validador")
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
        alert('por favor ingrese un correo electronico valido.');
    } else {
        alert('correo electronico enviado correctamente');
    }
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})





