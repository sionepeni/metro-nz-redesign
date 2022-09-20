import {useContext} from 'react'
import AppContext from '../context/AppContext'
import '../style/HomeMiddleSection.css'

const HomeWhyUs = () => {
    const {TenantData} = useContext(AppContext)

  return (
    <div>
      <div className='whyUsContainer'>
        <div className='whyUsText'>
            {TenantData.metroheading}
            {TenantData.metrotext}
            <div className='whyUsIcons'>
                <figure>{TenantData.metroicon1}
                <figcaption>{TenantData.metroicon1text}</figcaption>
                </figure>
                <figure>{TenantData.metroicon2}
                <figcaption>{TenantData.metroicon2text}</figcaption>
                </figure>
                <figure className='icon3'>{TenantData.metroicon3}
                <figcaption>{TenantData.metroicon3text}</figcaption>
                </figure>
            </div>
        </div>
        <div className='whyUsImg'>
            {TenantData.metroimg}
        <div className='redBlob'>
            {TenantData.redblob}
        </div>
        </div>
      </div>
    </div>
  )
}

export default HomeWhyUs
