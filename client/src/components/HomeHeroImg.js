import {useContext} from 'react'
import AppContext from '../context/AppContext'
import '../style/HomeHeroImg.css'

const HomeHeroImg = () => {
    const {HomeData} = useContext(AppContext)

  return (
    <div>
      <div>
        <div className='homeText'>
            {HomeData.mainText}
            {HomeData.subText}
        </div>
        <div className='ellipse'>
            {HomeData.ellipse}
        </div>
        <div className='vector'>
            {HomeData.vector}
        </div>
        <div className='tiltedimg1'>
          {HomeData.tiltedimg1}
        </div>
        <div className='tiltedimg2'>
        {HomeData.tiltedimg2}
        </div>
      </div>
      <div className='homeTimeline'>
        {HomeData.apply}
        {HomeData.timeline}
      </div>
    </div>
  )
}

export default HomeHeroImg
