import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  Container,
  BoxCenter,
  ContainerRight,
  Content,
  AppBarContainer,
} from './styles';
import UserContext from '../../Context/UserContext';
import { IUserContext } from '../../interfaces';

export default function Navbar(): JSX.Element {
  const { user, signOut, themeUpdate, changeTheme } =
    // @ts-expect-error: Unreachable code error
    useContext<IUserContext>(UserContext);

  return (
    <Container>
      <AppBarContainer position="static">
        <Toolbar>
          <Content>
            <Link to="/">
              <Box
                component="img"
                src="https://ia801205.us.archive.org/26/items/PokemonIcon/pokemon%20icon.png"
                height="3em"
              />
            </Link>
            {user?.name ? (
              <Typography>Olá {user.name}!</Typography>
            ) : (
              <Typography>Seja bem vindo!</Typography>
            )}
            <ContainerRight>
              <IconButton onClick={changeTheme} color="inherit">
                {themeUpdate === 'dark' ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>

              <BoxCenter>
                <Link to="/perfil" style={{ marginLeft: 20 }}>
                  <PersonIcon color="primary" />
                </Link>
                {user?.name && (
                  <IconButton onClick={signOut} color="inherit" sx={{ ml: 2 }}>
                    <LogoutIcon color="inherit" />
                  </IconButton>
                )}
              </BoxCenter>
            </ContainerRight>
          </Content>
        </Toolbar>
      </AppBarContainer>
    </Container>
  );
}
