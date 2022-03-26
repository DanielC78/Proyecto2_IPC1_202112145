import CounterApp from "../CounterApp";
import { shallow } from "enzyme";

describe("Prueba de CounterAppp", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CounterApp value={10} />);
  });

  test("Debe hacer match con la snapshot", () => {
    const wrapper = shallow(<CounterApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el valor por defecto de 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);

    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe("100");
  });

  test("debe de incrementar en +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text().trim();
    expect(counterText).toBe("11");
  });

  test("debe de reiniciar el valor", () => {
    const valorInicial = 105;
    const wrapper = shallow(<CounterApp value={valorInicial} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const counterText = wrapper.find("h2").text().trim();

    expect(counterText).toBe(`${valorInicial}`);
  });
});
