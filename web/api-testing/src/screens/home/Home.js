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

   const renderArticles = (post, key) => {
      return (
         <div key={`post-${key}`}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
         </div>
      )
   }

   const addPost = () => {
      axios.post('https://jsonplaceholder.typicode.com/posts',
         JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
         }),
         {
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            }
         }
      )
         .then(function (response) {
            console.log(response.data);
            let updatedPosts = state.posts;
            updatedPosts.push(response.data);
            setState({
               ...state,
               posts: updatedPosts
            })
         })
         .catch(function (error) {
            console.log(error);
         });
   }

   const asyncAddPost = async () => {
      let posts = await axios.post('https://jsonplaceholder.typicode.com/posts',
         JSON.stringify({
            title: 'foo2',
            body: 'bar2',
            userId: 2,
         }),
         {
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            }
         }
      )
      console.log(posts.data);
      let updatedPosts = state.posts;
      updatedPosts.push(posts.data);
      setState({
         ...state,
         posts: updatedPosts
      })
   }

   return (
      <main>
         <button onClick={addPost}>Add post (then & catch)</button>
         <button onClick={asyncAddPost}>Add post (async await)</button>
         {state.posts.map(renderArticles)}
      </main>
   );
}

export default Home;
