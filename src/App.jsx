import React from 'react'
import LandingPage from './components/landing'
import Pricing from './components/Pricing'
import Companies from './components/companies'
import Dashboard from './components/dashboard/Dashboard'
import Contact from './components/Contact'
import Footer from './components/footer/Footer'
import Testimonial from './components/reviews/Testinomial'


const App = () => {
  return (
    <div>
    <LandingPage /> 
    <Companies />
    <Dashboard />
    <Pricing />    
    <Testimonial />
    <Contact />
    <Footer />
    
    </div>
  )
}

export default App
