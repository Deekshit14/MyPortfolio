import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import TechnicalProficiency from './sections/TechnicalProficiency'
import AboutMe from './sections/AboutMe'
import MyProjects from './sections/MyProjects'
import ContactMe from './sections/ContactMe'
import Footer from './sections/Footer'
import MyCertificates from './sections/MyCertificates'

const App = () => {
     return (
          <div className='bg-[#041933]'>
               <Navbar />
               <Hero />
               <TechnicalProficiency />
               <AboutMe />
               <MyProjects />
               <MyCertificates />
               <ContactMe />
               <Footer />
          </div>
     )
}

export default App