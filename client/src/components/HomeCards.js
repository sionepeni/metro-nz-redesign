import { useState, useEffect } from "react"
import { useContext } from "react"
import AppContext from "../context/AppContext"
import ReviewCards from "./ReviewCards"
import "../style/ReviewCards.css"

const HomeCards = () => {
    const { HomeCards } = useContext(AppContext)
    const [users, setUser] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setUser(data)
            })
    }, [])

    console.log(users)
    return (
        <div className="homeReview">
            {HomeCards.homecardheading}

            <div className="sponsors">{HomeCards.round}</div>

            <div className="reviewContainer">
                {users.map((item, idx) => {
                    return (
                        <div className="boxes" key={idx}>
                            <ReviewCards>
                                <div className="speech">{HomeCards.speech}</div>
                                <h3>{item.name}</h3>
                                {HomeCards.stars}
                                <p>{item.review}</p>
                                <p>read more</p>
                            </ReviewCards>
                        </div>
                    )
                })}
                <div className="kate">{HomeCards.kate}</div>
                <div className="pinal">{HomeCards.pinal}</div>
                <div className="annette">{HomeCards.annette}</div>
            </div>
            <div className="sponsorLogos">
                {HomeCards.topreviews}
                {HomeCards.westpac}
                {HomeCards.awards}
            </div>
        </div>
    )
}

export default HomeCards
