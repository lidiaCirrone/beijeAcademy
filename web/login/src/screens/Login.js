import React from 'react';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import { routes } from '../routes/routes';


function Login() {

   const navigate = useNavigate();
   const location = useLocation()
   const params = useParams();

   console.log(navigate);
   console.log('location', location);
   console.log('location state isLogged', location?.state?.isLogged);
   console.log('location state user', location?.state?.user);
   console.log('params', params);

   if (location.state === null || location.state.isLogged === false) {
      return (
         <div className='flex-center p-20'>
            <p>
               login form here
            </p>
            <p>
               Not registered, sign up <Link to={routes.SIGNUP}>here</Link>
            </p>
         </div>
      );
   } else {
      navigate('/news', {
         state: {
            isLogged: true,
            user: location.state.user
         }
      });
   }

}

export default Login;
