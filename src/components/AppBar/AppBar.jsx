import { Menu } from '../Menu/Menu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  const selectIsLoggedIn = state => state.auth.isLoggedIn;
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </nav>
      {isLoggedIn ? (
        <Menu />
      ) : (
        <div>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </div>
      )}
    </header>
  );
};
