import React from 'react'
import Navbar from './conponents/Navbar'
import './index.css'
import Banner from './conponents/Banner'
import About from './conponents/About'
import Service from './conponents/Service'
import Resume from './conponents/Resume'
import Portfolio from './conponents/Portfolio';
import Testimonial from './conponents/Testimonial'
import Partner from './conponents/Partner'
import Blog from './conponents/Blog'
import Contact from './conponents/Contact'
import Footer from './conponents/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <About/>
    <Service/>
    <Resume/>
    <Portfolio/>
    <Testimonial/>
    <Partner/>
    <Blog/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App