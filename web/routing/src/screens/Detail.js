import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

function Detail() {

   const navigate = useNavigate();

   const params = useParams();
   const location = useLocation();

   console.log('params', params);
   console.log('location', location); // location.pathname = "/detail/5"

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