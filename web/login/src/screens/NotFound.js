import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routes/routes';

function NotFound() {
   return (
      <div className='mt-50 flex-center'>
         <h1>
            Page Not Found
         </h1>
         <p>
            <Link to={routes.HOME}>
               back to the homepage
            </Link>
         </p>
      </div>
   );
}

export default NotFound;
