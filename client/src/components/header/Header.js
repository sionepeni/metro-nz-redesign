import {useContext} from 'react'
import AppContext from '../../context/AppContext'
import '../../style/header/Header.css'


const Header = () => {
    const {HeaderData} = useContext(AppContext)

  return (
    <div className='headerContainer'>
      <div className='logo'>
        {HeaderData.headerImg}
      </div>
        <div className='headerNav'>
            {HeaderData.news}
            {HeaderData.about}
            {HeaderData.contact}
            {HeaderData.button1}
            {HeaderData.button2}
            <div className='headerIcon'>
            {HeaderData.icon}
            </div>
        </div>
    </div>
  )
}

export default Header
