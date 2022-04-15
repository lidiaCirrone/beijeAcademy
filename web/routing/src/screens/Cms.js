import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

function Home() {
   const navigate = useNavigate();

   const goTo = (path) => () => {
      navigate(path);
   }

   return (
      <>
         <p>Cms</p>

         <button onClick={goTo("/cms/profile")}>
            Profile
         </button>

         <button onClick={goTo("/cms/orders")}>
            Orders
         </button>

         <Outlet />

      </>
   )
}

export default Home;