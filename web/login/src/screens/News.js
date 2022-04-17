import React from 'react';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import { path, routes } from '../routes/routes';

// UTILS
import { getNews } from '../utils/utils';


function News() {

   const navigate = useNavigate();
   const location = useLocation()
   const params = useParams();

   console.log(navigate);
   console.log(location);
   console.log(location?.state?.isLogged);
   console.log(location?.state?.user);
   console.log(params);

   const newsData = getNews();
   console.log(newsData);

   if (location.state === null || location.state.isLogged === false) {
      return (
         <div className='flex-center p-20'>
            <h2>Sorry, this page is only visible if you're logged in</h2>
            <p>
               Please, <Link to={routes.LOGIN}>log in</Link> or <Link to={routes.SIGNUP}>register</Link>
            </p>
         </div>
      );
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
                                       articleId: article.id,
                                       isLogged: true,
                                       user: location.state.user
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
