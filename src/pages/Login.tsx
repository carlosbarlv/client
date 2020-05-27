import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';
import MessageDialog from '../components/MessageDialog';
import Copyright from '../components/Copyright';
import { authenticateUser, authenticateUserHideError } from '../actions/login';
import { isLoggedIn } from '../utils/session';
import { PATH_MAIN } from '../constants/routes';

interface ILoginState {
  isSubmitted: boolean;
  showAuthenticationError: boolean;
}

interface IProps {
  login: ILoginState;
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login: React.FunctionComponent = () => {
  const classes = useStyles(),
    [password, setPassword] = useState(''),
    [username, setUsername] = useState(''),
    loginStoreState = useSelector((state: IProps) => state.login),
    dispatch = useDispatch();

  if (isLoggedIn()) {
    return <Redirect to={PATH_MAIN} />;
  }

  return (
    <Grid container className={classes.root}>
      <MessageDialog
        isOpen={loginStoreState.showAuthenticationError}
        message="Ocurrió un error iniciando sesión"
        onClose={() => dispatch(authenticateUserHideError())}
        primaryOptionOnClick={() => dispatch(authenticateUserHideError())}
        primaryOptionText="OK"
        title="Error"
      />
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicio de sesión
          </Typography>
          <form
            className={classes.form}
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(authenticateUser(username, password));
            }}
          >
            <LinearProgress
              value={100}
              variant={
                loginStoreState.isSubmitted ? 'indeterminate' : 'determinate'
              }
            />
            <TextField
              autoComplete="email"
              fullWidth
              id="puser"
              label="Usuario"
              margin="normal"
              name="puser"
              required
              variant="outlined"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              autoComplete="current-password"
              fullWidth
              id="ppassword"
              label="Contraseña"
              margin="normal"
              name="ppassword"
              required
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              className={classes.submit}
              color="primary"
              fullWidth
              type="submit"
              disabled={loginStoreState.isSubmitted}
              variant="contained"
            >
              Iniciar sesión
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
