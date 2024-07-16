// src/router/privaterouter
import  { ReactNode } from 'react';
import { useAuth } from '../utils/useAuth';
import { Navigate } from 'react-router-dom';
interface PrivateRouteProps {
    children: ReactNode;
  }
const PrivateRouter = ({ children }: PrivateRouteProps) => {
    const { user } = useAuth();
  
    if (user === null) {
        return <div>Loading....</div>;
      }
    
      if (user) {
        return <>{children}</>;
      }
    
      return <Navigate to="/login" />;
    };

export default PrivateRouter;