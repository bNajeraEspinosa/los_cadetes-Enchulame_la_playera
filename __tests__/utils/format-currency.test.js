import { formatCurrency } from "../../JS/utils/format-currency.js";

describe("formatCurrency", () => {
  it("Debe retornar el valor formateado", () => {
    const result = formatCurrency({ amount: 100, format: "mxn" });
    expect(result).toBe("$100.00");
  });
  it("Debe retornar null si no se le pasa el parámetro 'amount' o c 'format'", () => {
    const result = formatCurrency({ amount: 100 });
    expect(result).toBeNull();

    const result2 = formatCurrency({ format: "mxn" });
    expect(result2).toBeNull();
  });
  it('Debe retornar null si el parámetro "format" no es válido', () => {
    const result = formatCurrency({ amount: 100, format: "mx" });
    expect(result).toBeNull();
  });
});
