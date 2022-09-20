import {useContext} from 'react'
import AppContext from '../context/AppContext'

const HomeCards = (props) => {
    const {HomeCards} = useContext(AppContext)

  return (
    <div>
      <div>
        <img src={props.img} alt='profile' />
        <h3>{props.name}</h3>
        <img src={HomeCards.stars} alt='stars' />
        <br/>
        <p>{props.text}</p>
        <p>{HomeCards.readmore}</p>
      </div>
    </div>
  )
}

export default HomeCards
