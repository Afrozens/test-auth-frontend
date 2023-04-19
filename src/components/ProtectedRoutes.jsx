import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.user);
  if (!userInfo) return <Navigate to="/login" />;

  return <>{children}</>;
};
