import React from 'react'
import '../styles/style.css'
import loadinggif from '../icons/loadingpages.gif'

const Loadingpage = () => {
  return (
    <div className='loadinggif'>
      <div>
        <img  src={loadinggif}/>
      </div>
    </div>
  )
}

export default Loadingpage
