import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../servise/userServise';
import { Button } from '@mui/material';

export const Menu = () => {
  const selectUser = state => state.auth.user;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: 'flex',
        gap: 30,
      }}
    >
      <p>Welcome, {user.name}</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};
