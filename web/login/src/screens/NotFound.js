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
            <Link to={routes.NEWS}>
               back to all news
            </Link>
         </p>
      </div>
   );
}

export default NotFound;
