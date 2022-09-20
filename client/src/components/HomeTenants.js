import {useContext} from 'react'
import AppContext from '../context/AppContext'
import '../style/HomeMiddleSection.css'

const HomeTenants = () => {
    const {TenantData} = useContext(AppContext)

  return (
    <div>
      <div className='tenantHeading'>
        {TenantData.tenantheading}
        {TenantData.tenantsubheading}
      </div>
      <div className='iconContainer'>
        <div className='homeIcon'>
            {TenantData.homeicon}
            {TenantData.homeiconheading}
            {TenantData.homeicontext}
        </div>
        <div className='phoneIcon'>
            {TenantData.phoneicon}
            {TenantData.phoneiconheading}
            {TenantData.phoneicontext}
        </div>
        <div className='tagIcon'>
            {TenantData.tagicon}
            {TenantData.tagiconheading}
            {TenantData.tagicontext}
        </div>
      </div>
    </div>
  )
}

export default HomeTenants
