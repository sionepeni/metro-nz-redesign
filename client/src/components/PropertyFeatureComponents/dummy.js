import '../style/propertyDescription.css';
import Bed from '../style/pics/Bed.png';
import Bath from '../style/pics/bath.png';
import Car from '../style/pics/Car.png';
import Amenities from '../style/pics/Amenities.png';
import Map from '../Map';
import Card from '../Card/Card';
import { useState, useEffect } from "react"




export default function PropertyDescription() {

   
        const [allListings, setAllListing] = useState([])
        const [listings, setListing] = useState([])
        const [currentPage, setCurrentPage] = useState(0)
        const [numberOfPages, setNumberOfPages] = useState(0)
        const [disablePreviousBtn, setDisablePreviousBtn] = useState(true)
        const [disableNextBtn, setDisableNextBtn] = useState(false)
        const [propertySortBy, setPropertySortBy] = useState("view")
        const [propertyTypeBy, setPropertyTypeBy] = useState("")
    
        useEffect(() => {
            fetch(
                `http://localhost:5000/listings/${propertySortBy}?page=${currentPage}`
            )
                .then((response) => response.json())
                .then(({ totalPages, listings, allListings }) => {
                    setListing(listings)
                    setNumberOfPages(totalPages)
                    setAllListing(allListings)
                })
            checkBtns()
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [currentPage, propertySortBy, propertyTypeBy])
    
        const fetchListingByType = () => {
            fetch(
                `http://localhost:5000/listings/properties?page=${currentPage}&type=${propertyTypeBy}`
            )
                .then((response) => response.json())
                .then(({ totalPages, listings, allListings }) => {
                    setListing(listings)
                    setNumberOfPages(totalPages)
                    setAllListing(allListings)
                })
        }
    
        const pages = new Array(numberOfPages).fill(null).map((v, i) => i)
    
        const prevPage = () => {
            if (currentPage === 0) {
                setDisablePreviousBtn(true)
            } else {
                setCurrentPage(currentPage - 1)
            }
        }
    
        const nextPage = () => {
            if (currentPage === numberOfPages - 1) {
                setDisableNextBtn(true)
            } else {
                setCurrentPage(currentPage + 1)
            }
        }
    
        const checkBtns = () => {
            currentPage === 0
                ? setDisablePreviousBtn(true)
                : setDisablePreviousBtn(false)
            currentPage === numberOfPages - 1
                ? setDisableNextBtn(true)
                : setDisableNextBtn(false)
        }
    
        const sortListings = (e) => {
            if (e.target.value === "expensive") {
                setPropertySortBy("dsc")
            } else {
                if (e.target.value === "cheapest") {
                    setPropertySortBy("asc")
                }
            }
        }
    
        const propertyType = (e) => {
            if (e.target.value === "Apartment") {
                setPropertyTypeBy("Apartment")
                fetchListingByType()
            } else {
                if (e.target.value === "House") {
                    setPropertyTypeBy("House")
                    fetchListingByType()
                }
            }
        }
    

    return(
        <div className="Main-Container">
            <h2>2-10 Sylvan Avenue East, Mount Eden, <br/>Auckland 1024</h2>
            <img src={Bed} /> <img src={Bath}/> <img src={Car}/> <br/>
            <div className="Random-Text">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vestibulum tortor sagittis, faucibus vestibulum imperdiet pellentesque.
                 Senectus metus urna, velit praesent volutpat. Mauris quis nam ultrices amet leo accumsan. <br/><br/>
                 Property ID:5478563</p> 
                 <hr className="Horizontal"/>
                 <h4>About the property</h4>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vestibulum tortor sagittis, faucibus vestibulum imperdiet pellentesque.<br/><br/>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vestibulum tortor sagittis, faucibus vestibulum imperdiet pellentesque. Senectus metus urna, velit praesent volutpat. Mauris quis nam ultrices amet leo accumsan.<br/><br/>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vestibulum tortor sagittis, faucibus vestibulum imperdiet pellentesque. Senectus metus urna, velit praesent volutpat. Mauris quis nam ultrices amet leo accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum vestibulum tortor sagittis, faucibus vestibulum imperdiet pellentesque. Senectus metus urna, velit praesent volutpat. Mauris quis nam ultrices amet leo accumsan. 

                 </p><br/>
            
                 <hr className="Horizontal"/>
                 <h4>Property Amenities</h4><br/>
                 <div className="Amenities">
                    <img src={Amenities}/><br/><br/><br/>
                 </div>
                 <div className="Map-Container">
                    <h4>Where you'll be</h4>
                    <p>Mt Eden, Auckland</p>
                    {/* <Map/> */}
                 </div>

                 
                 <div className="Card-Container">
                  {/* <h4>Similar listings</h4> */}
                     {/* {listings.map((i, idx) => (
                        <Card item={i} key={idx} />
                    ))} */}
                    
                 </div>



                 
            </div>

            
            



        </div>
    )
}