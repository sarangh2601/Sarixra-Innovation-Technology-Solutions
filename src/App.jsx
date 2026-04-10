import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ContactModal from './Components/ContactModal'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white">
        <Header openModal={openModal} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home openModal={openModal} />} />
            <Route path="/about" element={<About openModal={openModal} />} />
            <Route path="/services" element={<Services openModal={openModal} />} />
            <Route path="/ourprojects" element={<Projects openModal={openModal} />} />
            <Route path="/contactus" element={<Contact openModal={openModal} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </BrowserRouter>
  )
}
