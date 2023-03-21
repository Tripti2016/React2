import React from 'react'
import Article from './components/article/Article'
import NavBar from './components/navbar/NavBar'
import Brand from './components/brand/Brand'
import Cta from './components/cta/Cta'
import Feature from './components/feature/Feature'
import {Footer,Header,Possibilty,WhatGPT3,Features,Blog} from './containers'
import './App.scss'

const App = () => {
  return (
    <div className='App'>
     <div className='gradient__bg'>
      <NavBar />
      <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilty />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
