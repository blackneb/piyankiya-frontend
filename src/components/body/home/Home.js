import React from 'react'
import axios from "axios";
import '../../styles/style.css'
import ClotheBox from '../../cards/ClotheBox'
import Break from '../break/Break'
import Contact from '../contact/Contact'
import About from '../about/About'


const Home = () => {
  const baseURL = "http://localhost/piyankiya/api/post/read.php";
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  return (
    <div>
      <Break/>
      <div className='homewo'>
        <div className='homewoname'>
        <h1>For Women</h1>
        </div>
        <div className='homewoboxes'>
          {post.data.map((e) => (
            <ClotheBox name={e.name}/>
          ))}
        </div>
      </div>
      <Break/>
      <div className='homewo'>
      <div className='homewoboxes'>
          {post.data.map((e) => (
            <ClotheBox name={e.name}/>
          ))}
        </div>
        <div className='homewonname'>
        <h1>For Men</h1>
        </div>
      </div>
      <Break/>
      <div className='homewo'>
      <div className='homewonname'>
        <h1>For Occasions</h1>
        </div>
        <div className='homewoboxes'>
          {post.data.map((e) => (
            <ClotheBox name={e.name}/>
          ))}
        </div>
      </div>
      <Break/>
      <div className='homewo'>
      <div className='homewoboxes'>
          {post.data.map((e) => (
            <ClotheBox name={e.name}/>
          ))}
        </div>
        <div className='homewonname'>
        <h1>For Kids</h1>
        </div>
      </div>
      <Break/>
      <Contact/>
      <Break/>
      <About/>
      <Break/>
    </div>
  )
}

export default Home
