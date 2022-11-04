const formElement = document.getElementById("register-form");

const submitRegister = async (e) => {
  e.preventDefault();

  const isValid = formElement.checkValidity();
  if (!isValid) return formElement.classList.add("was-validated");
  formElement.classList.remove("was-validated");

  const data = Object.fromEntries(new FormData(formElement));

  try {
    const response = await fetch("https://mockend.com/alaanescobedo/db-server/users", {
      body: JSON.stringify(data),
      method: "POST",
    });
    const userData = await response.json();

    localStorage.setItem("cur_user", JSON.stringify(userData));
    window.location.href = "/index.html";
  } catch (error) {
    console.log(error);
  }

};
formElement.addEventListener("submit", submitRegister);
