

export const get = async ({ url, headers }) => {
  const requestOptions = {
    method: "GET",
    headers
  }

  const data = await fetch(url, requestOptions)
  return handleResponse(data)
}


export const post = async ({ url, body, headers = {} }) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body)
  }

  return await fetch(url, requestOptions).then(handleResponse)
}


const handleResponse = (response) => {
    return response.json().catch((error) => {
      throw error
    }) ;
}

export default {
  get,
  post
}