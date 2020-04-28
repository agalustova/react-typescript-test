import React, { memo, useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../../App.css';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Login = () => {

  const history = useHistory()

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handlerSubmit = (event: any) => {
    event.preventDefault();

    if (email.trim() === 'demo' && password.trim() === 'demo') {
      return history.push('/flights');
    }
  };

  return (
      <Container component="main" className='container' maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form noValidate onSubmit={handlerSubmit}>
            <TextField
              value={email}
              onChange={event => setEmail(event.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={password}
              onChange={event => setPassword(event.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
  );
}

export default memo(Login);
