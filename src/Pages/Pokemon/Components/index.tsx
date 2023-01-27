/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */

import { Box } from '@mui/material';
import { PokeballMini } from '../../../Components/Pokemon/Loading';
import { IPokemon } from '../../../interfaces';
import {
  ContainerEvolution,
  EvolutionText,
  PokemonName,
  SpriteSmall,
} from '../styles';

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export function padStats(stat: any, val: any, sep: any, len: any) {
  val = val || 'xx';
  const output = `
    ${stat.toString()}${sep.repeat(
    len - (val.toString().length + stat.toString().length),
  )}${val.toString()}`;
  return output;
}

export function PokemonSpriteSmall(props: any) {
  let evoImage;

  if (props.src) {
    evoImage = <SpriteSmall src={props.src} alt="pokemon" />;
  } else {
    evoImage = <PokeballMini />;
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <PokemonName>{props.evo}</PokemonName>
      {evoImage}
      <EvolutionText>{props.name || 'No Data'}</EvolutionText>
    </Box>
  );
}

export function PokemonEvolution(pokemon: IPokemon) {
  const e1 = pokemon.evoSprites[0];
  const e2 = pokemon.evoSprites[1];
  const e3 = pokemon.evoSprites[2];
  const n1 = pokemon.evoNames[0];
  const n2 = pokemon.evoNames[1];
  const n3 = pokemon.evoNames[2];

  return (
    <ContainerEvolution>
      <PokemonSpriteSmall src={e1} evo="I" name={n1} />
      <PokemonSpriteSmall src={e2} evo="II" name={n2} />
      <PokemonSpriteSmall src={e3} evo="III" name={n3} />
    </ContainerEvolution>
  );
}
