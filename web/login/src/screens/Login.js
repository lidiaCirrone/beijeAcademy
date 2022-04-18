import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { routes } from '../routes/routes';


function Login() {

   const location = useLocation();
   const localStorageLoggedUser = localStorage.getItem('loggedUser');

   if (localStorageLoggedUser === null) {
      return (
         <div className='flex-center p-20'>
            <p>
               login form here
            </p>
            <p>
               Not registered? Sign up <Link to={routes.SIGNUP}>here</Link>
            </p>
         </div>
      );
   } else {
      return <Navigate to={routes.NEWS} state={{ from: location }} />
   }
}

export default Login;
