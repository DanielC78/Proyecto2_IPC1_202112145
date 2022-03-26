test("Deben ser iguales los dos strings", () => {
  const mensaje = "Hola mundo";

  const mensaje2 = `Hola mundo`;

  expect(mensaje).toBe(mensaje2);
});
