import './Bgv.css'

import React from 'react'
import BgVid from '../../assets/Video/Dv.mp4'

const Bgv = () => {
  return (
    <div className='bgv'>
<video src={BgVid} autoPlay loop muted playsInline />
    </div>
  )
}

export default Bgv