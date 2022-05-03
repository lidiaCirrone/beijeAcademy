import React, { useState, useEffect } from 'react';

// STYLES
import './Home.css';

// UTILS
import { getPosts, addPosts, updatePosts } from '../../services/posts';


let postsData = [];

function Home() {

   const [state, setState] = useState({
      posts: []
   });

   useEffect(() => {
      loadPosts();
   }, [])

   const updateLoadedPosts = (newData) => {
      postsData = newData;
   }

   const loadPosts = async () => {
      let apiGetPostsResponse = await getPosts();
      updateLoadedPosts(apiGetPostsResponse);
      setState({
         ...state,
         posts: apiGetPostsResponse
      })
   }

   const newPost = async () => {
      let addResponse = await addPosts('posts',
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
      loadedPosts.push(addResponse);
      updateLoadedPosts(loadedPosts);
      setState({
         ...state,
         posts: loadedPosts
      })
   }

   const editPost = (post) => async () => {
      let editResponse = await updatePosts(`posts/${post.id}`,
         JSON.stringify({
            id: post.id,
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
      let loadedPosts = state.posts;
      let actualId = loadedPosts.indexOf(post);
      loadedPosts[actualId] = editResponse;
      updateLoadedPosts(loadedPosts);
      setState({
         ...state,
         posts: loadedPosts
      })
   }

   const renderArticles = (post, key) => {
      return (
         <div key={`post-${key}`}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <h6>userId: {post.userId} - id: {post.id}</h6>
            <button onClick={editPost(post)} className={'edit-button'}>Edit post</button>
         </div>
      )
   }

   return (
      <main>
         <button onClick={newPost} className={'add-button'}>Add post</button>
         {state.posts.map(renderArticles)}
      </main>
   );
}

export default Home;
