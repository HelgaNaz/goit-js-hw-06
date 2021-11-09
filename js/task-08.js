const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
const object = {};

function handleSubmit(event) {
    event.preventDefault();
    const [email, password] = event.target.elements;
    
    if (email.value === "" || password.value === "") {
        return alert("Заполните все поля!");
    }
    object.email = email.value;
    object.password = password.value;

    console.log(object);
    event.currentTarget.reset();
}