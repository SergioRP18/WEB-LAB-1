import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Nav from './components/Navbar/Nav'
import Banner from './components/Banner/Banner'
import Brands from './components/Sponsors/Sponsors'

const App = () => {

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Brands></Brands>
    </>
  )
}

export default App
