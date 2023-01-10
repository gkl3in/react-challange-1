import { useEffect, useState } from 'react';
import axios from "axios";

/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência

Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id


DICA:
imagem => sprites.front_default
experiência => base_experience

EXTRA: se puder ordene por nome.
*/

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: '',
    baseExperience: '',
    frontDefault: ''
  });

  const fetchData = () => {
    return axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        let res = response.data.results.map((result) => {
          return fetchDataChildren(result.url);

        });
        console.log(res);
      });
  }

  const fetchDataChildren = (url) => {
    return axios.get(url)
      .then((response) => {
        return response.data.name
  
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h3>desafio fernandev</h3>
      <h1>consumir api pokémon</h1>
      {/* {user?.map(user => (
        <div>
          <img src="https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png"></img>
          <p>{user.name}</p>
        </div>
      ))} */}
    </>
  );
}

export default App;
