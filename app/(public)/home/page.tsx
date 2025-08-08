'use client'

import AdvantageSection from './(sections)/Advantage'
import ClientSection from './(sections)/Client'
import HeroSection from './(sections)/Hero'
import SupportSection from './(sections)/Support'
import StepSection from './(sections)/Step'

export default function HomePage() {
    return (
        <main className="relative bg-background text-white flex flex-col max-w-full overflow-hidden">
            <HeroSection />
            <AdvantageSection />
            <SupportSection />
            <ClientSection />
            <StepSection/>
        </main>
    )
}
