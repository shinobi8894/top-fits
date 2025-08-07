'use client'

import HeroSection from './(components)/HeroSection'
import CTAButtons from './(components)/CTAButtons'
import AnimatedSwiper from './(components)/AnimatedSwiper'
import FloatingAvatarGroup from './(components)/FloatingAvatarGroup'
import { useEffect, useState } from 'react'
import Loader from '@/components/custom/loader'

export default function HomePage() {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const handleLoad = () => setIsLoading(false)

        // If already loaded (e.g. from cache), remove loader immediately
        if (document.readyState === 'complete') {
            setIsLoading(false)
        } else {
            window.addEventListener('load', handleLoad)
        }

        return () => window.removeEventListener('load', handleLoad)
    }, [])

    if (isLoading) {
        return (
            <Loader />
        )

    }

    return (
        <main className="relative bg-background text-white flex flex-col max-w-full overflow-hidden">
            <section className='overflow-hidden relative z-10'>
                <div className="flex flex-col items-center w-full z-10 relative mb-20">
                    <HeroSection />
                    <CTAButtons />
                    <FloatingAvatarGroup />
                </div>
                <AnimatedSwiper />
                <div className='absolute top-0'>
                    <svg width="1920" height="1331" viewBox="0 0 1920 1331" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_1_224)">
                            <ellipse cx="951" cy="1790.5" rx="1022" ry="818.5" fill="#FFA13F" fill-opacity="0.5" />
                        </g>
                        <defs>
                            <filter id="filter0_f_1_224" x="-1150.82" y="-107.815" width="4203.63" height="3796.63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="539.908" result="effect1_foregroundBlur_1_224" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </section>
            <section className='w-full h-screen flex justify-center !bg-background relative z-20 py-20'>
                <h1
                    className="uppercase font-oswald text-6xl font-bold max-w-[650px] text-center leading-20 mb-4"
                >
                    TRENDING PRODUCTS HAND PICKED <span className='text-primary'>FOR YOU</span>
                </h1>
            </section>
        </main>
    )
}
