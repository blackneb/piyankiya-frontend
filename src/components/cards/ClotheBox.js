import React from 'react'
import '../styles/style.css'
import photo from '../Images/imagetwo.jpg'

const ClotheBox = () => {
  return (
    <div className='mainbox'>
      <div className='container'>
        <div className='card'>
        <img src={photo} className="pic"/>
        </div>
        <div className='intro'>
          <h5 className='details'>Name</h5>
          <div className='but'>
            <h5 className='detailsbut'>View</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClotheBox
