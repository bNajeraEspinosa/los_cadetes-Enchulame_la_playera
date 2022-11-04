const formElement = document.getElementById("register-form");

const submitRegister = async (e) => {
  e.preventDefault();

  const isValid = formElement.checkValidity();
  if (!isValid) return formElement.classList.add("was-validated");
  formElement.classList.remove("was-validated");

  const data = Object.fromEntries(new FormData(formElement));

  const response = await fetch("https://reqres.in/api/users", {
    body: JSON.stringify(data),
    method: "POST",
  });

  const userData = await response.json();

  try {
    const response = await fetch("https://reqres.in/api/users", {
      body: JSON.stringify(data),
      method: "POST",
    });
    const userData = await response.json();
  } catch (error) {
    console.log(error);
  }

  localStorage.setItem("cur_user", JSON.stringify(data));
  //console.log(userData);
  window.location.href = "/index.html";
};
formElement.addEventListener("submit", submitRegister);
