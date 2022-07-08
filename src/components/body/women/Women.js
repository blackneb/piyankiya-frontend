import React from 'react'
import Break from '../break/Break'
import ClotheBox from '../../cards/ClotheBox'
import '../../styles/style.css'
import axios from "axios";

const Women = () => {
  const baseURL = "http://localhost/piyankiya/api/post/read_byg.php?gender=female";
  const [post, setPost] = React.useState("");
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  return (
    <div>
      <Break/>
      <h1>Women Habeshan Clothes</h1>
      <div className='homewo'>
        <div className='homewoboxes'>
        {post.data.map((e) => (
            <ClotheBox name={e.name} id={e.id} price={e.price} description={e.description} photo={e.photo}/>
          ))}
        </div>
      </div>
      <Break/>
    </div>
  )
}

export default Women
