import {useContext} from 'react'
import AppContext from '../context/AppContext'

import Header from '../components/header/Header.js'
import Footer from '../components/footer/Footer.js'
import HomeHeroImg from '../components/HomeHeroImg.js'
import HomeSearch from '../components/HomeSearch.js'
import HomeMiddleSection from '../components/HomeMiddleSection.js'
import HomeTenants from '../components/HomeTenants.js'
import HomeWhyUs from '../components/HomeWhyUs.js'
import HomeCards from '../components/HomeCards'
import HomeImageSlider from '../components/HomeImageSlider'
import ChatBot from '../components/chatbot/ChatBot'



const Home = () => {

  return (
    <div>
      <Header />
      <HomeHeroImg />
      <HomeSearch />
      <ChatBot />
      <HomeImageSlider />
      <HomeMiddleSection />
      <HomeTenants />
      <HomeWhyUs />
      <HomeCards />
      <Footer />
    </div>
  )
}

export default Home

