import React, { useState, useEffect } from 'react';
import axios from 'axios';

// STYLES
import './Home.css';

// UTILS
import { getPosts, addPosts } from '../../services/posts';



let postsData = [];

function Home() {

   const [state, setState] = useState({
      posts: []
   });

   useEffect(() => {
      loadPosts();
   }, [])

   const updatePosts = (newData) => {
      postsData = newData;
   }

   const loadPosts = async () => {
      let apiGetPostsResponse = await getPosts();
      updatePosts(apiGetPostsResponse);
      setState({
         ...state,
         posts: apiGetPostsResponse
      })
   }

   const newPost = async () => {
      let apiAddpostsResponse = await addPosts('posts',
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
      let loadedPosts = state.posts;
      loadedPosts.push(apiAddpostsResponse);
      updatePosts(loadedPosts);
      setState({
         ...state,
         posts: loadedPosts
      })
   }

   return (
      <main>
         <button onClick={newPost} className={'add-button'}>Add post</button>
         {state.posts.map(renderArticles)}
      </main>
   );
}

const renderArticles = (post, key) => {
   return (
      <div key={`post-${key}`}>
         <h3>{post.title}</h3>
         <p>{post.body}</p>
         <h6>{post.userId} - {post.id}</h6>
      </div>
   )
}

export default Home;
