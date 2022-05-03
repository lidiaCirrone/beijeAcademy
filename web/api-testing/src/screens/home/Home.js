import React, { useState, useEffect } from 'react';

// STYLES
import './Home.css';

// UTILS
import { getPosts, addPosts, updatePosts, deletePost } from '../../services/posts';


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
      console.log(apiGetPostsResponse);
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
      postsData.push(addResponse);
      setState({
         ...state,
         posts: postsData
      })
   }

   const editPost = (post, key) => async () => {
      let editedItem = {
         id: post.id,
         title: 'foo2',
         body: 'bar2',
         userId: 2,
      };
      let editResponse = await updatePosts(`posts/${key}`,
         JSON.stringify(editedItem),
         {
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            }
         }
      )
      postsData[key] = editedItem;
      setState({
         ...state,
         posts: postsData
      })
   }

   const deleteItem = (key) => async () => {
      let deleteResponse = await deletePost(`posts/${key}`);
      postsData.splice(key, 1);
      setState({
         ...state,
         posts: postsData
      })
   }

   const renderArticles = (post, key) => {
      return (
         <div key={`post-${key}`} className={'item-container'}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <h6>userId: {post.userId} - id: {post.id}</h6>
            <button onClick={editPost(post, key)}>Edit post</button>
            <button onClick={deleteItem(key)}>Delete post</button>
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
