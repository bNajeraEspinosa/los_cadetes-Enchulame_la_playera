


const formElement = document.getElementById("register-form");

const submitRegister = async (e) => {
    e.preventDefault();

    const isValid = formElement.checkValidity();
    if (!isValid) return formElement.classList.remove('was-validated');

    const data = Object.fromEntries(new FormData(formElement));

    const userData = await fetch("https://reqres.in/api/users", {
        body, method:'POST' .JSON.stringify(data),
    })
    console.log(userData);
}

formElement.addEventListener('submit', submitRegister);