const formulario = document.getElementById("login-form");

export const login = async (event) => {
  event.preventDefault();
  const formulario = event.currentTarget;
  const isValid = formulario.checkValidity();

  if (!isValid) return formulario.classList.add("was-validated");
  formulario.classList.remove("was-validated");

  const data = Object.fromEntries(new FormData(formulario));

  try {
    const response = await fetch(
      "https://mockend.com/alaanescobedo/db-server/users",
      {
        body: JSON.stringify(data),
        method: "POST",
      }
    );
    const userData = await response.json();

    localStorage.setItem("cur_user", JSON.stringify(userData));
    formulario.reset();
    window.location.href = "/index.html";
  } catch (error) {
    console.log(error);
  }
};

formulario?.addEventListener("submit", login);
