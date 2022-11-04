const formulario = document.getElementById("login-form");

const login = async (event) => {
  event.preventDefault();
  const formulario = event.currentTarget;
  const isValid = formulario.checkValidity();

  if (!isValid) return formulario.classList.add("was-validated");
  formulario.classList.remove("was-validated");

  const data = Object.fromEntries(new FormData(formulario));

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

  localStorage.setItem("cur_user", JSON.stringify(userData));

  window.location.href = "/index.html";
};

formulario?.addEventListener("submit", login);
