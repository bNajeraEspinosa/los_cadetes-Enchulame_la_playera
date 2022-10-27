import fetch from '../utils/fetch.js'

export const postUser = async () => {
  try {
    return await fetch.post({
      url: 'http://localhost:3000/productos'
    })
  } catch (error) {
    throw error
  }
}

export default {
  post: postUser 
}