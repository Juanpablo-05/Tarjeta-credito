import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

function App() {
  const [state, setState] = useState({
    name: "",
    number: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const handleInputChange = (e)=>{
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }

  const handleFocus = (e)=>{
    setState({
      ...state,
      focus: e.target.name
    })
  }

  return (
    <div>
      <div className="container">
        <Cards
          name={state.name}
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          focused={state.focus}
        />
        <div className="container-input">
          <div className="input-grups">
            <div className="label">
              <label htmlFor="number">Numero de Tarjeta</label>
            </div>
            <input
              type="text"
              id="number"
              name="number"
              maxLength={"16"}
              required
              autoComplete="off"
              onChange={handleInputChange}
              onFocus={handleFocus}
            />
            <span className="barra"></span>
          </div>

          <div className="input-grups">
            <div className="label">
              <label htmlFor="name">Nombre</label>
            </div>
            <input
              type="text"
              id="name"
              name="name"
              maxLength={"30"}
              required
              autoComplete="off"
              onChange={handleInputChange}
              onFocus={handleFocus}
            />
            <span className="barra"></span>
          </div>

          <div className="container-grups">
            <div className="input-grup">
              <div className="label">
                <label htmlFor="expiry">Fecha</label>
              </div>
              <input
                type="text"
                id="expiry"
                name="expiry"
                maxLength={"4"}
                required
                autoComplete="off"
                onChange={handleInputChange}
                onFocus={handleFocus}
              />
              <span className="barra"></span>
            </div>
            <div className="input-grup">
              <div className="label">
                <label htmlFor="cvc">cvc</label>
              </div>
              <input
                type="text"
                id="cvc"
                name="cvc"
                maxLength={"4"}
                required
                autoComplete="off"
                onChange={handleInputChange}
                onFocus={handleFocus}
              />
              <span className="barra"></span>
            </div>
          </div>
        </div>
        <button className="btn-pagar">PAGAR</button>
      </div>
    </div>
  );
}

export default App;
