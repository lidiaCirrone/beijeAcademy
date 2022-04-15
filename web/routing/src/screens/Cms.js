import React from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';

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

         <div>
            <Link to={'profile'}>profile</Link>
         </div>
         <div>
            <Link to={'orders'}>orders</Link>
         </div>

         <Outlet />

      </>
   )
}

export default Home;