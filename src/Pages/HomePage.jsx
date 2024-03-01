import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import GallerySlider from "../components/Gallery/GallerySlider";
import WhatYouGet from "../components/HeroSection/WhatYouGet";
import Testimonials from "../components/Testimonial/Testimonials";
import Slider from "../components/Gallery/Slider";
import About from "../components/About/About";
import Layout from "../components/Layout/Layout";

function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <GallerySlider />
      <WhatYouGet />
      <Testimonials />
      <Slider />
      <About />
    </Layout>
  );
}

export default HomePage;
