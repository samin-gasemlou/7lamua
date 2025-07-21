import React from 'react'
import Header from '../sections/Header'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import Description from '../sections/Description'
import WhyUs from '../sections/WhyUs'
import Media from '../sections/Media'
import FeedBack from '../sections/FeedBack'
import Footer from '../sections/Footer'
import Description2 from '../sections/Description2'

function Home () {
  return (
    <div className='pt-[95px]'>
      <Header />
      <Hero />
      <Services />
      <Description />
      <Description2 />
      <WhyUs />
      <Media />
      <FeedBack />
      <Footer /> 
    </div>
  )
}

export default Home
