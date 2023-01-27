import styled from '@emotion/styled';
import { Box, Grid, LinearProgress, Typography } from '@mui/material';

export const ContainerPokedex = styled(Box)`
  background-color: #e61515;
  width: 848px;
  margin: 0 auto;
  padding: 1em;
  border-radius: 15px;
  border: double black 10px;
  display: flex;
`;

export const ContainerLeft = styled(Box)`
  width: 359px;
  padding: 10px;
  border: inset #b31818 3px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`;

export const ContainerRight = styled(Box)`
  width: 379px;
  padding: 10px;
  border: inset #b31818 3px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const PanelRow = styled(Box)`
  display: flex;
  border-bottom: groove #757575 3px;
  justify-content: space-evenly;
`;

export const ContainerStats = styled(Box)`
  background: linear-gradient(
    14deg,
    rgb(165, 205, 83) 60%,
    rgb(193, 217, 144) 65%
  );
  padding: 5px;
  border-radius: 3px;
  font-family: 'VT323';
  border: inset #879a65 3px;
  width: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5px;
  flex: 1;
`;

export const TypesTitle = styled(Typography)`
  text-transform: capitalize;
  font-size: 1.25em;
  padding: 5px;
  font-family: 'Staatliches', cursive;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    14deg,
    #460f0f 0,
    #891313 30%,
    #b31818 45%,
    #fd5555 65%,
    #b31818 95%
  );
  border: groove #e61515 3px;
  border-width: 3px 2px;
  text-shadow: #fd5555 -1px 1px;
`;

export const TypesContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-evenly;
  background: linear-gradient(14deg, #afafaf 50%, #ffffff 80%, #afafaf 90%);
  border-top: groove #757575 3px;
`;

export const TypesText = styled(Typography)`
  color: rgba(0, 0, 0, 0.9);
  text-transform: capitalize;
  font-size: 1.25em;
  padding: 2px;
  margin: 2px;
  border: groove #757575 3px;
  border-radius: 10px;
  width: 150px;
  font-family: 'Staatliches', cursive;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: rgba(255, 255, 255, 0.3) -1px 1px;
  align-self: center;
  background: linear-gradient(
    15deg,
    rgba(128, 128, 128, 0.5) 64%,
    rgba(138, 138, 138, 0.5) 70%,
    rgba(230, 230, 230, 0.5) 81%,
    rgba(255, 255, 255, 0.5) 86%,
    rgba(220, 220, 220, 0.5) 89%,
    rgba(230, 230, 230, 0.5) 100%
  );
  background-blend-mode: hard-light;

  &.normal {
    background-color: #bfbfbf;
  }
  &.fighting {
    background-color: #d87c58;
  }
  &.flying {
    background-color: #999ade;
  }
  &.poison {
    background-color: #925192;
  }
  &.ground {
    background-color: #dea761;
  }
  &.rock {
    background-color: #897864;
  }
  &.bug {
    background-color: #b1c967;
  }
  &.ghost {
    background-color: #c195dc;
  }
  &.steel {
    background-color: #49769c;
  }
  &.fire {
    background-color: #cf1414;
  }
  &.water {
    background-color: #1689de;
  }
  &.grass {
    background-color: #47a047;
  }
  &.electric {
    background-color: #e6b700;
  }
  &.psychic {
    background-color: #fa43b8;
  }
  &.ice {
    background-color: #98c3de;
  }
  &.dragon {
    background-color: #89315d;
  }
  &.dark {
    background-color: #282433;
  }
  &.fairy {
    background-color: #dca0ce;
  }
  &.unknown {
    background-color: #545454;
  }
  &.shadow {
    background-color: #364163;
  }
`;

export const StatLine = styled(Typography)`
  font-size: 17px;
  text-transform: capitalize;
  font-family: 'VT323';
`;

export const TypeList = styled(Box)`
  display: flex;
  flex-direction: column;
  border-left: groove #757575 3px;
  flex: 1;
`;

export const PokemonNameContainer = styled(Box)`
  display: flex;
  padding: 10px;
  border: inset #b31818 3px;
  border-radius: 3px;
  justify-content: space-between;
  background: linear-gradient(
    14deg,
    rgb(165, 205, 83) 60%,
    rgb(193, 217, 144) 65%
  );
  padding: 5px;
  border-radius: 3px;
  border: inset #879a65 3px;
`;

export const PokemonName = styled(Typography)`
  font-size: 20px;
  font-family: 'VT323';
  text-transform: uppercase;
`;

export const Divider = styled(Box)`
  background: linear-gradient(
    90deg,
    #460f0f 0,
    #891313 30%,
    #b31818 45%,
    #fd5555 65%,
    #b31818 95%
  );
  border-top-color: #891313;
  border-right-color: #b31818;
  flex: 1;
  width: 95%;
  border-radius: 4px;
  border: solid #2d0d0d 2px;
`;

export const ContainerDivider = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 30px;
  margin: 0 20px;
  align-items: center;
  border: inset #460f0f 4px;
  border-radius: 4px;
  background: #460f0f;
`;

export const DividerGap = styled(Box)`
  background: linear-gradient(
    90deg,
    #891313 0,
    #b31818 30%,
    #e61515 45%,
    #fd5555 65%,
    #e61515 95%
  );
  border-right-color: #fd5555;
  border-top-color: #fd5555;
  flex: 10;
  width: 100%;
  border-left-color: #5f1010;
  border-radius: 4px;
  border: solid #2d0d0d 2px;
`;

export const ContainerEvolution = styled(Box)`
  display: flex;
  border-bottom: groove #757575 3px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const SpriteSmall = styled.img`
  display: flex;
  image-rendering: pixelated;
  border: inset #9aa28b 3px;
  border-radius: 5px;
  box-sizing: border-box;
  background: linear-gradient(
    15deg,
    #cad5b5 64%,
    #dde2d4 70%,
    #dde2d4 81%,
    #fff 86%,
    #dde2d4 89%,
    #dde2d4 100%
  );
  height: 120px;
  width: 120px;
  margin: 3px 0;
`;

export const EvolutionText = styled(Typography)`
  width: auto;
  padding: 3px;
  margin-bottom: 3px;
  text-align: right;
  background: linear-gradient(
    14deg,
    rgb(165, 205, 83) 60%,
    rgb(193, 217, 144) 65%
  );
  padding: 5px;
  border-radius: 3px;
  font-family: 'VT323';
  border: inset #879a65 3px;
`;

export const PokemonSprite = styled.img`
  width: 100%;
  display: flex;
  image-rendering: pixelated;
  border: inset #9aa28b 3px;
  border-radius: 5px;
  margin: 10px 0;
  box-sizing: border-box;
  background: linear-gradient(
    15deg,
    #cad5b5 64%,
    #dde2d4 70%,
    #dde2d4 81%,
    #fff 86%,
    #dde2d4 89%,
    #dde2d4 100%
  );
`;

export const Container = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

export const ContainerCell = styled(Grid)(() => ({
  alignItems: 'center',
  // [theme.breakpoints.down('sm')]: {
  //   flexDirection: 'column',
  //   display: 'grid',
  //   justifyItems: 'center',
  // },
}));

export const ContainerAbilities = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const GridAbilities = styled(Grid)`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;
export const Content = styled(Grid)`
  display: flex;
  flex-direction: column;
`;
export const LinearProgressStyled = styled(LinearProgress)`
  width: 80%;
  height: 20px;
  background: #eeeeee;
`;
export const ContainerAbility = styled(Grid)`
  width: inherit;
  font-size: large;
  max-width: 100%;
  opacity: 1;
  transition: 0.3s;
  transform: rotateY(0deg);
  padding-left: 10px;

  &:hover {
    transform: rotateY(40deg);
  }
`;

export const Badge = styled(Box)`
  &.Normal {
    background-color: #a8a878;
    box-shadow: 0 0 20px #a8a878;
    color: #fff;
  }

  &.Fire {
    background-color: #f08030;
    box-shadow: 0 0 20px #f08030;
    color: #fff;
  }

  &.Water {
    background-color: #6890f0;
    box-shadow: 0 0 20px #6890f0;
    color: #fff;
  }

  &.Electric {
    background-color: #f8d030;
    box-shadow: 0 0 20px #f8d030;
    color: #fff;
  }

  &.Grass {
    background-color: #78c850;
    box-shadow: 0 0 20px #78c850;
    color: #fff;
  }

  &.Ice {
    background-color: #98d8d8;
    box-shadow: 0 0 20px #98d8d8;

    color: #fff;
  }

  &.Ground {
    background-color: #e0c068;
    box-shadow: 0 0 20px #e0c068;

    color: #fff;
  }

  &.Flying {
    background-color: #a890f0;
    box-shadow: 0 0 20px #a890f0;

    color: #fff;
  }

  &.Ghost {
    background-color: #705898;
    box-shadow: 0 0 20px #705898;

    color: #fff;
  }

  &.Rock {
    background-color: #b8a038;
    box-shadow: 0 0 20px #b8a038;

    color: #fff;
  }

  &.Fighting {
    background-color: #c03028;
    box-shadow: 0 0 20px #c03028;

    color: #fff;
  }

  &.Poison {
    background-color: #a040a0;
    box-shadow: 0 0 20px #a040a0;

    color: #fff;
  }

  &.Psychic {
    background-color: #f85888;
    box-shadow: 0 0 20px #f85888;

    color: #fff;
  }

  &.Bug {
    background-color: #a8b820;
    box-shadow: 0 0 20px #a8b820;

    color: #fff;
  }

  &.Dark {
    background-color: #705848;
    box-shadow: 0 0 20px #705848;

    color: #fff;
  }

  &.Steel {
    background-color: #b8b8d0;
    box-shadow: 0 0 20px #b8b8d0;

    color: #fff;
  }

  &.Dragon {
    background-color: #7038f8;
    box-shadow: 0 0 20px #7038f8;

    color: #fff;
  }
`;
