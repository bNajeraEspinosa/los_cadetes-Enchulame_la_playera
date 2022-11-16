import { jest } from "@jest/globals";
import { login } from "../JS/loginapi.js";

const mockProduct = {
  username: "Test Item",
  password: "123456",
};

const mockForm = {
  checkValidity: jest.fn(() => true),
  classList: {
    add: jest.fn(),
    remove: jest.fn(),
  },
  reset: jest.fn(),
  addEventListener: jest.fn(),
};

global.FormData = jest.fn();

const response = { json: jest.fn(() => Promise.resolve(mockProduct)) };

jest.spyOn(Object, "fromEntries").mockImplementation(() => mockProduct);

// spy local storage
jest.spyOn(Storage.prototype, "setItem");

// mock window.location.href
global.window = Object.create(window);
Object.defineProperty(window, "location", {
  value: {
    href: jest.fn(),
  },
});

describe("loginapi.js", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve(response));
  });

  describe("login function", () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      currentTarget: mockForm,
    };
    // Evento
    it("Debe prevenir el comportamiento por defecto del formulario", async () => {
      await login(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });
    // Validaciones
    it("Debe validar el formulario", async () => {
      await login(mockEvent);
      expect(mockForm.checkValidity).toHaveBeenCalled();
    });
    it("Debe agregar la clase was-validated al formulario si fue validado incorrectamente", async () => {
      mockForm.checkValidity.mockReturnValueOnce(false);
      await login(mockEvent);
      expect(mockForm.classList.add).toHaveBeenCalledWith("was-validated");
    });
    it("Debe detener la ejecución del formulario si no es válido", async () => {
      mockForm.checkValidity.mockReturnValueOnce(false);
      await login(mockEvent);
      expect(global.fetch).not.toHaveBeenCalled();
    });
    it("Debe remover la clase was-validated al formulario si fue validado correctamente", async () => {
      await login(mockEvent);
      expect(mockForm.classList.remove).toHaveBeenCalledWith("was-validated");
    });

    // Conversión de entradas
    it("Debe convertir las entradas del formulario a un objeto con atributos", async () => {
      await login(mockEvent);
      expect(Object.fromEntries).toHaveBeenCalledWith(new FormData(mockForm));
      expect(Object.fromEntries).toHaveBeenCalledTimes(1);
      expect(Object.fromEntries).toHaveReturnedWith(mockProduct);
    });

    // Fetch
    it("Debe ejecutar el fetch con los datos del formulario", async () => {
      await login(mockEvent);
      expect(global.fetch).toHaveBeenCalledWith(
        "https://mockend.com/alaanescobedo/db-server/users",
        {
          method: "POST",
          body: JSON.stringify(mockProduct),
        }
      );
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });
    it("Debe llamar al metodo .json", async () => {
      await login(mockEvent);
      expect(response.json).toHaveBeenCalledTimes(1);
      expect(response.json).toHaveReturnedWith(Promise.resolve(mockProduct));
    });

    // LocalStorage
    it("Debe guardar el usuario en el localStorage", async () => {
      await login(mockEvent);
      expect(global.localStorage.setItem).toHaveBeenCalledWith(
        "cur_user",
        JSON.stringify(mockProduct)
      );
      expect(global.localStorage.setItem).toHaveBeenCalledTimes(1);
    });

    it("Debe limpiar el formulario", async () => {
      await login(mockEvent);
      expect(mockForm.reset).toHaveBeenCalled();
    });

    it("Debe redireccionar a la página de inicio", async () => {
      await login(mockEvent);
      expect(window.location.href).toBe("/index.html");
    });
  });
});
