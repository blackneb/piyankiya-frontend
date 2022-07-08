import React, { useState } from 'react'
import Break from '../break/Break'
import ClotheBox from '../../cards/ClotheBox'
import '../../styles/style.css'
import axios from "axios";

const Men = () => {
  const baseURL = "http://localhost/piyankiya/api/post/read.php";
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios.post(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  return (
    <div>
      <Break/>
      <h1>Men Habeshan Clothes</h1>
      <div className='homewo'>
        <div className='homewoboxes'>
          {post.data.map((e) => (
            <ClotheBox name={e.name}/>
          ))}
        </div>
      </div>
      <Break/>
    </div>
  )
}

export default Men
