import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  //foco...
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "number_add2":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: action.payload } };
    case "sevenDiv":
      return { ...state, number: state.number * 7 };
    case "divTwenty-five":
      return { ...state, number: state.number / 25 };
    case "parsNumber":
      return { ...state, number: parseInt(state.number) };
    case "numberN":
      return { ...state, number: state.number + action.payload };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <SectionTitle title="Exercico #01" />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuario</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "Maria" })}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_add2" })}
          >
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "sevenDiv" })}
          >
            *7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "divTwenty-five" })}
          >
            /7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "parsNumber" })}
          >
            Parse dos numeros
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberN", payload: -9 })}
          >
            -9
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
