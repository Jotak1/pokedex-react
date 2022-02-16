import React from "react";
import { useState, useEffect } from "react";

// Estilos
import "./Pokemon.scss";
import { getBackcolor } from "./../color/Colortype";
import axios from "axios";

function Pokemon(props) {
  const { name, types, id } = props.Pokedetail;
    console.log(props.Pokedetail)
  const [evolutionPoke, setEvolutionPoke] = React.useState({});

  //llamada a la api para obtener las evoluciones
  const getEvolutions = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then((res) => {
        const evolutionChainUrl = res.data.evolution_chain.url;
        axios.get(evolutionChainUrl).then((res) => {
          setEvolutionPoke(res.data.chain);
        });
      })
      .catch((err) => console.log(err));
  };
  const showEvolutions = () => {
    let evolutions = [];
    if (evolutionPoke.evolves_to && evolutionPoke.evolves_to.length > 0) {
      let primera = {
        name: evolutionPoke.species.name,
        url: evolutionPoke.species.url,
        id: evolutionPoke.species.url.split("/")[6],
      };
      evolutions.push(primera);
      let segundaArray = [];
      let terceraArray = [];
      evolutionPoke.evolves_to.map((item) => {
        let segundo = {
          name: item.species.name,
          url: item.species.url,
          id: item.species.url.split("/")[6],
        };
        segundaArray.push(segundo);
        if (item.evolves_to && item.evolves_to.length > 0) {
          item.evolves_to.map((item) => {
            let tercera = {
              name: item.species.name,
              url: item.species.url,
              id: item.species.url.split("/")[6],
            };
            terceraArray.push(tercera);
          });
        }
      });
      if (segundaArray.length > 0) {
        evolutions.push(...segundaArray);
      }
      if (terceraArray.length > 0) {
        evolutions.push(...terceraArray);
      }
      return evolutions.map((item) => {
        return (
          <div className="evolutionDetail" key={item.id}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
              alt={item.name}
            />
            <p>{item.name}</p>
          </div>
        );
      });
    }
  };

  useEffect(() => {
    getEvolutions();
  }, []);

  return (
    <div className="pokemondet">
      <div className="detail"
                  style={{ background: getBackcolor(props) }}

      >
        <div
          className="Cont-detail"
        >
          {/* <div className="spec-flip-container">
            <div className="spec-flipper"> */}
              <div className="spec-front">
                <img
                  className="imgfront"
                  src={props.Pokedetail.sprites.other["official-artwork"].front_default}
                  alt="pokemon"
                />
              </div>
              {/* <div className="spec-back">
                <img
                  className="imgback"
                  src={props.Pokedetail.sprites.back_default}
                  alt="pokemon"
                />
              </div> */}
            {/* </div>
          </div> */}
        </div>
        <div className="SpecEvolution">
            <div className="Specs">
            <h3> N°{id} {name.charAt(0).toUpperCase() + name.slice(1)} </h3>
            </div>
          <div className="spec-container">
            <div className="Specs1">
              Exp:{props.Pokedetail.base_experience} Height:
              {props.Pokedetail.height / 10}m Weight:
              {props.Pokedetail.weight / 10}Kg
            </div>
            <div className="Specs1">
              Tipo: <br /> {props.Pokedetail.types[0].type.name}{" "}
              {props.Pokedetail.types[1] && props.Pokedetail.types[1].type.name}
            </div>
            <div className="Specs1">
              Abilities: <br /> {props.Pokedetail.abilities[0].ability.name}{" "}
              {props.Pokedetail.abilities[1] &&
                props.Pokedetail.abilities[1].ability.name}
            </div>
            <div className="Specs1">
              Stats: <br />
              {props.Pokedetail.stats[0].stat.name}:
              {props.Pokedetail.stats[0].base_stat}{" "}
              {props.Pokedetail.stats[1].stat.name}:
              {props.Pokedetail.stats[1].base_stat}{" "}
              {props.Pokedetail.stats[2].stat.name}:
              {props.Pokedetail.stats[2].base_stat}{" "}
              {props.Pokedetail.stats[3].stat.name}:
              {props.Pokedetail.stats[3].base_stat}{" "}
              {props.Pokedetail.stats[4].stat.name}:
              {props.Pokedetail.stats[4].base_stat}{" "}
              {props.Pokedetail.stats[5].stat.name}:
              {props.Pokedetail.stats[5].base_stat}
            </div>
          </div>
          <div className="evolution">
            <div className="evolution-title">
              <h2>Evoluciones</h2>
            </div>
            <div className="evolution-container">{showEvolutions()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
