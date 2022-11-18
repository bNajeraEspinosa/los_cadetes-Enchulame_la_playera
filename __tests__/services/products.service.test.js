import {
  createProduct,
  getListProducts,
  getProductInfo,
} from "../../JS/services/products.service.js";
import { productMock } from "../mocks/product.mock.js";

describe("createProduct", () => {
  it("Debe retornar el producto creado", async () => {
    const result = await createProduct(productMock);
    expect(result).toEqual(productMock);
  });
  it("Debe retornar un error", async () => {
    const result = await createProduct({});
    expect(result).toEqual({ error: "Error al crear el producto" });
  });
});

describe("getListProducts", () => {
  it("Debe retornar la lista de productos", async () => {
    const result = await getListProducts();
    expect(result).toEqual([productMock]);
  });
  it("Debe retornar un error", async () => {
    const result = await getListProducts();
    console.log(result);
  });
});

describe("getProductInfo", () => {
  it("Debe retornar el producto", async () => {
    const result = await getProductInfo({ id });
    expect(result).toEqual(productMock);
  });
});
