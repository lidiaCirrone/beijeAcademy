import React from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';

import './Cms.css';


function Home() {
   const navigate = useNavigate();

   const goTo = (path) => () => {
      navigate(path);
   }

   return (
      <>

         <header>
            <h2>Header Cms page</h2>
         </header>

         <section>
            <nav>
               <ul>
                  <li>
                     <Link to={'profile'}>profile</Link>
                  </li>
                  <li>
                     <Link to={'orders'}>orders</Link>
                  </li>
               </ul>
               <div className={'flex-container'}>
                  <button onClick={goTo("/cms/profile")}>
                     Profile
                  </button>
                  <span> | </span>
                  <button onClick={goTo("/cms/orders")}>
                     Orders
                  </button>
               </div>
            </nav>

            <article>
               <Outlet />
            </article>
         </section>

         <footer>
            <p>Footer</p>
         </footer>

      </>
   )
}

export default Home;