'use client'

import AdvantageSection from './(sections)/Advantage'
import ClientSection from './(sections)/Client'
import HeroSection from './(sections)/Hero'
import SupportSection from './(sections)/Support'
import StepSection from './(sections)/Step'
import GuideSteps from './(sections)/Guide'

export default function HomePage() {
    return (
        <main className="relative bg-foreground text-white flex flex-col max-w-full overflow-hidden">
            <HeroSection />
            <AdvantageSection />
            <SupportSection />
            <ClientSection />
            <StepSection />
            <GuideSteps />
        </main>
    )
}
