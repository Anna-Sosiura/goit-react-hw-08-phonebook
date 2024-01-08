import { Menu } from '../Menu/Menu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';

export const AppBar = () => {
  const selectIsLoggedIn = state => state.auth.isLoggedIn;
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
        style={{
          display: 'flex',
          marginLeft: 50,
        }}
      >
        <NavLink to="/">
          <BottomNavigation showLabels>
            <BottomNavigationAction
              label="HOME"
              style={{
                color: '#fff',
                backgroundColor: 'green',
                marginLeft: 'auto',
              }}
            />
          </BottomNavigation>
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts">
            <BottomNavigation showLabels>
              <BottomNavigationAction
                label="CONTACTS"
                style={{
                  color: '#fff',
                  backgroundColor: 'green',
                }}
              />
            </BottomNavigation>
          </NavLink>
        )}
      </Box>
      {isLoggedIn ? (
        <Menu />
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <NavLink to="/register">
            <BottomNavigation showLabels>
              <BottomNavigationAction
                label="REGISTER"
                style={{
                  color: 'green',
                }}
              />
            </BottomNavigation>
          </NavLink>
          <NavLink to="/login">
            <BottomNavigation showLabels>
              <BottomNavigationAction
                label="LOG IN"
                style={{
                  color: 'green',
                }}
              />
            </BottomNavigation>
          </NavLink>
        </div>
      )}
    </header>
  );
};
