import AboutUs from '@/Components/AboutUs'
import CTA from '@/Components/CTA'
import MissionAndVision from '@/Components/MissionAndVision'
import OurValues from '@/Components/OurValues'
import React from 'react'

export default function About({ openModal }) {
  return (
    <main className="bg-white">
      {/* Header Section */}
      <div
        className="bg-cover h-[250px] flex flex-col justify-center"
        style={{ backgroundImage: "url('/about-head.jpg')" }}
      >
        <div class="relative flex flex-col justify-center items-left  p-10 m-10 absolute inset-0 bg-black/30">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-100">
            About Us
          </h1>
        </div>
      </div>
      <AboutUs />
      <MissionAndVision />
      <OurValues />
      <CTA />
    </main>
  )
}