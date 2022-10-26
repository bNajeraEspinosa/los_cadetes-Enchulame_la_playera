import fetch from '../utils/fetch.js'

export const getProducts = async () => {
  try {
    return await fetch.get({
      url: 'http://localhost:3000/productos'
    })
  } catch (error) {
    throw error
  }
}

export const postProducts = async (producto) => {
  try {
    return await fetch.post({
      url: 'http://localhost:3000/productos',
      body: producto
    })
  } catch (error) {
    throw error
  }
}

export default {
  get: getProducts,
  post: postProducts
}