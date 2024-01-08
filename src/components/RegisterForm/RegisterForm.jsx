import { useDispatch } from 'react-redux';
import { register } from '../../servise/userServise';
import { Button } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
        justifyContent: 'center',
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
        type="text"
        name="name"
        label="Username"
        variant="outlined"
        autoComplete="off"
        size="small"
      ></input>
      <input
        required
        type="email"
        name="email"
        label="Email"
        variant="outlined"
        autoComplete="off"
        size="small"
      ></input>
      <input
        type="password"
        name="password"
        label="Password"
        variant="outlined"
        autoComplete="off"
        size="small"
      ></input>
      <Button variant="contained" color="success" type="submit">
        Register
      </Button>
    </form>
  );
};
