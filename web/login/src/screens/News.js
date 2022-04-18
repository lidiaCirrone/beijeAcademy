import React from 'react';
import { useNavigate, useLocation, Link, Navigate } from 'react-router-dom';
import { path, routes } from '../routes/routes';

// UTILS
import { getNews } from '../utils/utils';

function News() {

   const navigate = useNavigate();
   const location = useLocation()
   const localStorageLoggedUser = localStorage.getItem('loggedUser');
   const newsData = getNews();

   const signOut = () => {
      localStorage.removeItem('loggedUser');
      navigate(routes.HOME);
   }

   if (localStorageLoggedUser === null) {
      return <Navigate to={routes.LOGIN} state={{ from: location }} />
   } else {
      return (
         <main>
            <h1>
               News
            </h1>
            <div className='news-container'>
               <ul>
                  {
                     newsData.map(article => {
                        return (
                           <li key={`article-${article.id}`}>
                              <h3>{article.title}</h3>
                              <h4>{article.subtitle}</h4>
                              <p>{article.description}
                                 <Link
                                    to={path.detail(article.id)}
                                    state={{
                                       articleId: article.id
                                    }}>
                                    read more...
                                 </Link>
                              </p>
                           </li>
                        )
                     })
                  }
               </ul>
            </div>
            <p>
               <button onClick={signOut}>logout</button>
            </p>
         </main>
      );
   }

}

export default News;
