import "../../style/Card.css"
import { useState } from "react"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { IoLocationOutline } from "react-icons/io5"
import { TbBed, TbBath, TbPaw, TbHeart } from "react-icons/tb"
import { RiCarLine } from "react-icons/ri"
import dot from "./assets/dot.png"
import selectedDot from "./assets/selected-dot.png"

function Card({
    item: { header, address, bedroom, bathroom, parking, pet, cost, pictures },
}) {
    const [currentImage, setCurrentImage] = useState(1)
    const [heartColor, setHeartColor] = useState("")

    const nextImage = () => {
        if (currentImage !== Object.keys(pictures).length) {
            return setCurrentImage(currentImage + 1)
        } else {
            if (currentImage === Object.keys(pictures).length) {
                return setCurrentImage(1)
            }
        }
    }

    const prevImage = () => {
        if (currentImage !== 1) {
            return setCurrentImage(currentImage - 1)
        } else {
            if (currentImage === 1) {
                return setCurrentImage(Object.keys(pictures).length)
            }
        }
    }

    const toggleHeart = () => {
        heartColor === "" ? setHeartColor("#F85757") : setHeartColor("")
    }

    const moveDot = (index) => {
        setCurrentImage(index)
    }

    return (
        <>
            <div className="card-container">
                <div className="card-image">
                    <span onClick={toggleHeart} className="card-image-heart">
                        <TbHeart color={heartColor} size={30} />
                    </span>
                    <span className="left-arrow" onClick={prevImage}>
                        <BsChevronLeft />
                    </span>
                    <img src={pictures[`${currentImage}`]} alt="house" />
                    <span className="right-arrow" onClick={nextImage}>
                        <BsChevronRight />
                    </span>
                    <span className="card-image-dots">
                        {Object.values(pictures).map((item, idx) => (
                            <span key={idx}>
                                <img src={dot} alt="dot" />
                            </span>
                        ))}
                    </span>
                </div>

                <div className="card-description">
                    <h3>{header}</h3>
                </div>

                <div className="card-address">
                    <span className="card-description-logo">
                        <IoLocationOutline size={30} />
                    </span>
                    <p>{address}</p>
                </div>

                <div className="card-icons">
                    <span className="card-icons-bed">
                        <TbBed size={35} />
                        &nbsp;
                        <p>{bedroom}</p>
                    </span>
                    <span className="card-icons-bath">
                        <TbBath size={25} />
                        &nbsp;
                        <p>{bathroom}</p>
                    </span>
                    <span className="card-icons-car">
                        <RiCarLine size={25} />
                        &nbsp;
                        <p>{parking}</p>
                    </span>
                    <span className="card-icons-pet">
                        <TbPaw size={25} />
                        &nbsp;
                        <p>{pet}</p>
                    </span>
                </div>

                <div className="card-price">
                    <p>${cost} per week</p>
                </div>
                <span className="card-image-test">
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
