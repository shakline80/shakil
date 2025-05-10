import './App.css'
import CompaniesSection from './components/CompaniesSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import FreeTrail from './components/FreeTrail'
import Header from './components/Header'
import HeroSection from './components/Hero'
import PricingSection from './components/PricingSection'
import ServicesOne from './components/ServicesOne'
import ServicesSection from './components/ServicesSection'
import Testimonial from './components/Testimonial'




export default function App(){
  return (
      <>
        <Header />
        <HeroSection />
        <CompaniesSection />
        <ServicesOne />
        <ServicesSection />
        <Testimonial />
        <PricingSection />
        <FaqSection />
        <FreeTrail />
        <Footer />
      </>
  )
}