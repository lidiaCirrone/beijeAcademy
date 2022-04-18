import React from 'react';
import { useNavigate, useLocation, useParams, Link, Navigate } from 'react-router-dom';
import { routes } from '../routes/routes';


function Login() {

   const navigate = useNavigate();
   const location = useLocation()
   const params = useParams();

   console.log('location', location);
   console.log('location state isLogged', location?.state?.isLogged);
   console.log('location state user', location?.state?.user);
   console.log('params', params);
   const localStorageLoggedUser = localStorage.getItem('loggedUser');
   console.log('loggedUser', localStorageLoggedUser);

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
      return <Navigate to="/news" state={{ from: location }} />
   }

}

export default Login;
