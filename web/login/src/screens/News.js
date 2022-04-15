import React from 'react';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import { routes } from '../routes/routes';


function News() {

   const navigate = useNavigate();
   const location = useLocation()
   const params = useParams();

   console.log(navigate);
   console.log(location);
   console.log(location?.state?.isLogged);
   console.log(location?.state?.user);
   console.log(params);

   if (location?.state?.isLogged === false) {
      return (
         <div>
            <p>
               Please, <Link to={routes.LOGIN}>log in</Link> or <Link to={routes.SIGNUP}>register</Link>
            </p>
         </div>
      );
   } else {
      return (
         <div>
            <h1>
               News
            </h1>
            <p>news news news</p>
            <p><Link to={routes.LOGIN} state={{isLogged: false}}>logout</Link></p>
         </div>
      );
   }

}

export default News;
