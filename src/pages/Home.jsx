import AboutUs from '@/Components/AboutUs'
import ContactUs from '@/Components/ContactUs'
import CTA from '@/Components/CTA'
import Hero from '@/Components/Hero'
import Industries from '@/Components/Industries'
import ServiceSection from '@/Components/ServiceSection'
import TechStack from '@/Components/TechStack'
import WhyChoose from '@/Components/WhyChoose'
import React from 'react'

const Home = ({ openModal }) => {
  return (
     <>
        <Hero/>
        <AboutUs/>
        <WhyChoose/>
        <ServiceSection openModalContact={openModal}/>
        <TechStack/>
        <Industries/>
        <ContactUs/>
        <CTA openModal={openModal} />
     </>
  )
}

export default Home