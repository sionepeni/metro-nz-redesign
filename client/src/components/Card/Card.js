import "../../style/Card.css"
import { useState } from "react"
import dot from "./assets/dot.png"
import selectedDot from "./assets/selected-dot.png"
import {
    HeartStraight,
    CaretLeft,
    CaretRight,
    MapPin,
    PawPrint,
    Car,
    Bathtub,
    Bed,
} from "phosphor-react"

function Card({
    item: { header, address, bedroom, bathroom, parking, pet, cost, pictures },
}) {
    const [currentImage, setCurrentImage] = useState(1)
    const [heartColor, setHeartColor] = useState("black")

    const nextImage = () => {
        currentImage !== Object.keys(pictures).length
            ? setCurrentImage(currentImage + 1)
            : setCurrentImage(1)
    }

    const prevImage = () => {
        currentImage !== 1
            ? setCurrentImage(currentImage - 1)
            : setCurrentImage(Object.keys(pictures).length)
    }

    const toggleHeart = () => {
        heartColor === "black"
            ? setHeartColor("#F85757")
            : setHeartColor("black")
    }

    const moveDot = (index) => {
        setCurrentImage(index)
    }

    return (
        <>
            <div className="card-container">
                <div className="card-image">
                    <span onClick={toggleHeart} className="card-image-heart">
                        <HeartStraight color={heartColor} size={30} />
                    </span>
                    <span
                        className={currentImage === 1 ? "" : "left-arrow"}
                        onClick={prevImage}
                    >
                        {currentImage === 1 ? "" : <CaretLeft size={30} />}
                    </span>
                    <img src={pictures[`${currentImage}`]} alt="house" />
                    <span className="right-arrow" onClick={nextImage}>
                        <CaretRight size={30} />
                    </span>
                </div>

                <div className="card-description">
                    <h3>{header}</h3>
                </div>

                <div className="card-address">
                    <span className="card-description-logo">
                        <MapPin size={32} />
                    </span>
                    <p>{address}</p>
                </div>

                <div className="card-icons">
                    <span className="card-icons-bed">
                        <Bed size={32} />
                        &nbsp;
                        <p>{bedroom}</p>
                    </span>
                    <span className="card-icons-bath">
                        <Bathtub size={32} />
                        &nbsp;
                        <p>{bathroom}</p>
                    </span>
                    <span className="card-icons-car">
                        <Car size={32} />
                        &nbsp;
                        <p>{parking}</p>
                    </span>
                    <span className="card-icons-pet">
                        <PawPrint size={32} />
                        &nbsp;
                        <p>{pet}</p>
                    </span>
                </div>

                <div className="card-price">
                    <p>${cost} per week</p>
                </div>
                <span className="card-image-dot">
                    {Object.values(pictures).map((item, index) => (
                        <span key={index} onClick={() => moveDot(index + 1)}>
                            <img
                                src={
                                    currentImage === index + 1
                                        ? selectedDot
                                        : dot
                                }
                                alt="dot"
                            />
                        </span>
                    ))}
                </span>
            </div>
        </>
    )
}
export default Card
