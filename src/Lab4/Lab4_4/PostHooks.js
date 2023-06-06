import axios from 'axios';
import React, { useState } from 'react';

function PostHooks() {
  const [post, setPost] = useState({ userId: '', title: '', body: '' });

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios.post('https://jsonplaceholder.typicode.com/posts', post)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>userId</label>
        <input type="text" name="userId" value={post.userId} onChange={handleChange} />
      </div>
      <div>
        <label>title</label>
        <input type="text" name="title" value={post.title} onChange={handleChange} />
      </div>
      <div>
        <label>Body</label>
        <input type="text" name="body" value={post.body} onChange={handleChange} />
      </div>
      <button className="submit" type="submit">
        add to post
      </button>
    </form>
  );
}

export default PostHooks;