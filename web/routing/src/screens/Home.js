import React from 'react';
import {useNavigate} from 'react-router-dom';

function Home() {
   const navigate = useNavigate();

   const goTo = (path) => () => {
      navigate(path);
   }

   const goToHidden = (path) => () => {
      navigate(path, {
         state: {
            id: 5,
            name: 'Lidia'
         }
      });
   }

   return (
      <>
         <p>Home</p>
         {
            <button onClick={goToHidden("/detail/5/test")}>
               Detail
            </button>
         }
         
      </>
   )
}

export default Home;