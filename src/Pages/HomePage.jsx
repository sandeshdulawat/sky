import React from 'react'
import Navbar from '../components/Navbar/Navbar'
// import Footer from '../components/Footer/Footer'
import HeroSection from '../components/HeroSection/HeroSection'
import GallerySlider from '../components/Gallery/GallerySlider'
import WhatYouGet from '../components/HeroSection/WhatYouGet'
import Testimonials from '../components/Testimonial/Testimonials'
import Slider from '../components/Gallery/Slider'
import About from '../components/About/About'

function HomePage() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <GallerySlider />
        <WhatYouGet />
        <Testimonials />
        <Slider />
        <About />
        {/* <Footer /> */}
    </div>
  )
}

export default HomePage
