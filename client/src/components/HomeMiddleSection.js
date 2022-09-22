import {useContext} from 'react'
import AppContext from '../context/AppContext'
import '../style/HomeMiddleSection.css'


const HomeMiddleSection = () => {
    const {HomeData} = useContext(AppContext)

  return (
    <div>
      <div className='middleContainer'>
        <div className="middleImg">
            {HomeData.middleimg}
        </div>
        <div className='middleText'>
            {HomeData.middletext}<br/>
            {HomeData.middlesubtext}
           <div className='middleGreyText'>{HomeData.middlesubtext2}</div>
           {HomeData.middlebutton}
        </div>
      </div>
    </div>
  )
}

export default HomeMiddleSection
