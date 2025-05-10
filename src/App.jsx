import './App.css'
import CompaniesSection from './components/CompaniesSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/Hero'
import PricingSection from './components/PricingSection'
import ServicesOne from './components/ServicesOne'
import ServicesSection from './components/ServicesSection'
import Testimonial from './components/Testimonial'
import TrialSection from './components/TrialSection'




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
        <TrialSection />
        <Footer />
      </>
  )
}