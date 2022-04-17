import React from 'react';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import { routes } from '../routes/routes';

// UTILS
import { getNews } from '../utils/utils';


function Detail() {

   const navigate = useNavigate();
   const location = useLocation();
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
      let article = newsData[location.state.articleId];
      console.log(article);
      return (
         <main className='flex-center p-20'>
            <h1>{article.title}</h1>
            <h2>{article.subtitle}</h2>
            <p className='italic'>{article.description}</p>
            <p>{article.content}</p>
            <p>
               <Link
                  to={routes.NEWS}
                  state={{
                     isLogged: true,
                     user: location.state.user
                  }}>
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