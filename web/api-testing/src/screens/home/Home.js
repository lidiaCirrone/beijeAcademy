import React, { useState, useEffect } from 'react';
import axios from 'axios';

// COMPONENTS

// STYLES
import './Home.css';


function Home() {

   const [state, setState] = useState({
      posts: []
   });

   useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(function (response) {
            // handle success
            setState({
               ...state,
               posts: response.data
            })
            console.log(response.data);
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         })
   }, [])

   return (
      <main>
         {state.posts.map((post, key) => {
            return (
               <div key={`post-${key}`}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
               </div>
            )
         })}
      </main>
   );
}

export default Home;
