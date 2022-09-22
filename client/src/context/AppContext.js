import {createContext} from 'react'

import logoimg from './images/Metro-Property-Management-NZ-Logo-1 1.png'
import icon from './images/login.PNG'
import envelope from './images/envelope-simple.png'
import phone from './images/phone-call.png'
import ellipse from './images/Ellipse 57.png'
import vector from './images/Vector.png'
import timeline from './images/timeline.PNG'
import house from './images/house.png'
import sliders from './images/sliders.png'
import mappin from './images/map-pin.png'
import tiltedimg1 from './images/tiltedimg1.PNG'
import tiltedimg2 from './images/tiltedimg2.PNG'
import search from './images/magnifying-glass.png'
import middleimg from './images/middleimg.png'
import homeicon from './images/redhomeicon.png'
import phoneicon from './images/redphoneicon.png'
import tagicon from './images/redtagicon.png'
import thousand from './images/1000.png'
import twothousand from './images/2000.png'
import trophy from './images/trophy.png'
import metroimg from './images/metroimg.png'
import redblob from './images/redblob.png'
import stars from './images/stars.png'
import kate from './images/kate.png'
import pinal from './images/pinal.png'
import annette from './images/annette.png'
import speech from './images/speech.png'
import round from './images/round.png'
import awards from './images/awards.png'
import westpac from './images/westpac.png'
import topreviews from './images/topreviews.png'
import '../style/context/AppContext.css'

const AppContext = createContext()

export const AppProvider = ({children}) => {

    const HeaderData = {
        headerImg: <img src={logoimg} alt='logo' />,
        news: <a href='url'>News</a>,
        about: <a href='url'>About us</a>,
        contact: <a href='url'>Contact</a>,
        button1: <button className='button1'>View property listings</button>,
        button2: <button className='button2'>List a property</button>,
        icon: <img src={icon} alt='icon' />
    }

    const FooterData = {
        fText: <p>'Metro Nz property Management is here<br/>for Renters and Landlords to achieve<br/>harmony'</p>,
        mail: <img src={envelope} alt='mail' />,
        email: 'agensi@gmail.com',
        phone: <img src={phone} alt='phone' />,
        number: '+ 12 3456 7890',

        renters: <p><b>Renters</b></p>,
        learn: 'Learn More',
        view: 'View Properties',
        signup: 'Signup/Login',

        company: <p><b>Company</b></p>,
        home: 'Home',
        contactus: 'Contact Us',
        about: 'About',

        landL: <p><b>LandLords</b></p>,
        list: 'List a Property',
        property: 'Property Management',
        building: 'Building Management',
        rental: 'Rental Management',
        body: 'Body Corporate',

        healthy: 'Healthy Home Standards',
        tenanted: 'Tenanted Sales',
        invest: 'Investment Properties',

        copyright: <p>Design with love All right reserved</p>
    }

    const HomeData = {
        ellipse: <img src={ellipse} alt='ellipse' />,
        vector: <img src={vector} alt='vector' />,
        mainText: <h1>Discover the perfect<br/>rental to call home</h1>,
        subText: <p>We can help you find your dream home.<br/>It's simple and easy with us.</p>,
        apply: <h1>Apply for a new rental home in 4 easy steps</h1>,
        timeline: <img src={timeline} alt='timeline' />,
        select: <img src={house} alt='house'></img>,
        sliders: <img src={sliders} alt='slider' />,
        mappin: <img src={mappin} alt='map pin' />,
        tiltedimg1: <img src={tiltedimg1} alt='tiltedimg' />,
        tiltedimg2: <img src={tiltedimg2} alt='tiltedimg' />,
        search: <img src={search} alt='search' />,
        middleimg: <img src={middleimg} alt='middle img' />,
        middletext: <h1>Need some help with your search?</h1>,
        middlesubtext: <h4><b>Take our questionare to help us help you.</b></h4>,
        middlesubtext2:  <h5>Answer a few quick questions to help us learn more about your needs so we can <br/>
        best match you with your dream rental home.</h5>,
        middlebutton: <button className='middleButton'>Get started</button>
    }

    const TenantData = {
        tenantheading: <h1>We care about our tenants</h1>,
        tenantsubheading: <p>We offer a full range of personal but proffesional tenant services <br/>
                            Here are just a few of the benefits of renting with Metro.</p>,
        homeicon: <img src={homeicon} alt='icon'/>,
        homeiconheading: <h3>A safe and healthy home</h3>,
        homeicontext: <p>We ensure all properties under our <br/>
                        management comply with the Residential <br/>
                        Tenancies (Healthy Homes Standards) <br/>
                        Regulations 2019 and are tested for <br/>
                        methamphetamine between tenancies</p>,
        phoneicon: <img src={phoneicon} alt='icon' />,
        phoneiconheading: <h3>24/7 responsive service</h3>,
        phoneicontext: <p>Property management isn't a 9-5 job. Broken <br/>
                        pipes can;t wait until morning. We're <br/>
                        contactable 24/7, 365 days of the year.</p>,
        tagicon: <img src={tagicon} alt='icon' />,
        tagiconheading: <h3>Long-term rental discount</h3>,
        tagicontext: <p>We know many of our tenants are saving<br/>
                    for their first home and we want to help <br/>
                    you get there. We offer discouunts for our <br/>
                    tenants who decide to stay with us longer. <br/>
                    Getting you closer to your dream home.</p>,
        metroheading: <h1>Have a great experience with <br/> Metro NZ</h1>,
        metrotext: <p>Metro NZ is one of the top Auckland Property Management companies. From Mt. Albert<br/>
                    and Three Kings to all over the Auckland region, we have your next place for you.<br/><br/>
                    We like to treat our tenants like we would treat our guests. We want you to feel<br/>
                    comfortable and at home when you are looking for potential rentals. You can count on<br/>
                    us to treat you with respect.<br/><br/>
                    We ensure that every property listed with us meets New Zealand standards and are in<br/>
                    good condition. You can count on us for homes that meet healthy home standards for<br/>
                    your comfort and harmony.</p>,
        metroicon1: <img src={thousand} alt='1000'/>,
        metroicon1text: <h3>Homes Rented</h3>,
        metroicon2: <img src={twothousand} alt='2000'/>,
        metroicon2text: <h3>Happy Renters</h3>,
        metroicon3: <img src={trophy} alt='trophy'/>,
        metroicon3text: <h3>Award Winning Service</h3>,
        metroimg: <img src={metroimg} alt='img' />,
        redblob: <img src={redblob} alt='blob' />,
    }

    const HomeCards = {
        homecardheading: <h1>Dont' just take our word for it</h1>,
        stars: <img src={stars} alt='stars' />,
        kate: <img src={kate} alt='kate' />,
        pinal: <img src={pinal} alt='pinal' />,
        annette: <img src={annette} alt='annette' />,
        readmore: 'read more',
        katename: 'Kate Kendrick',
        pinalname: 'Pinal Patel',
        annettename: 'Annette Black',
        speech: <img src={speech} alt='speech' />,
        round: <img src={round} alt='round' />,
        awards: <img src={awards} alt='awards' />,
        westpac: <img src={westpac} alt='westpac' />,
        topreviews: <img src={topreviews} alt='reviews' />
    }

    return <AppContext.Provider value={{HeaderData, FooterData, HomeData, TenantData, HomeCards}}>
        {children}
    </AppContext.Provider>
}

export default AppContext