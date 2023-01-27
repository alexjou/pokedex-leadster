import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import {
  StyledLink,
  CardContainer,
  CardName,
  CardImg,
  CardDetails,
  CardId,
} from './styles';
import { PokeballMini } from '../Loading';
import { ITypes } from '../../../interfaces';

function Card({ pokemon }: any): JSX.Element {
  // const [imagePokemon, setImagePokemon] = useState('');
  const [pokemonId, setPokemonId] = useState(0);
  const [pokemonSprite, setPokemonSprite] = useState('');
  const [pokemonTypes, setPokemonTypes] = useState<Array<ITypes>>([]);
  const [imageLoading, setImageLoading] = useState(true);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const loadIdPokemon = async () => {
    await axios.get(pokemon.url).then((response) => {
      setPokemonId(response.data.id);
      setPokemonTypes(response.data.types);
      setPokemonSprite(response.data.sprites.front_default);
      // setImagePokemon(getPokemonImageUrl(response.data.id));
    });
    return null;
  };

  useEffect(() => {
    loadIdPokemon();
  }, [pokemon?.url, pokemonId]);

  const nameCapitalized = pokemon?.name.split('-')[0];

  const pokemonType = pokemonTypes.map(
    (type) => type.type.name[0].toUpperCase() + type.type.name.slice(1),
  );

  if (pokemonId > 807) {
    return <Box />;
  }
  return (
    <StyledLink className={pokemonType[0]} to={`pokemon/${pokemonId}`}>
      <CardContainer className={pokemonType[0]}>
        <CardId className={pokemonType[0]}># {pokemonId}</CardId>
        {imageLoading && <PokeballMini />}
        <CardImg
          onLoad={() => {
            setImageLoading(false);
          }}
          src={pokemonSprite}
          alt={nameCapitalized}
          style={imageLoading ? {} : { display: 'block' }}
        />
        <CardName>{nameCapitalized}</CardName>
        <CardDetails>{pokemonType.join(' / ')}</CardDetails>
      </CardContainer>
    </StyledLink>
  );
}

export default Card;
