import React from 'react';
import { useNavigate, useLocation, Link, Navigate } from 'react-router-dom';
import { routes } from '../routes/routes';

// UTILS
import { getNews } from '../utils/utils';


function Detail() {

   const navigate = useNavigate();
   const location = useLocation();
   const localStorageLoggedUser = localStorage.getItem('loggedUser');
   const newsData = getNews();

   const signOut = () => {
      localStorage.removeItem('loggedUser');
      navigate(routes.HOME);
   }

   if (localStorageLoggedUser === null) {
      return <Navigate to={routes.LOGIN} state={{ from: location }} />
   } else {
      let article = newsData[location.state.articleId];
      return (
         <main className='flex-center p-20'>
            <h1>{article.title}</h1>
            <h2>{article.subtitle}</h2>
            <p className='italic'>{article.description}</p>
            <p>{article.content}</p>
            <p>
               <Link to={routes.NEWS}>
                  back to all news
               </Link>
            </p>
            <p>
               <button onClick={signOut}>logout</button>
            </p>
         </main>
      );
   }
}

export default Detail;