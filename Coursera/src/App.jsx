import { useState } from 'react'
import { BannerData } from './services/BannerData'
import './App.css'
import Card from './components/Card/Card'
import Nav from './components/Navbar/Nav'
import Banner from './components/Banner/Banner'
import Brands from './components/Sponsors/Sponsors'

const App = () => {

  return (
    <>
      <Nav></Nav>
      <div className='Banner1'>
        {
          BannerData.map((banner) => {
            return(<Banner icon={banner.icon} title={banner.title} description={banner.description} image={banner.image}/>)
          })
        }
      </div>
      <Brands></Brands>
      <div className='Banner2'>
        {
          BannerData.map((banner) => {
            return(<Banner title={banner.title} image={banner.image}/>)
          })
        }
      </div>
    </>
  )
}

export default App
