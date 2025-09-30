import React from 'react'
import Hero from '../components/Hero'
import Topics from '../components/Topics'
import TutorProfile from '../components/TutorProfile'
import StudentTestimonials from '../components/StudentTestimonials'
import PricingPlans from '../components/PricingPlans'
import TutoringForm from '../components/TutoringForm'

export default function Home() {
  return (
    <>
     <Hero />
     <Topics />
     <TutorProfile />
     <StudentTestimonials />
     <PricingPlans />
     <TutoringForm />
    </>
  )
}
