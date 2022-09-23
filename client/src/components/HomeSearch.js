import {useContext} from 'react'
import AppContext from '../context/AppContext'
import { filterReducer } from './listings/listings-component/FilterReducer'
import '../style/HomeHeroImg.css'



const HomeSearch = () => {
  const {HomeData} = useContext(AppContext)

  return (
    <div className='searchContainer'>
        <div className='searchSelect'>
          <select>
            <option> Property type</option>
          </select>
          <input type='text' placeholder='Search by location property ID...' ></input>
        </div>
        <div className='searchButton'>
          <button>Search Now</button>
          <p>Filters</p>
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
