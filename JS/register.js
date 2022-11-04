


const formElement = document.getElementById("login-form");

const submitRegister = async (e) => {
    e.preventDefault();

    const isValid = formElement.checkVAlidity();
    if (!isValid) return formElement.classList.remove('was-validated');

    const data = Object.fromEntries(new FormData(formElement));

    const userData = await fetch("https://reqres.in/api/users", {
        body: JSON.stringify(data),
    })
    setLocalUser(userData);
}

formElement.addEventListener('submit', submitRegister);