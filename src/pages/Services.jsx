import CTA from '@/Components/CTA'
import Industries from '@/Components/Industries'
import ServiceSection from '@/Components/ServiceSection'
import TechStack from '@/Components/TechStack'
import React from 'react'

const Services = ({openModel}) => {
  return (
    <>
      {/* Header Section */}
      <div
        className="bg-cover h-[250px] flex flex-col justify-center"
        style={{ backgroundImage: "url('/about-head.jpg')" }}
      >
        <div class="relative flex flex-col justify-center items-left  p-10 m-10 absolute inset-0 bg-black/30">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-100">
            Our Services
          </h1>
        </div>
      </div>

      <ServiceSection />

      <TechStack />

      <Industries />

      <CTA openModel={openModel} />

    </>
  )
}

export default Services