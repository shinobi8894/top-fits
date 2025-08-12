'use client'

import AdvantageSection from './(sections)/Advantage'
import ClientSection from './(sections)/Client'
import HeroSection from './(sections)/Hero'
import SupportSection from './(sections)/Support'
import StepSection from './(sections)/Step'
import GuideSteps from './(sections)/Guide'
import GradientButton from '@/components/custom/gradient-button'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import CTASection from './(sections)/CTA'
import GoodbyeSlider from './(sections)/Goodbye'
import WhyOurLinks from './(sections)/Why'

export default function HomePage() {
    return (
        <main className="relative bg-foreground text-white flex flex-col max-w-full overflow-hidden">
            <HeroSection />
            <AdvantageSection />
            <SupportSection />
            <ClientSection />
            <StepSection />
            <GuideSteps />
            <WhyOurLinks/>
            <CTASection />
            <GoodbyeSlider />
        </main>
    )
}
