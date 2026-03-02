'use client'

import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhatWeOffer from "./components/WhatWeOffer";
import CareerCategories from "./components/CareerCategories";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import JobUpdates from "./components/JobUpdates";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Foorter";
import TopJobsSection from "./components/TopJobSection";  


export default function Home() {
  return (
    <main className="min-h-screen">
      <div id="home">
        <Hero />
      </div>
      <div className="w-full">
        <div id="about">
          <AboutUs />
        </div>
        <div id="job">
          <TopJobsSection />
        </div>
        <div id="services">
          <WhatWeOffer />
          <CareerCategories />
          <Steps />
          <Testimonials />
          <JobUpdates />
        </div>
        <div id="contact-us">
          <ContactUs />
        </div>
        <Footer />
      </div>
    </main>
  )
}
