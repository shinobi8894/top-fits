'use client'

import AdvantageSection from './(sections)/Advantage'
import HeroSection from './(sections)/Hero'
import SupportSection from './(sections)/Support'

export default function HomePage() {

    return (
        <main className="relative bg-background text-white flex flex-col max-w-full overflow-hidden">
            <HeroSection />
            <AdvantageSection />
            <SupportSection/>
        </main>
    )
}
