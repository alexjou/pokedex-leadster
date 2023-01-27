/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Paper } from '@mui/material';
import { PokeballMini } from '../../Components/Pokemon/Loading';
import api from '../../services/api';
import {
  ContainerPokedex,
  ContainerLeft,
  PokemonNameContainer,
  PokemonSprite,
  PokemonName,
  ContainerRight,
  ContainerStats,
  PanelRow,
  StatLine,
  TypeList,
  TypesTitle,
  TypesContainer,
  TypesText,
  Divider,
  DividerGap,
  ContainerDivider,
} from './styles';
import { IPokemon } from '../../interfaces';
import { padStats, PokemonEvolution } from './Components';

function Pokemon(): JSX.Element {
  const [pokemon, setPokemom] = useState<IPokemon>({
    name: '',
    description: '',
    types: [],
    id: 0,
    weight: 0,
    height: 0,
    stats: [],
    abilities: [],
    sprites: { front_default: '' },
    evoSprites: [],
    evoNames: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const { pokemonIndex } = useParams();
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const loadPokemonData = async () => {
    await api.get(`pokemon/${pokemonIndex}`).then((firstResponse) => {
      const {
        name,
        types,
        id,
        weight,
        height,
        stats,
        abilities,
        sprites,
        species,
        description,
      } = firstResponse.data;
      fetch(species.url)
        .then((response) => response.json())
        .then((data) => {
          const evoChain = data.evolution_chain.url;
          fetch(evoChain)
            .then((response) => response.json())
            .then((dataEvo) => {
              const apiEvo = 'https://pokeapi.co/api/v2/pokemon/';
              const first = dataEvo.chain;
              let second;
              let third;
              const evos = [];
              if (first) {
                const e1 = fetch(`${apiEvo}${first.species.name}/`);
                evos.push(e1);
                second = first.evolves_to[0];
              }
              if (second) {
                const e2 = fetch(`${apiEvo}${second.species.name}/`);
                third = second.evolves_to[0];

                evos.push(e2);
              }
              if (third) {
                const e3 = fetch(`${apiEvo}${third.species.name}/`);
                evos.push(e3);
              }
              Promise.all(evos)
                .then((responses) =>
                  Promise.all(responses.map((value) => value.json())),
                )
                .then((dataList) => {
                  const spritesEvo = dataList.map(
                    (v) => v.sprites.front_default,
                  );
                  const names = dataList.map((n) => n.name);
                  setPokemom({
                    name: name.replace(/-/g, ' '),
                    description,
                    sprites,
                    types,
                    abilities,
                    id,
                    weight: weight / 10,
                    height: height / 10,
                    stats,
                    evoSprites: spritesEvo,
                    evoNames: names,
                  });
                });
            });
        });
    });

    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemonData();
  }, [pokemonIndex, pokemon?.id]);

  return isLoading ? (
    <PokeballMini />
  ) : (
    <Paper sx={{ height: '87vh', paddingTop: 4 }}>
      <ContainerPokedex>
        <ContainerLeft>
          <PokemonNameContainer>
            <PokemonName>{pokemon.name}</PokemonName>
            <PokemonName>Nº {pokemon.id}</PokemonName>
          </PokemonNameContainer>

          <PokemonSprite src={pokemon.sprites.front_default} alt="pokemon" />
        </ContainerLeft>

        <ContainerDivider>
          <Divider />
          <DividerGap />
          <Divider />
          <DividerGap />
          <Divider />
          <DividerGap />
        </ContainerDivider>

        <ContainerRight>
          <PanelRow>
            <ContainerStats>
              {pokemon.stats.map((s) => (
                <StatLine>
                  {padStats(s.stat.name, s.base_stat, '.', 20)}
                </StatLine>
              ))}
            </ContainerStats>

            <TypeList>
              <TypesTitle>Types</TypesTitle>
              <TypesContainer>
                {pokemon.types.map((t) => (
                  <TypesText className={t.type.name}>{t.type.name}</TypesText>
                ))}
              </TypesContainer>
            </TypeList>
          </PanelRow>

          {PokemonEvolution(pokemon)}
        </ContainerRight>
      </ContainerPokedex>
    </Paper>
  );
}

export default Pokemon;
