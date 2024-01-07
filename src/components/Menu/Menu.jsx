import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../servise/userServise';

export const Menu = () => {
  const selectUser = state => state.auth.user;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
