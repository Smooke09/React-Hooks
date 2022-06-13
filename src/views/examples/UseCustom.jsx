import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

const UseRef = (props) => {
  const [count, inc, dec] = useCounter();
  const url = "http://files.cod3r.com.br/curso-react/estados.json";
  const response = useFetch(url);

  function showState(states) {
    return states.map((state) => (
      <li key={state.nome}>
        {state.nome} - {state.sigla}
      </li>
    ));
  }

  return (
    <div className="UseCustom">
      <PageTitle
        title="Seu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />
      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => inc()}>
            Inc
          </button>
          <button className="btn" onClick={() => dec()}>
            Dec
          </button>
        </div>
      </div>
      <SectionTitle title="Exercicio #02" />
      <div className="center">
        <ul>{response.data ? showState(response.data) : false}</ul>
      </div>
    </div>
  );
};

export default UseRef;
