import fetch from "../utils/fetch.js"

export const sendEmail = async ({ data }) => {
  try {
    return await fetch.post({
      url: "http://localhost:3000/email",
      body: data
    })
  } catch (error) {
    throw error
  }
}

export default {
  send: sendEmail
}