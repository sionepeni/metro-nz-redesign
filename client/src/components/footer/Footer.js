import {useContext} from 'react'
import AppContext from '../../context/AppContext'
import '../../style/footer/Footer.css'

const Footer = () => {
    const {FooterData, HeaderData} = useContext(AppContext)

  return (
    <div className='footerContainer'>
        <div className='footerLinks'>
            <div className='footerContact'>
                <div className='footerimg'>{HeaderData.headerImg}</div>
                {FooterData.fText}
                <p>{FooterData.mail}  {FooterData.email}</p>
                <p>{FooterData.phone}  {FooterData.number}</p>
            </div>
            <div className='footerRenters'>
                {FooterData.renters}
               <p>{FooterData.learn}</p>
               <p>{FooterData.view}</p>
               <p>{FooterData.signup}</p>
            </div>
            <div className='footerCompany'>
                {FooterData.company}
                <p>{FooterData.home}</p>
                <p>{FooterData.contactus}</p>
                <p>{FooterData.about}</p>
                <p>{HeaderData.news}</p>
            </div>
            <div className='footerLandlords'>
                <p>{FooterData.landL}</p>
                <p> {FooterData.list}</p>
                <p>{FooterData.property}</p>
                <p> {FooterData.rental}</p>
                <p>{FooterData.body}</p>
            </div>
            <div className='footerHome'>
                 <p>{FooterData.healthy}</p>
                 <p>{FooterData.tenanted}</p>
                 <p>{FooterData.invest}</p>
            </div>
        </div>
        <div className='footerCopy'>
            {FooterData.copyright}
        </div>
    </div>
  )
}

export default Footer

