import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { AppBar, Box } from '@mui/material';

export const Container = styled(Box)`
  flex-grow: 1;
`;

export const AppBarContainer = styled(AppBar)`
  background-color: black;
`;

export const Content = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ContainerRight = styled(Box)`
  display: flex;
  flex-direction: row;
`;

export const BoxCenter = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
