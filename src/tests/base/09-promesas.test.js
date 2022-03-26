import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas en 09-promesas.js", () => {
  test("getHeroById debe retornar un héroe async", (done) => {
    const id = 1;

    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBe(heroes[0]);
        done();
      })
      .catch(done);
  });

  test("Debe de obtener un error si el heroe no existe", (done) => {
    const id = 10;

    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
