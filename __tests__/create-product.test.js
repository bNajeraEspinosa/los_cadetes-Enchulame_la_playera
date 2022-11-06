import { jest } from '@jest/globals';
import { crearProducto } from '../JS/create-product.js'

const mockProduct = {
  name: 'Test Item',
  description: 'Test description',
  description_short: 'Test short description',
  price: 'Test price',
  img: 'Test image',
  stock: 'Test stock',
  category: 'Test category',
}

const mockForm = {
  checkValidity: jest.fn(() => true),
  classList: {
    add: jest.fn(),
    remove: jest.fn(),
  },
  reset: jest.fn(),
  addEventListener: jest.fn(),
}

global.FormData = jest.fn()

const response = { json: jest.fn(() => Promise.resolve(mockProduct)) }

jest.spyOn(Object, 'fromEntries').mockImplementation(() => mockProduct)

global.bootstrap = {
  Toast: jest.fn().mockImplementation(() => ({
    show: jest.fn(),
  }))
}

describe('create-product.js', () => {

  beforeEach(() => {
    jest.clearAllMocks()
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve(response))
  })

  describe('crearProducto function', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      currentTarget: mockForm,
    }
    // Evento
    it('Debe prevenir el comportamiento por defecto del formulario', async () => {
      await crearProducto(mockEvent)
      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1)
    })
    // Validaciones
    it('Debe validar el formulario', async () => {
      await crearProducto(mockEvent)
      expect(mockForm.checkValidity).toHaveBeenCalled()
    })
    it('Debe agregar la clase was-validated al formulario si fue validado incorrectamente', async () => {
      mockForm.checkValidity.mockReturnValueOnce(false)
      await crearProducto(mockEvent)
      expect(mockForm.classList.add).toHaveBeenCalledWith('was-validated')
    })
    it('Debe detener la ejecución del formulario si no es válido', async () => {
      mockForm.checkValidity.mockReturnValueOnce(false)
      await crearProducto(mockEvent)
      expect(global.fetch).not.toHaveBeenCalled()
    })
    it('Debe remover la clase was-validated al formulario si fue validado correctamente', async () => {
      await crearProducto(mockEvent)
      expect(mockForm.classList.remove).toHaveBeenCalledWith('was-validated')
    })

    // Conversión de entradas
    it('Debe convertir las entradas del formulario a un objeto con atributos', async () => {
      await crearProducto(mockEvent)
      expect(Object.fromEntries).toHaveBeenCalledWith(new FormData(mockForm))
      expect(Object.fromEntries).toHaveBeenCalledTimes(1)
      expect(Object.fromEntries).toHaveReturnedWith(mockProduct)
    })

    // Fetch
    it('Debe ejecutar el fetch con los datos del formulario', async () => {
      await crearProducto(mockEvent)
      expect(global.fetch).toHaveBeenCalledWith('https://reqres.in/api/users', {
        method: 'POST',
        body: JSON.stringify(mockProduct),
      })
      expect(global.fetch).toHaveBeenCalledTimes(1)
    })
    it('Debe llamar al metodo .json', async () => {
      await crearProducto(mockEvent)
      expect(response.json).toHaveBeenCalledTimes(1)
      expect(response.json).toHaveReturnedWith(Promise.resolve(mockProduct))
    })
    it('Debe ejecutar la alerta si el fetch falla', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.reject(new Error('Error')))
      await crearProducto(mockEvent)
      expect(bootstrap.Toast).toHaveBeenCalled()
    })

    it('Debe limpiar el formulario', async () => {
      await crearProducto(mockEvent)
      expect(mockForm.reset).toHaveBeenCalled()
    })
  })

})

