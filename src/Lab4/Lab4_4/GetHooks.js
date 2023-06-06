import axios from 'axios';
import React, { useState, useEffect } from 'react';

function GetHooks() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>welcome</h1>
      {posts.map(post => (
        <div className='div_api' key={post.id}>
          {post.userId}<br></br>{post.id}<br></br>{post.title}<br></br>{post.body}
        </div>
      ))}
    </div>
  );
}

export default GetHooks;