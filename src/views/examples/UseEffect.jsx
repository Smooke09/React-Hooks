import React, { useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import { useState } from "react";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

function verNumberValido(n) {
  if (n === "") {
    alert("Digite um numero Valido");
    window.location.reload();
  }
}
const UseEffect = (props) => {
  //Primeiro Exercicio
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);

  useEffect(
    function () {
      setFatorial(calcFatorial(number));
    },
    [number]
  );

  useEffect(
    function () {
      if (fatorial > 1000000) {
        document.title = "Eita!!!";
      }
    },
    [fatorial]
  );
  //Ex 02 par Ou impar
  const [status, setStatus] = useState("Impar");

  useEffect(
    function () {
      setStatus(number % 2 === 0 ? "Par" : "Impar");
    },
    [number]
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? "Nao existe" : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={verNumberValido(number)}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercicio #02" />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
