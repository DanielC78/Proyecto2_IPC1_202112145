import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";
describe("Prueba en el archivo 08-imp-exp", () => {
  test("Debe retornar un héroe", () => {
    const id = 1;

    const heroe = getHeroeById(id);

    const heroeData = heroes.find((hereo) => heroe.id === id);
    expect(heroe).toEqual(heroeData);
  });

  test("debe retornar undefined si no exist el héroe", () => {
    const id = 10;

    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("Debe retornar un arreglo con los héroes de DC", () => {
    const owner = "DC";

    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter((h) => h.owner === owner);

    expect(heroes).toEqual(heroesData);
  });

  test("Debe retonar un arreglo con los héroes de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
  });
});
