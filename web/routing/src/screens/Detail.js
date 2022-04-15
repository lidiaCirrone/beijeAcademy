import React from 'react';
import { useNavigate, useParams, useLocation, useSearchParams } from 'react-router-dom';

function Detail() {

   const navigate = useNavigate();

   const params = useParams();
   const location = useLocation();
   const [searchParams] = useSearchParams();

   console.log('params', params);
   console.log('location', location); // location.pathname = "/detail/5"
   console.log('searchParams', searchParams);
   console.log('searchParams', searchParams.get('name'));

   const goTo = (path) => () => {
      navigate(path);
   }

   return (
      <>
         <p>Detail</p>
         <p>{params.id}</p>
         <p>{params.name}</p>
         {
            <button onClick={goTo("/")}>
               Home
            </button>
         }
      </>
   )
}

export default Detail;