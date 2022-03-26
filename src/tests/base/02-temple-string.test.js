import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-temple-string", () => {
  test("Prueba en el método getSaludo", () => {
    const nombre = "Daniel";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });
});
