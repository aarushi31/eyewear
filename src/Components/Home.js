import React from 'react'
import About from './Aboutus/About'
import Category from './Categories/Category'
import Cover from './Cover/Cover'
import MagicLenses from './MagicLenses/MagicLenses'
import Products from './Products/Products'
// import Newsletter from './Newsletter/Newsletter'
import Reading from './Reading/Reading'
import Testimonials from './Testimonials/Testimonials'
import Trendy from './Trendy/Trendy'

function Home() {
    return (
        <>
          <Cover/>  
          <Category/>
          <Trendy/>
          <Products/>
          <MagicLenses/>
          <Reading/>
          <Testimonials/>
          <About/>
          {/* <Newsletter/> */}
        </>
    )
}

export default Home
