'use client'

import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { UseCases } from '@/components/UseCases'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push('/signup')
  }

  const handleLogin = () => {
    router.push('/login')
  }

  const handleCreateTask = () => {
    router.push('/tasks')
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onCreateTaskClick={handleCreateTask}
        onLoginClick={handleLogin}
        onLogoClick={() => router.push('/')}
      />
      
      <Hero onGetStartedClick={handleGetStarted} />
      <Features />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <CTA onGetStartedClick={handleGetStarted} />
      
      <Footer />
    </div>
  )
}