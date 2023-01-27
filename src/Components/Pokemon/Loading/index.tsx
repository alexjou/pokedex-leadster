import React from 'react';
import pokeball from '../../assets/pokeboll.gif';
import { LoadImg } from './styles';

export function PokeballMini(): JSX.Element {
  return <LoadImg src={pokeball} alt="Loading" loading="lazy" />;
}
