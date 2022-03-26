import { getImagen } from "../../base/11-async-await";

describe("Pruebas en el archivo 11-async-await", () => {
  test("Debe de retonar el url de la imagen", async () => {
    
    const url = await getImagen();

    expect(typeof url).toBe("string");
  });
});
