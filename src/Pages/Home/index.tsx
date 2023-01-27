/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useState } from 'react';
import { Pagination, Paper } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import api from '../../services/api';
import CardContainer from '../../Components/Pokemon/Card';
import { PokeballMini } from '../../Components/Pokemon/Loading';
import {
  PaginationContainer,
  PokemonsContainer,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './styles';
import { IPokemonBasicData } from '../../interfaces';

function Home(): JSX.Element {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPokemon] = useState(807);
  const [pokemonPerPage] = useState(54);
  const [currentPage, setCurrentPage] = useState(0);
  const [query] = useState('');
  const totalPage = Math.ceil(totalPokemon / pokemonPerPage);

  // Renderiza um card para pokemon da lista
  const renderPokemonsList = () => {
    const pokemonsList: JSX.Element[] = [];

    pokemons.forEach((pokemon: IPokemonBasicData) => {
      if (!pokemon.name.includes(query)) {
        return;
      }

      pokemonsList.push(<CardContainer key={pokemon.name} pokemon={pokemon} />);
    });

    return pokemonsList;
  };

  // Controla a paginação e busca dos Pokemons na API
  const onPagination = (e: unknown, value: number) => {
    setCurrentPage(value * pokemonPerPage - pokemonPerPage);
  };

  // Pega os Pokemons na API de acordo com a paginação
  const getPokemons = async () => {
    await api
      .get(`/pokemon?limit=${pokemonPerPage}&offset=${currentPage}`)
      .then(
        (response: { data: { results: React.SetStateAction<never[]> } }) => {
          setPokemons(response.data.results);
        },
      );

    setIsLoading(false);
  };

  //  Filtra os Pokemons de acordo com a escrita na busca
  const pokemonFilter = (name: string) => {
    const filteredPokemons: React.SetStateAction<never[]> = [];
    if (name === '') {
      getPokemons();
    }
    for (const i in pokemons) {
      // @ts-expect-error: Unreachable code error
      if (pokemons[i].name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }
    if (filteredPokemons.length === 0) {
      getPokemons();
    }
    setPokemons(filteredPokemons);
  };

  useEffect(() => {
    getPokemons();
  }, [currentPage, pokemonPerPage]);

  return isLoading ? (
    <PokeballMini />
  ) : (
    <Paper>
      <PaginationContainer>
        {/* @ts-expect-error: Unreachable code error */}
        <Search onChange={(e) => pokemonFilter(e.target.value)}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Pesquisando..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Pagination onChange={onPagination} count={totalPage} color="primary" />
      </PaginationContainer>

      <PokemonsContainer>{renderPokemonsList()}</PokemonsContainer>
    </Paper>
  );
}

export default Home;
