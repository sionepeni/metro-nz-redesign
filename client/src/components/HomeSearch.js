import {useContext} from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import AppContext from '../context/AppContext'
import FilterOptions from './listings/FilterOptions'
import '../style/HomeHeroImg.css'



const HomeSearch = () => {
  const {HomeData} = useContext(AppContext)
  const [active, setActive] = useState(false)

  const onClick = () =>active === false ? setActive(true) : setActive(false)



  return (
    <div className='searchContainer'>
        <div className='searchSelect'>
          <select>
            <option value='1'> Property type</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Unit</option>
            <option>Townhouse</option>
            <option>Lifestyle property</option>
            <option>Section</option>
          </select>
          <input type='text' placeholder='Search by location property ID...' ></input>
        </div>
        <div className='searchButton'>
         <Link to='/propertylisting'><button>Search Now</button></Link>
          <p onClick={onClick}>Filters</p>
        </div>
        <div>
        { active ? <FilterOptions /> : null }
        </div>
        <div className='houseIcon'>
          {HomeData.select}
        </div>
        <div className='mapPin'>
          {HomeData.mappin}
        </div>
        <div className='homeSliders'>
          {HomeData.sliders}
        </div>
        <div className='homeSearch'>
          {HomeData.search}
        </div>
    </div>
  )
}

export default HomeSearch
