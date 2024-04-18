import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [token, setToken] = useState();
  const [montagens, setMontagens] = useState();

  useEffect(() => {
    getMontagem();
  }, []);

  const getMontagem = async () => {
    // Declaramos um token manualmente para teste.
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvX2lkIjoxfQ.YT0aZGH9d-4tB_QyDvxieeypZJ_J-W39zRUBTj40wMo"
    const api_response = await fetch('http://localhost:3000/api/v1/montagens',
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      }
    ).catch((err) => {
      console.error("ops! ocorreu um erro" + err, console.error(err));
    });
    const data = await api_response.json();
    console.log(data)
    setMontagens(data);
  }

  return (
    <div className="App">
      <h2>Lista de Montagens</h2>
      <h2>Computadores Pessoal</h2>
      <ul>
        {montagens?.map((items, index) => (
            <li key={items.id}>
              Id: {items.id} - Processador: {items.processador} - Placa Mãe: {items.placa_mae} - Placa de Video: {items.placa_de_video} -  Email usuário: {items.usuario}
              {items.memorias.map((c, i) => (
                <li key={i}>
                  Memória Ram: {c.descricao} - {c.tamanho}GB
                </li>
              ))}
          </li>
        ))}
      </ul>
    </div>
  );
}