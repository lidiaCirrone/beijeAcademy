import React from 'react';
import {useNavigate} from 'react-router-dom';

function Home() {
   const navigate = useNavigate();

   const goTo = (path) => () => {
      navigate(path);
   }

   return (
      <>
         <p>Home</p>
         {
            <button onClick={goTo("/detail/5")}>
               Detail
            </button>
         }
         
      </>
   )
}

export default Home;