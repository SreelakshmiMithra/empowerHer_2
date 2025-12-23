import { AppContext } from "../context/AppContext";
import Component2 from "./Component2";

function Component1() {
  const values = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50,
    f: 60,
  };

  return (
    <AppContext.Provider value={values}>
      <Component2 />
    </AppContext.Provider>
  );
}

export default Component1;
