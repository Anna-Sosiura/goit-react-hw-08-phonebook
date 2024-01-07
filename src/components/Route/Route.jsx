import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const selectIsRefreshing = state => state.auth.isRefreshing;
const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
