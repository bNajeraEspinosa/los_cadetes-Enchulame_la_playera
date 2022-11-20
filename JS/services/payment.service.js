import { ENDPOINTS } from "../constants/endpoints.js";

export const payment = async ({
    firstName,
    lastName,
    address,
    address2,
    country,
    state,
    zip,
    saveInfo,
    credit,
    debit,
    ccName,
    ccNumber,
    ccExpiration,
    ccCvv }) => {
    try {
        // const response = await fetch(`${ENDPOINTS.PAYMENT}`, {
        const response = await fetch("https://reqres.in/api/users", {
            body: JSON.stringify({
                firstName,
                lastName,
                address,
                address2,
                country,
                state,
                zip,
                saveInfo,
                credit,
                debit,
                ccName,
                ccNumber,
                ccExpiration,
                ccCvv
            }),
            method: "POST",
        });
        return response.json();
    } catch (error) {
        throw error;
    }
};