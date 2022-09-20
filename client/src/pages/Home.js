import {useContext} from 'react'
import AppContext from '../context/AppContext'

import Header from '../components/header/Header.js'
import Footer from '../components/footer/Footer.js'
import HomeHeroImg from '../components/HomeHeroImg.js'
import HomeSearch from '../components/HomeSearch.js'
import HomeMiddleSection from '../components/HomeMiddleSection.js'
import HomeTenants from '../components/HomeTenants.js'
import HomeWhyUs from '../components/HomeWhyUs.js'


const Home = () => {
  const {HomeCards} = useContext(AppContext)

  return (
    <div>
      <Header />
      <HomeHeroImg />
      <HomeSearch />
      <HomeMiddleSection />
      <HomeTenants />
      <HomeWhyUs />
      <Footer />
    </div>
  )
}

export default Home

