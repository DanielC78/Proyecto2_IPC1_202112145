import { render } from "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";

describe("Prueba del componente PrimeraApp", () => {
  test("debe de mostra el componente correctamente", () => {
    const saludo = "Hola soy Goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar un subtitulo enviado por props", () => {
    const saludo = "Hola, soy Goku";
    const subtitulo = "soy un sub";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    const textoParrafo = wrapper.find("p").text();
    console.log(textoParrafo);

    expect(textoParrafo).toBe(subtitulo);
  });
});
