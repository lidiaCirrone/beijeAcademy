import React from 'react';
import { useNavigate, useLocation, useParams, Link, Navigate } from 'react-router-dom';
import { routes } from '../routes/routes';

// UTILS
import { getNews } from '../utils/utils';


function Detail() {

   const navigate = useNavigate();
   const location = useLocation();
   const params = useParams();

   console.log('location', location);
   console.log('location state isLogged', location?.state?.isLogged);
   console.log('location state user', location?.state?.user);
   console.log('params', params);
   const localStorageLoggedUser = localStorage.getItem('loggedUser');
   console.log('loggedUser', localStorageLoggedUser);

   const newsData = getNews();
   console.log(newsData);

   if (localStorageLoggedUser === null) {
      return <Navigate to="/login" state={{ from: location }} />
   } else {
      let article = newsData[location.state.articleId];
      console.log(article);
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
            <p>-</p>
            <p><Link to={routes.LOGIN} state={{ isLogged: false }}>logout</Link></p>
         </main>
      );
   }
}

export default Detail;