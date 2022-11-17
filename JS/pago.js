import { handleSubmitForm } from "./handlers/handle-submit-form.js";
import { hideLoading, showAlert, showLoading } from "./handlers/handle-alert.js";
import { payment } from "./services/payment.service.js";
import { setInLocalStorage } from "./services/local-storage.service.js";

export const submitCheckout = async (e) => {
    e.preventDefault();
    const currentForm = e.currentTarget;
    const formData = handleSubmitForm(currentForm); //Realiza validación
    if (!formData) return;
    try {
        showLoading();
        const data = await payment(formData);
        console.log(data)
        setInLocalStorage("payment", data);
        currentForm.reset();
    } catch (error) {
        showAlert({ status: "error", message: error?.message });
    } finally {
        hideLoading();
    }
};

const formElement = document.getElementById("checkout-form");
formElement?.addEventListener("submit", submitCheckout);