import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SearchPost() {
    
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromBTN, setIdFromBTN] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            console.log(response);
            setPost(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }, [idFromBTN])

    const handeleClick = () => {
        setIdFromBTN(id)
    }


  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
        <button onClick={handeleClick}>Search</button>
        <h3>{post.title}</h3>
    </div>
  )
}

export default SearchPost