const formElement = document.getElementById("register-form");

export const submitRegister = async (e) => {
  e.preventDefault();

  const currentForm = e.currentTarget;

  const isValid = currentForm.checkValidity();
  if (!isValid) return currentForm.classList.add("was-validated");
  currentForm.classList.remove("was-validated");

  const data = Object.fromEntries(new FormData(currentForm));

  try {
    const response = await fetch("https://mockend.com/alaanescobedo/db-server/users", {
      body: JSON.stringify(data),
      method: "POST",
    });
    const userData = await response.json();

    localStorage.setItem("cur_user", JSON.stringify(userData));
    currentForm.reset();
    window.location.href = "/index.html";
  } catch (error) {
    console.log(error);
  }

};
formElement?.addEventListener("submit", submitRegister);
