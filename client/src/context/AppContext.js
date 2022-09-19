import {createContext} from 'react'

import logoimg from './images/Metro-Property-Management-NZ-Logo-1 1.png'
import icon from './images/login.PNG'
import envelope from './images/envelope-simple.png'
import phone from './images/phone-call.png'
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

    return <AppContext.Provider value={{HeaderData, FooterData}}>
        {children}
    </AppContext.Provider>
}

export default AppContext