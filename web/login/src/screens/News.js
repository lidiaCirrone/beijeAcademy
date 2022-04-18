import React from 'react';
import { useNavigate, useLocation, useParams, Link, Navigate } from 'react-router-dom';
import { path, routes } from '../routes/routes';

// UTILS
import { getNews } from '../utils/utils';


function News() {

   const navigate = useNavigate();
   const location = useLocation()
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
            <p><Link to={routes.LOGIN} state={{ isLogged: false }}>logout</Link></p>
         </main>
      );
   }

}

export default News;
