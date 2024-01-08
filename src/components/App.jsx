import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute, RestrictedRoute } from '../components/Route/Route';

import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import Contacts from '../pages/Contacts/Contacts';
import { refreshUser } from '../servise/userServise';

export const App = () => {
  const dispatch = useDispatch();
  const selectIsRefreshing = state => state.auth.isRefreshing;
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
