import React, { useContext, useState } from 'react';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, ViewSubmit } from './styles';

import { PokeballMini } from '../../Components/Pokemon/Loading';
import { IUser, IUserContext } from '../../interfaces';
import UserContext from '../../Context/UserContext';

function Profile(): JSX.Element {
  const { user, updateUser, signIn, signUp } = useContext<IUserContext>(
    // @ts-expect-error: Unreachable code error
    UserContext,
  );
  const [loginScreen, setLoginScreen] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const initialValues = {
    id: '',
    uid: '',
    name: user ? user?.name : '',
    email: user ? user?.email : '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    // @ts-expect-error: Unreachable code error
    email: Yup.string('Preencha com seu email')
      .email('Preencha com um e-mail válido')
      .required('E-mail é obrigatório'),
    // @ts-expect-error: Unreachable code error
    name: Yup.string('Preencha com seu nome')
      .min(4, 'Nome precisa ter no mínimo 4 caracteres')
      .required('Nome é obrigatório'),
    // @ts-expect-error: Unreachable code error
    password: Yup.string('Preencha com seu nome')
      .min(4, 'Nome precisa ter no mínimo 4 caracteres')
      .required('Nome é obrigatório'),
    // @ts-expect-error: Unreachable code error
    confirmPassword: Yup.string('Preencha com seu nome')
      .min(4, 'Nome precisa ter no mínimo 4 caracteres')
      .required('Nome é obrigatório'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values: IUser) => {
      signUp(values);
      formik.setSubmitting(false);
    },
  });
  return (
    <Paper sx={{ height: '97vh' }}>
      <Container>
        {user?.name ? (
          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '30%',
            }}
          >
            <Typography sx={{ fontSize: '21px', mb: 2, mt: 2 }}>
              Altere seu nome
            </Typography>
            <TextField
              fullWidth
              id="name"
              label="Nome"
              autoComplete="name"
              variant="outlined"
              placeholder="Preencha com o nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <ViewSubmit>
              <Button
                variant="contained"
                color="primary"
                disabled={formik.isSubmitting}
                sx={{ textTransform: 'none', mb: 2 }}
                onClick={() =>
                  updateUser({
                    name,
                    email: user?.email,
                    uid: user?.id,
                    id: user?.id,
                    password: '',
                    confirmPassword: '',
                  })
                }
              >
                Alterar
              </Button>
            </ViewSubmit>
          </Grid>
        ) : (
          <>
            <Typography sx={{ fontSize: '21px', mb: 2, mt: 1 }}>
              {loginScreen ? 'Fazer Login' : 'Crie sua conta'}
            </Typography>
            {loginScreen ? (
              <Grid container spacing={2} sx={{ width: '50%' }}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="email"
                    variant="outlined"
                    label="E-mail"
                    autoComplete="email"
                    placeholder="Preencha com o e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="password"
                    label="Password"
                    variant="outlined"
                    placeholder="Preencha com o Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </Grid>
                <ViewSubmit>
                  <Button
                    variant="contained"
                    color="primary"
                    // @ts-expect-error: Unreachable code error
                    onClick={() => signIn({ email, password })}
                    disabled={formik.isSubmitting}
                    sx={{ textTransform: 'none', mb: 2 }}
                  >
                    Entrar
                  </Button>
                  <Button
                    color="primary"
                    sx={{ textTransform: 'none' }}
                    onClick={() => setLoginScreen(!loginScreen)}
                  >
                    {loginScreen ? 'Crie sua conta' : 'Fazer Login'}
                  </Button>
                </ViewSubmit>
                {formik.isSubmitting && <PokeballMini />}
              </Grid>
            ) : (
              <Grid
                container
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '60%',
                }}
              >
                <form onSubmit={formik.handleSubmit}>
                  {/*  Tela de Criar conta */}
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        id="name"
                        label="Nome"
                        autoComplete="name"
                        variant="outlined"
                        placeholder="Preencha com o nome"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        error={
                          formik.touched.name && Boolean(formik.errors.name)
                        }
                        helperText={formik.touched.name && formik.errors.name}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        id="email"
                        variant="outlined"
                        label="E-mail"
                        autoComplete="email"
                        placeholder="Preencha com o e-mail"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        id="password"
                        label="Password"
                        variant="outlined"
                        placeholder="Preencha com o Password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        error={
                          formik.touched.password &&
                          Boolean(formik.errors.password)
                        }
                        helperText={
                          formik.touched.password && formik.errors.password
                        }
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        id="confirmPassword"
                        label="Confirmação do Password"
                        variant="outlined"
                        placeholder="Preencha com a Confirmação do Password"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        error={
                          formik.touched.confirmPassword &&
                          Boolean(formik.errors.confirmPassword)
                        }
                        helperText={
                          formik.touched.confirmPassword &&
                          formik.errors.confirmPassword
                        }
                      />
                    </Grid>

                    <ViewSubmit>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={formik.isSubmitting}
                        sx={{ textTransform: 'none', mb: 2 }}
                      >
                        Salvar
                      </Button>
                      <Button
                        color="primary"
                        sx={{ textTransform: 'none' }}
                        onClick={() => setLoginScreen(!loginScreen)}
                      >
                        {loginScreen ? 'Crie sua conta' : 'Fazer Login'}
                      </Button>
                    </ViewSubmit>
                    {formik.isSubmitting && <PokeballMini />}
                  </Grid>
                </form>
              </Grid>
            )}
          </>
        )}
      </Container>
    </Paper>
  );
}

export default Profile;
