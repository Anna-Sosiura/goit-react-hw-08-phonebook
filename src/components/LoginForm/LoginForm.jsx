import { useDispatch } from 'react-redux';
import { logIn } from '../../servise/userServise';
import { Button } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form
      style={{
        display: 'flex',
        margin: '0 auto',
        marginTop: 20,
        flexDirection: 'column',
        textAlign: 'center',
        width: 400,
        gap: 3,
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <input
        autoFocus
        required
        type="email"
        name="email"
        label="Email"
        variant="outlined"
        autoComplete="off"
        size="small"
      ></input>
      <input
        required
        type="password"
        name="password"
        label="Password"
        variant="outlined"
        autoComplete="current-password"
        size="small"
      ></input>
      <Button variant="contained" size="large" type="submit">
        Log In
      </Button>
    </form>
  );
};
