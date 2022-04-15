import React from 'react';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import { routes } from '../routes/routes';

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
         <div>
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
                              <p>{article.description}</p>
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
