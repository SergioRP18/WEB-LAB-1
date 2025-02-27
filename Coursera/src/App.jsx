import { useState } from 'react'
import { BannerData } from './services/BannerData'
import { BannerData2 } from './services/BannerData'
import { BrandsData } from './services/BrandsData'
import { ItemsData } from './services/ItemsData'
import { UsersData } from './services/UsersData'
import './App.css'
import InvitePerson from './components/Invite/Invite'
import Users from './components/User/User'
import Items from './components/Items/Items'
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

      <div className="Brands">
            <Brands brands={BrandsData} />
      </div>

      <div className='Items'>
            <Items items={ItemsData} />
      </div>
      
      <div className='Banner2'>
        {
          BannerData2.map((banner) => {
            return(<Banner title={banner.title} image={banner.image} />)
          })
        }
      </div>

      <div className='Users'>
          <Users users={UsersData}/>
      </div>

      <InvitePerson></InvitePerson>
    </>
  )
}

export default App
